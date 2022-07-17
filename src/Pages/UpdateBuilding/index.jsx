import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  getComplex,
  editBuilding,
  getCategoryNearby,
} from "../../API/ApiFetch";

import FormInput from "../../Components/FormInput";
import SelectWrap from "../../Components/SelectWrap";
import FormWrap from "../../Components/FormWrap";
import Button from "../../Components/Button";
import FormTextArea from "../../Components/FormTextArea";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import ListNearbyFacility from "../../Components/ListNearbyFacility";

export default function UpdateBuilding() {
  const navigate = useNavigate();
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

  const [complex, setComplex] = useState([]);
  console.log(complex);

  const [data, setData] = useState({
    buildingName: "",
    complexName: "",
    address: "",
    description: "",
    picture: "",
    nearby: [],
  });

  const [nearby, setNearby] = useState(getDataBuilding[0].facilityResponseList);
  const [nearbyFacility, setNearbyFacility] = useState({
    name: "",
    categoryId: "",
    distance: 0,
    duration: 0,
  });

  console.log(nearby);
  console.log(nearbyFacility);
  const [categoryNearby, setCategoryNearby] = useState([]);

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
      name: "complexName",
      type: "select",
      placeholder: "Complex Name",
      value: getDataBuilding[0].complexName,
      required: true,
    },
    {
      id: 2,
      name: "address",
      type: "text",
      placeholder: "Address",
      value: getDataBuilding[0].address,
      required: true,
    },
    {
      id: 3,
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
      name: "name",
      type: "text",
      placeholder: "Facility",
      value: "",
      required: true,
    },
    {
      id: 1,
      name: "categoryId",
      type: "select",
      placeholder: "Category",
      value: "",
      required: true,
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
      name: "duration",
      type: "number",
      placeholder: "Duration minute",
      value: "",
      required: true,
    },
  ]);

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

    setNearbyFacility({
      ...nearbyFacility,
      [inputNearby[index].name]: value,
    });
  };

  const _handleDeleteNearby = (name) => {
    Swal.fire({
      title: "Nearby Facility has been deleted",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ok",
    });

    setNearby(nearby.filter((nearby) => nearby.name !== name));
  };

  const _handleCreateNearby = (e) => {
    if (
      inputNearby[0].value &&
      inputNearby[1].value &&
      inputNearby[2].value &&
      inputNearby[3].value
    ) {
      setNearbyFacility({
        name: inputNearby[0].value,
        categoryId: inputNearby[1].value,
        distance: inputNearby[2].value,
        duration: inputNearby[3].value,
      });

      setNearby([...nearby, nearbyFacility]);

      e.preventDefault();

      Swal.fire({
        title: "Success",
        text: "Nearby Facility added",
        icon: "success",
        confirmButtonText: "OK",
      });

      setInputNearby([
        {
          id: 0,
          name: "name",
          type: "text",
          placeholder: "Facility",
          value: "",
          required: true,
        },
        {
          id: 1,
          name: "categoryId",
          type: "select",
          placeholder: "Category",
          value: "",
          required: true,
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
          name: "duration",
          type: "number",
          placeholder: "Duration minute",
          value: "",
          required: true,
        },
      ]);
    } else {
      setMsg("Please fill out all fields");
    }
  };

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

  //convert image with base64
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
      inputs[3].value
    ) {
      editBuilding(
        getDataBuilding[0].id,
        {
        name: inputs[0].value,
        idComplex: inputs[1].value,
        address: inputs[2].value,
        description: inputs[3].value,
        facilities: nearby,
        buildingImage: imageBuilding,
      });


      Swal.fire({
        title: "Success",
        text: "Building has been updated",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/building");
      e.preventDefault();

      setInputs([
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
          name: "complexName",
          type: "select",
          placeholder: "Complex Name",
          value: getDataBuilding[0].complexName,
          required: true,
        },
        {
          id: 2,
          name: "address",
          type: "text",
          placeholder: "Address",
          value: getDataBuilding[0].address,
          required: true,
        },
        {
          id: 3,
          name: "description",
          type: "textarea",
          placeholder: "Description",
          value: getDataBuilding[0].description,
          required: true,
        },
      ]);
    } else {
      setMsg("Please fill out all fields");
    }
  };

  const _handleClose = () => {
    navigate("/building");
    setInputs([
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
        name: "complexName",
        type: "select",
        placeholder: "Complex Name",
        value: getDataBuilding[0].complexName,
        required: true,
      },
      {
        id: 2,
        name: "address",
        type: "text",
        placeholder: "Address",
        value: getDataBuilding[0].address,
        required: true,
      },
      {
        id: 3,
        name: "description",
        type: "textarea",
        placeholder: "Description",
        value: getDataBuilding[0].description,
        required: true,
      },
    ]);
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
    getAllCategory();
    getAllComplex();
  }, []);

  return (
    <div className=" flex bg-secondary-blue h-full">
      <Sidebar />
      {/* <Navbar /> */}
      <div className="basis-5/6">
        <div className="px-4 py-4 mt-20">
          <div className="flex items-center justify-between mb-6">
            <FormWrap onSubmit={_handleUpdateBuilding}>
              <h3 className="text-2xl text-left font-bold">Update Building</h3>
              <p className="has-text-centered text-error-red">{msg}</p>
              <div className="flex flex-col gap-4 w-full">
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
                      <FormTextArea
                        key={inputIdx}
                        {...input}
                        value={input.value}
                        type={input.type}
                        onChange={(e) =>
                          _handleChange(e.target.value, inputIdx)
                        }
                      />
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

              <div className="mt-2 w-full flex flex-col gap-4">
                <hr className="text-secondary-softblue" />
                <h4 className="text-lg text-left font-bold mb-4">
                  Nearby facilities
                </h4>
                <div className="grid grid-cols-3 gap-4 justify-items-start">
                  {inputNearby.map((inputNearby, inputNearbyIdx) =>
                    inputNearby.name === "name" ? (
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
                                {categoryNearby.name}
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

                <ListNearbyFacility
                  nearby={nearby}
                  _handleDeleteNearby={_handleDeleteNearby}
                />
              </div>

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
                    onClick={_handleUpdateBuilding}
                  >
                    Update Building
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
