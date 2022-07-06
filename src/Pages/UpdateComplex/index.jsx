import React, { useState, useEffect, useContext } from "react";
// import { v4 as uuidv4 } from "uuid";
import {
  getCity,
  getDistrict,
  getProvince,
  editComplex,
} from "../../API/ApiFetch";
import { Link, useLocation, useNavigate } from "react-router-dom";

import FormInput from "../../Components/FormInput";
import SelectWrap from "../../Components/SelectWrap";
import FormWrap from "../../Components/FormWrap";
import Button from "../../Components/Button";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import Swal from "sweetalert2";

export default function UpdateComplex(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const [complex, setComplex] = useState(state);

  const value = Object.values(complex);
  console.log(value);
  const getDataComplex = value?.map((item) => {
    return item;
  });

  const [data, setData] = useState({
    id: 0,
    complexName: "",
    complexAddress: "",
    city: "",
    district: "",
    building: "",
  });

  const [province, setProvince] = useState([]);
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);
  const [msg, setMsg] = useState("");

  const _handleChange = (value, index) => {
    setInputs(
      inputs.map((input) => {
        if (input.id === index) {
          return {
            ...input,
            value,
          };
        }
        return input;
      })
    );

    setComplex({
      ...complex,
      [inputs[index].name]: value,
    });
  };


  // useEffect(() => {
  //   getProvince().then((response) => {
  //     setProvince(response);
  //   }
  //   );
  // }, []);

  // useEffect(() => {
  //   getCity(complex.province).then((response) => {
  //     setCity(response);
  //   }
  //   );
  // }, [complex.province]);

  // useEffect(() => {
  //   getDistrict(complex.city).then((response) => {
  //     setDistrict(response);
  //   }
  //   );
  // }, [complex.city]);

  const [inputs, setInputs] = useState([
    {
      id: 0,
      name: "complexName",
      type: "text",
      placeholder: "Complex Name",
      value: getDataComplex[0].complex_name,
      required: true,
    },
    {
      id: 1,
      name: "complexAddress",
      type: "text",
      placeholder: "Complex Address",
      value: getDataComplex[0].address,
      required: true,
    },
    {
      id: 2,
      name: "building",
      type: "number",
      placeholder: "Building",
      value: getDataComplex[0].numOfBuilding,
      required: true,
    },
    {
      id: 3,
      name: "province",
      type: "select",
      placeholder: "Province",
      options: province,
      // options: complexProvince,
      value: getDataComplex[0].province_name,
      required: true,
    },
    {
      id: 4,
      name: "city",
      type: "select",
      placeholder: "City",
      // options: city_name,
      options: city,

      value: getDataComplex[0].city_name,
      required: true,
    },
    {
      id: 5,
      name: "district",
      type: "select",
      placeholder: "District",
      options: district,
      value: getDataComplex[0].district_name,
      required: true,
    },
  ]);

  // const _handleSubmit = (e) => {
  //   e.preventDefault();
  //   editComplex(data);
  // }

  const _handleUpdateComplex = async (id, data) => {
    if (
      inputs[0].value &&
      inputs[1].value &&
      inputs[2].value &&
      inputs[3].value &&
      inputs[4].value &&
      inputs[5].value
    ) {
      editComplex(id, data).then((response) => {
        console.log(response);
        if (response.message === 200) {
          Swal.fire({
            title: "Update Building Success",
            confirmButtonColor: "#4C35E0",
          }).then((result) => {
            if (result.isConfirmed) {
              setComplex(
                complex.map((item) => (item.id === data.id ? data : item))
              );
            }
          });
        }
      });
      navigate("/complex");

      setInputs([
        {
          id: 0,
          name: "complexName",
          type: "text",
          placeholder: "Complex Name",
          value: getDataComplex[0].complex_name,
          required: true,
        },
        {
          id: 1,
          name: "complexAddress",
          type: "text",
          placeholder: "Complex Address",
          value: getDataComplex[0].address,
          required: true,
        },
        {
          id: 2,
          name: "building",
          type: "number",
          placeholder: "Building",
          value: getDataComplex[0].numOfBuilding,
          required: true,
        },
        {
          id: 3,
          name: "province",
          type: "select",
          placeholder: "Province",
          options: province,
          // options: complexProvince,
          value: getDataComplex[0].province_name,
          required: true,
        },
        {
          id: 4,
          name: "city",
          type: "select",
          placeholder: "City",
          // options: city_name,
          options: city,

          value: getDataComplex[0].city_name,
          required: true,
        },
        {
          id: 5,
          name: "district",
          type: "select",
          placeholder: "District",
          options: district,
          value: getDataComplex[0].district_name,
          required: true,
        },
      ]);
    } else {
      setMsg("Please fill out all fields");
    }
  };

  const _handleClose = () => {
    navigate("/complex");
    setInputs([
      {
        id: 0,
        name: "complexName",
        type: "text",
        placeholder: "Complex Name",
        value: getDataComplex[0].complex_name,
        required: true,
      },
      {
        id: 1,
        name: "complexAddress",
        type: "text",
        placeholder: "Complex Address",
        value: getDataComplex[0].address,
        required: true,
      },
      {
        id: 2,
        name: "building",
        type: "number",
        placeholder: "Building",
        value: getDataComplex[0].numOfBuilding,
        required: true,
      },
      {
        id: 3,
        name: "province",
        type: "select",
        placeholder: "Province",
        options: province,
        // options: complexProvince,
        value: getDataComplex[0].province_name,
        required: true,
      },
      {
        id: 4,
        name: "city",
        type: "select",
        placeholder: "City",
        // options: city_name,
        options: city,

        value: getDataComplex[0].city_name,
        required: true,
      },
      {
        id: 5,
        name: "district",
        type: "select",
        placeholder: "District",
        options: district,
        value: getDataComplex[0].district_name,
        required: true,
      },
    ]);
  };

  return (
    <div className=" flex bg-secondary-blue h-screen">
      <Sidebar />
      <Navbar />
      <div className="basis-5/6">
        <div className="px-4 py-4 mt-20">
          <h1 className="text-3xl font-bold mb-4">Complex</h1>

          <div className="flex items-center justify-between mb-6">
            <FormWrap onSubmit={_handleUpdateComplex}>
              <h3 className="text-2xl text-center font-bold">Update Complex</h3>
              <p className="has-text-centered text-error-red">{msg}</p>
              {/* <div className="w-full grid grid-cols-3 gap-4"> */}
              {inputs.map((input, inputIdx) =>
                input.type !== "select" ? (
                  <>
                    <FormInput
                      key={inputIdx}
                      {...input}
                      value={input.value}
                      type={input.type}
                      onChange={(e) => _handleChange(e.target.value, inputIdx)}
                    />
                  </>
                ) : (
                  <>
                    <SelectWrap
                      type={input.type}
                      onChange={(e) => _handleChange(e.target.value, inputIdx)}
                    >
                      <option value="">{input.value}</option>
                      {/* {input.options.map((option, optionIdx) => (
                          <option key={optionIdx} value={option}>
                            {option}
                          </option>
                        ))} */}
                      {input.name === "province"
                        ? province.map((option, optionIdx) => (
                            <option key={optionIdx} value={option.id}>
                              {option.name}
                            </option>
                          ))
                        : input.name === "city"
                        ? city.map((option, optionIdx) => (
                            <option key={optionIdx} value={option.id}>
                              {option.name}
                            </option>
                          ))
                        : district.map((option, optionIdx) => (
                            <option key={optionIdx} value={option.id}>
                              {option.name}
                            </option>
                          ))}
                    </SelectWrap>
                  </>
                )
              )}
              {/* </div> */}

              <div className="w-full flex justify-end">
                <div className="flex w-2/4 items-center gap-4">
                  <Button
                    className="font-bold bg-secondary-softblue text-primary-blue w-1/2 uppercase px-6 py-3 text-sm rounded shadow mr-1 mb-1"
                    type="button"
                    onClick={_handleClose}
                  >
                    Close
                  </Button>
                  <Button
                    className="bg-primary-blue w-1/2 text-primary-white font-bold uppercase text-sm px-6 py-3 rounded shadow mr-1 mb-1"
                    type="button"
                    onClick={_handleUpdateComplex}
                  >
                    Update Complex
                  </Button>
                </div>
              </div>
            </FormWrap>
          </div>
        </div>
      </div>
    </div>
  );
}
