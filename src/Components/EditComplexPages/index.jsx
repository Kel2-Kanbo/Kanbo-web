import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import LoadingSvg from "../Loading/LoadingSvg";
import Swal from "sweetalert2";

export default function EditComplexPages() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [isDataReady, setIsDataReady] = useState(false);

  const [complex, setComplex] = useState([]);

  const [inputs, setInputs] = useState({
    complexName: "",
  });

  const handleInput = (value, key) => {
    const newInputs = { ...inputs };

    newInputs[key] = value;

    // Kepo isi variable
    console.log(newInputs[key]);

    setInputs(newInputs);

    // Kepo isi variable
    console.log(newInputs);
  };

  const [isUpdate, setIsUpdate] = useState({ id: null, status: false});

  const [formData, setFormData] = useState({
    complexName: "",
  });

  function handleChange(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);

    navigate("/complex");
  };

  function handleSubmit(e){
    e.preventDefault();
    let data = [...complex];
    Swal.fire({
      title: "Sukses!",
      text: "Data Berhasil Diupdate",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
          navigate("/complex");
      //   Swal.fire("Terima!", "success");
      }
    });

    if (formData.complexName === ""){
      return false;
    }

    if (isUpdate.status) {
      data.foreach((complex) => {
        if (complex.id === isUpdate.id){
          complex.complexName = formData.complexName;
        }
      });
    }else {
      data.push({ 
        id: uuidv4(),
        complexName: formData.value,
    });
    }

    // menambahkan complex
    
  setComplex(data);
  setFormData({ complexName: ""});
  setIsUpdate({ id: null, status: false});
  }

  function handleEdit(id){
    let data = [...complex];
    let foundData = data.find(complex => complex.id === id);
    setFormData({name: foundData.complexName});
    setIsUpdate({ id: id, status: true});
  }

  return (
    <div>
      Edit data
      
        <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label
            htmlFor="complexName"
            className="col-sm-2 col-form-label"
          >
            Complex Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="complexName"
              className="focontrolrm-"
              id="complexName"
              value={formData.complexName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-2"></div>
          <div className="col-sm-10">
            <button
              type="submit"
              className="btn btn-primary btn-simpan"
            >
              Ubah
            </button>
            <button
              type="reset"
              className="btn btn-danger ms-2 btn-batal"
            >
              Batal
            </button>
          </div>
        </div>
      </form>

    </div>
  )
}
