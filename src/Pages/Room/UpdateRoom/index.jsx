import React, { useState, useEffect, useContext } from "react";
// import { v4 as uuidv4 } from "uuid";
import {
  getCity,
  getDistrict,
  getProvince,
  editRoo,
  editRoom,
  getBuilding,
} from "../../../API/ApiFetch";
import { Link, useLocation, useNavigate } from "react-router-dom";

import FormInput from "../../../Components/FormInput";
import SelectWrap from "../../../Components/SelectWrap";
import FormWrap from "../../../Components/FormWrap";
import Button from "../../../Components/Button";
import Sidebar from "../../../Components/Sidebar";
import Navbar from "../../../Components/Navbar";
import Swal from "sweetalert2";
import FormTextArea from "../../../Components/FormTextArea";

export default function UpdateRoom(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const [complex, setComplex] = useState(state);

  const [building, setBuilding] = useState([]);

  const value = Object.values(complex);
  console.log(value);
  const getDataComplex = value?.map((item) => {
    return item;
  });
  

  const [data, setData] = useState({
    picture: "",
    roomName: "",
    floor: "",
    description: "",
    roomPrice: "",
    status: false,
    roomitem: ["TV", "AC", "WIFI"],
  });

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
      name: "roomName",
      type: "text",
      placeholder: "Room Name",
      value: "",
      required: true,
    },
    {
      id: 1,
      name: "buildingName",
      type: "select",
      placeholder: "Building",
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
      name: "description",
      type: "textarea",
      placeholder: "Description",
      value: "",
      required: true,
    },
    {
      id: 4,
      name: "capacity",
      type: "number",
      placeholder: "e.g 10",
      value: "",
      required: true,
    },
    {
      id: 5,
      name: "floor",
      type: "number",
      placeholder: "e.g 10",
      value: "",
      required: true,
    },
    {
      id: 6,
      name: "table",
      type: "text",
      placeholder: "e.g office table",
      value: "",
      required: true,
    },
    {
      id: 7,
      name: "large",
      type: "text",
      placeholder: "e.g 10m",
      value: "",
      required: true,
    },
    {
      id: 8,
      name: "roomPrice",
      type: "text",
      placeholder: "Room Price",
      value: "",
      required: true,
    },
  ]);

  // const _handleSubmit = (e) => {
  //   e.preventDefault();
  //   editRoom(data);
  // }

  const _handleUpdateRoom = async (id, data) => {
    if (
      inputs[0].value &&
      inputs[1].value &&
      inputs[2].value &&
      inputs[3].value &&
      inputs[4].value &&
      inputs[5].value
    ) {
      editRoom(id, data).then((response) => {
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
      navigate("/room");

      setInputs([
        {
          id: 0,
          name: "roomName",
          type: "text",
          placeholder: "Room Name",
          value: "",
          required: true,
        },
        {
          id: 1,
          name: "buildingName",
          type: "select",
          placeholder: "Building",
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
          name: "description",
          type: "textarea",
          placeholder: "Description",
          value: "",
          required: true,
        },
        {
          id: 4,
          name: "capacity",
          type: "number",
          placeholder: "e.g 10",
          value: "",
          required: true,
        },
        {
          id: 5,
          name: "floor",
          type: "number",
          placeholder: "e.g 10",
          value: "",
          required: true,
        },
        {
          id: 6,
          name: "table",
          type: "text",
          placeholder: "e.g office table",
          value: "",
          required: true,
        },
        {
          id: 7,
          name: "large",
          type: "text",
          placeholder: "e.g 10m",
          value: "",
          required: true,
        },
        {
          id: 8,
          name: "roomPrice",
          type: "text",
          placeholder: "Room Price",
          value: "",
          required: true,
        },
      ]);
    } else {
      setMsg("Please fill out all fields");
    }
  };

   const [imageRoom, setImageRoom] = useState("");

  const uploadImageRoom = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImageRoom(base64);
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


  const _handleClose = () => {
    navigate("/room");
    setInputs([
      {
        id: 0,
        name: "roomName",
        type: "text",
        placeholder: "Room Name",
        value: "",
        required: true,
      },
      {
        id: 1,
        name: "buildingName",
        type: "select",
        placeholder: "Building",
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
        name: "description",
        type: "textarea",
        placeholder: "Description",
        value: "",
        required: true,
      },
      {
        id: 4,
        name: "capacity",
        type: "number",
        placeholder: "e.g 10",
        value: "",
        required: true,
      },
      {
        id: 5,
        name: "floor",
        type: "number",
        placeholder: "e.g 10",
        value: "",
        required: true,
      },
      {
        id: 6,
        name: "table",
        type: "text",
        placeholder: "e.g office table",
        value: "",
        required: true,
      },
      {
        id: 7,
        name: "large",
        type: "text",
        placeholder: "e.g 10m",
        value: "",
        required: true,
      },
      {
        id: 8,
        name: "roomPrice",
        type: "text",
        placeholder: "Room Price",
        value: "",
        required: true,
      },
    ]);
  };

  const getAllBuilding = async () => {
    try {
      await getBuilding().then((res) => {
        setBuilding(res);
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getAllBuildings = async () => {
      const allBuilding = await getAllBuilding();
      if (allBuilding) {
        setBuilding(allBuilding);
      }
    };
    getAllBuildings();
  }, []);

  return (
    <div className=" flex bg-secondary-blue h-screen">
      <Sidebar />
      <Navbar />
      <div className="basis-5/6">
        <div className="px-4 py-4 mt-20">
          <h1 className="text-3xl font-bold mb-4">Room</h1>

          <div className="flex items-center justify-between mb-6">
            <FormWrap onSubmit={_handleUpdateRoom}>
              <h3 className="text-2xl text-center font-bold">Update Room</h3>
              <p className="has-text-centered text-error-red">{msg}</p>
              {inputs.map((input, inputIdx) =>
            input.name !== "roomPrice" &&
            input.name !== "description" &&
            input.type !== "select" &&
            input.name !== "capacity" &&
            input.name !== "floor" &&
            input.name !== "table" &&
            input.name !== "large" ? (
              <FormInput
                key={inputIdx}
                {...input}
                value={input.value}
                type={input.type}
                onChange={(e) => _handleChange(e.target.value, inputIdx)}
              />
            ) : input.name === "description" ? (
              <FormTextArea
                key={inputIdx}
                {...input}
                value={input.value}
                type={input.type}
                onChange={(e) => _handleChange(e.target.value, inputIdx)}
              />
            ) : input.name === "roomPrice" ? (
              <div className="flex gap-2 items-center w-full">
                <FormInput
                  key={inputIdx}
                  {...input}
                  value={input.value}
                  type={input.type}
                  onChange={(e) => _handleChange(e.target.value, inputIdx)}
                />
                <p className="text-md text-gray-600">/Days</p>
              </div>
            ) : input.type === "select" ? (
              <>
                <SelectWrap
                  key={inputIdx}
                  type={input.type}
                  onChange={(e) => _handleChange(e.target.value, inputIdx)}
                  value={input.value}
                >
                  <option value="">Select Building</option>
                  {building.map((building, buildingIdx) => (
                    <option key={buildingIdx} value={building.id}>
                      {building.buildingName}
                    </option>
                  ))}
                </SelectWrap>
              </>
            ) : (
              <div className="flex gap-2 justify-start items-center w-full">
                <label>{input.name}</label>
                <FormInput
                  key={inputIdx}
                  {...input}
                  value={input.value}
                  type={input.type}
                  onChange={(e) => _handleChange(e.target.value, inputIdx)}
                />
              </div>
            )
          )}
          {/* {inputs.map((specInput, specInputIdx) =>
            specInput.name === "capacity" &&
            specInput.name === "floor" &&
            specInput.name === "table" &&
            specInput.name === "large" ? (
              
            ) : (
              ""
            )
          )} */}
          <div className="flex items-start justify-start">
            <FormInput
              type="file"
              id="gambar"
              onChange={(e) => uploadImageRoom(e)}
            />
          </div>

          <div className="flex justify-between w-full text-primary-white">
            <Button
              className="font-bold bg-error-red uppercase px-6 py-3 text-sm rounded shadow mr-1 mb-1"
              type="button"
              onClick={_handleClose}
            >
              Close
            </Button>
            <Button
              className="bg-primary-blue font-bold uppercase text-sm px-6 py-3 rounded shadow mr-1 mb-1"
              type="button"
              onClick={_handleUpdateRoom}
            >
              Submit
            </Button>
          </div>
            </FormWrap>
          </div>
        </div>
      </div>
    </div>
  );
}
