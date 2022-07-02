import React, { useState, useEffect, useContext } from "react";
// import { v4 as uuidv4 } from "uuid";
import {
    getComplex,
    createBuilding,
    createNearby,
    getCategoryNearby,
} from "../../../API/ApiFetch";
import { Link, useLocation } from "react-router-dom";

import FormInput from "../../../Components/FormInput";
import SelectWrap from "../../../Components/SelectWrap";
import FormWrap from "../../../Components/FormWrap";
import FormTextArea from "../../../Components/FormTextArea";
import Button from "../../../Components/Button";
import Sidebar from "../../../Components/Sidebar";
import Navbar from "../../../Components/Navbar";
import ListNearbyFacility from "../CreateBuilding/ListNearbyFacility";

export default function UpdateBuilding(props) {
  const location = useLocation();
  const state = location.state;
  const [building, setBuilding] = useState(state);
  console.log(building);
  const value = Object.values(building);
  console.log(value);
  const getDataBuilding = value?.map((item) => {
    return item;
  });
  console.log(getDataBuilding);
  console.log(getDataBuilding[0].id);

  const [complex, setComplex] = useState([]);
  console.log(complex);

  const [data, setData] = useState({
    buildingName: "",
    complexName: "",
    address: "",
    jumlahRoom: "",
    description: "",
    picture: "",
  });

  const [nearby, setNearby] = useState({
    id: "",
    facility: "",
    category: "",
    distance: "",
    time: "",
  });
  console.log(nearby);
  const [categoryNearby, setCategoryNearby] = useState([]);
  console.log(categoryNearby);

  const [msg, setMsg] = useState("");

  const [inputs, setInputs] = useState([
    {
      id: 0,
      name: "buildingName",
      type: "text",
      placeholder: "Building Name",
      value: getDataBuilding[0].buildingName,
      required: true,
    },
    {
      id: 1,
      name: "jumlahRoom",
      type: "number",
      placeholder: "Jumlah Room",
      value: getDataBuilding[0].numOfRooms,
      required: true,
    },
    {
      id: 2,
      name: "address",
      type: "text",
      placeholder: "Address",
      value: getDataBuilding[0].complexAdress,
      required: true,
    },
    {
      id: 3,
      name: "complexName",
      type: "select",
      placeholder: "Complex Name",
      //   options: complex_name,
      value: getDataBuilding[0].complexName,
      required: true,
    },

    {
      id: 4,
      name: "description",
      type: "textarea",
      placeholder: "Description",
      value: getDataBuilding[0].description,
      required: true,
    },
  ]);

  console.log(inputs);

  const [inputNearby, setInputNearby] = useState([
    {
      id: 0,
      name: "facility",
      type: "text",
      placeholder: "Facility",
      value: "",
      required: true,
    },
    {
      id: 1,
      name: "category",
      type: "select",
      placeholder: "Category",
      options: ["Hospital", "Bank", "Mall"],
      value: "",
      // required: true,
    },
    {
      id: 2,
      name: "distance",
      type: "number",
      placeholder: "Distance km",
      value: "",
      required: true,
    },
    {
      id: 3,
      name: "time",
      type: "time",
      placeholder: "Time",
      value: "",
      // required: true,
    },
  ]);

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
    setData({
      ...data,
      [inputs[index].name]: value,
    });
  };

  const _handleChangeNearby = (value, index) => {
    setInputNearby(
      inputNearby.map((input) => {
        if (input.id === index) {
          return {
            ...input,
            value,
          };
        }
        return input;
      })
    );
    setNearby({
      ...nearby,
      [inputNearby[index].name]: value,
    });
  };

  const _handleCreateNearby = (e) => {
    if (
      inputNearby[0].value &&
      inputNearby[1].value &&
      inputNearby[2].value &&
      inputNearby[3].value
    ) {
      createNearby({
        building_id: data.id,
        name: inputNearby[0].value,
        category: inputNearby[1].value,
        description: inputNearby[2].value,
        time: inputNearby[3].value,
      });

      e.preventDefault();

      setInputNearby([
        {
          id: 0,
          name: "facility",
          type: "text",
          placeholder: "Facility",
          value: "",
          required: true,
        },
        {
          id: 1,
          name: "category",
          type: "select",
          placeholder: "Category",
          options: ["Hospital", "Bank", "Mall"],
          value: "",
          // required: true,
        },
        {
          id: 2,
          name: "distance",
          type: "text",
          placeholder: "Distance",
          value: "",
          required: true,
        },
        {
          id: 3,
          name: "time",
          type: "time",
          placeholder: "Time",
          value: "",
          // required: true,
        },
      ]);
    } else {
      setMsg("Please fill out all fields");
    }
  };

  const [imageBuilding, setImageBuilding] = useState("");

  const uploadImageBuilding = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImageBuilding(base64);
    console.log(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const _handleUpdateBuilding = (e) => {
    if (
      inputs[0].value &&
      inputs[1].value &&
      inputs[2].value &&
      inputs[3].value &&
      inputs[4].value
    ) {
      createBuilding({
        buildingName: inputs[0].value,
        numOfRooms: inputs[1].value,
        complexAddress: inputs[2].value,
        complexName: inputs[3].value,
        description: inputs[4].value,
        building_image: imageBuilding,
      });

      e.preventDefault();

      setInputs([
        {
          id: 0,
          name: "buildingName",
          type: "text",
          placeholder: "Building Name",
          value: "",
          required: true,
        },
        {
          id: 1,
          name: "jumlahRoom",
          type: "number",
          placeholder: "Jumlah Room",
          value: "",
          required: true,
        },
        {
          id: 2,
          name: "address",
          type: "text",
          placeholder: "Address",
          value: "",
          required: true,
        },
        {
          id: 3,
          name: "complexName",
          type: "select",
          placeholder: "Complex Name",
          //   options: complex_name,
          value: "",
          required: true,
        },

        {
          id: 4,
          name: "description",
          type: "textarea",
          placeholder: "Description",
          value: "",
          required: true,
        },
      ]);
    } else {
      setMsg("Please fill out all fields");
    }
  };

  //get complex
  const getAllComplex = async () => {
    try {
      await getComplex().then((response) => {
        setComplex(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //get category facility
  const getAllCategory = async () => {
    try {
      await getCategoryNearby().then((response) => {
        setCategoryNearby(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getAllComplexes = async () => {
      const allComplex = await getAllComplex();
      if (allComplex) {
        setComplex(allComplex);
        console.log(allComplex);
      }
    };
    getAllComplexes();

    const getAllCategories = async () => {
      const allCategory = await getAllCategory();
      if (allCategory) {
        setCategoryNearby(allCategory);
        console.log(allCategory);
      }
    };
    getAllCategories();
  }, []);


  return (
    <div className=" flex bg-secondary-blue h-screen">
      <Sidebar />
      <Navbar />
      <div className="basis-5/6">
        <div className="px-4 py-4 mt-20">
          <h1 className="text-3xl font-bold mb-4">Building</h1>

          <div className="flex items-center justify-between mb-6">
            <FormWrap onSubmit={_handleUpdateBuilding}>
              <h3 className="text-2xl text-left font-bold">Update Building</h3>
              <p className="has-text-centered text-error-red">{msg}</p>
              <div className="w-full grid grid-cols-2 gap-4">
                {inputs.map((input, inputIdx) =>
                  input.type !== "select" && input.type !== "textarea" ? (
                    <>
                      <FormInput
                        key={inputIdx}
                        {...input}
                        value={input.value}
                        type={input.type}
                        onChange={(e) =>
                          _handleChange(e.target.value, inputIdx)
                        }
                      />
                    </>
                  ) : input.type === "select" ? (
                    <>
                      <SelectWrap
                        key={inputIdx}
                        type={input.type}
                        onChange={(e) =>
                          _handleChange(e.target.value, inputIdx)
                        }
                        value={input.value}
                      >
                        <option value="">{input.value}</option>
                        {complex.map((complex, complexIdx) => (
                          <option key={complexIdx} value={complex.id}>
                            {complex.complex_name}
                          </option>
                        ))}
                      </SelectWrap>
                    </>
                  ) : input.type === "textarea" ? (
                    <>
                      <div className="col-start-1 col-end-3">
                        <FormTextArea
                          key={inputIdx}
                          {...input}
                          value={input.value}
                          type={input.type}
                          onChange={(e) =>
                            _handleChange(e.target.value, inputIdx)
                          }
                        />
                      </div>
                    </>
                  ) : (
                    ""
                  )
                )}

                <div className="flex items-start justify-start">
                  <FormInput
                    type="file"
                    id="gambar"
                    onChange={(e) => uploadImageBuilding(e)}
                  />
                </div>
              </div>

              <h4 className="text-lg text-left font-bold">Nearby facilities</h4>
              <div className="grid grid-cols-3 gap-4 justify-items-start">
                {inputNearby.map((inputNearby, inputNearbyIdx) =>
                  inputNearby.name === "facility" ? (
                    <>
                      <FormInput
                        className="w-full col-start-1 col-end-3"
                        key={inputNearbyIdx}
                        {...inputNearby}
                        value={inputNearby.value}
                        type={inputNearby.type}
                        onChange={(e) =>
                          _handleChangeNearby(e.target.value, inputNearbyIdx)
                        }
                      />
                    </>
                  ) : inputNearby.type === "select" ? (
                    <>
                      <SelectWrap
                        key={inputNearbyIdx}
                        type={inputNearby.type}
                        onChange={(e) =>
                          _handleChangeNearby(e.target.value, inputNearbyIdx)
                        }
                        value={inputNearby.value}
                      >
                        <option value="">Category</option>
                        {categoryNearby.map(
                          (categoryNearby, categoryNearbyIdx) => (
                            <option
                              key={categoryNearbyIdx}
                              value={categoryNearby.id}
                            >
                              {categoryNearby.category_name}
                            </option>
                          )
                        )}
                      </SelectWrap>
                    </>
                  ) : (
                    <>
                      <FormInput
                        key={inputNearbyIdx}
                        {...inputNearby}
                        value={inputNearby.value}
                        type={inputNearby.type}
                        onChange={(e) =>
                          _handleChangeNearby(e.target.value, inputNearbyIdx)
                        }
                      />
                    </>
                  )
                )}
                <Button
                  className="bg-primary-gray text-primary-white font-bold uppercase text-sm px-6 py-3 rounded shadow mr-1 mb-1"
                  type="button"
                  onClick={_handleCreateNearby}
                >
                  Add Nearby Facility
                </Button>
              </div>

              <ListNearbyFacility nearby={nearby} />

          
              <div className="w-full flex justify-end">
                <div className="flex w-2/4 items-center gap-4">
                  <Button
                    className="font-bold bg-secondary-softblue text-primary-blue w-1/2 uppercase px-6 py-3 text-sm rounded shadow mr-1 mb-1"
                    type="button"
                  >
                    Close
                  </Button>
                  <Button
                    className="bg-primary-blue w-1/2 text-primary-white font-bold uppercase text-sm px-6 py-3 rounded shadow mr-1 mb-1"
                    type="button"
                    onClick={_handleUpdateBuilding}
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
