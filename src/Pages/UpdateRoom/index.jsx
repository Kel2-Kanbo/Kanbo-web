import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useNavigate } from "react-router-dom";

import { getBuilding, createRoom } from "../../API/ApiFetch";
import Button from "../../Components/Button";
import FormInput from "../../Components/FormInput";
import FormWrap from "../../Components/FormWrap";
import FormTextArea from "../../Components/FormTextArea";
import FormWrapModal from "../../Components/FormWrapModal";
import SelectWrap from "../../Components/SelectWrap";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import FormRoomItem from "../../Components/FormRoomItem";
import ListRoomItem from "../../Components/ListRoomItem";

export default function CreateRoom() {
  const location = useLocation();
  const state = location.state;
  const [room, setRoom] = useState(state);
  console.log(room);
  const value = Object.values(room);
  console.log(value);
  const getDataRoomm = value?.map((item) => {
    return item;
  });
  console.log(getDataRoomm);
  const navigate = useNavigate();
  const [data, setData] = useState({
    picture: "",
    roomName: "",
    floor: "",
    description: "",
    roomPrice: "",
    status: false,
    roomitem: [],
  });

  console.log(data);
  const [msg, setMsg] = useState("");
  const [building, setBuilding] = useState([]);


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
      value: building,
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
      name: "roomPrice",
      type: "text",
      placeholder: "Room Price",
      value: "",
      required: true,
    },
    {
      id: 5,
      name: "capacity",
      type: "number",
      placeholder: "e.g 10",
      value: "",
      required: true,
    },
    {
      id: 6,
      name: "floor",
      type: "number",
      placeholder: "e.g 10",
      value: "",
      required: true,
    },
    {
      id: 7,
      name: "table",
      type: "text",
      placeholder: "e.g office table",
      value: "",
      required: true,
    },
    {
      id: 8,
      name: "large",
      type: "text",
      placeholder: "e.g 10m",
      value: "",
      required: true,
    },
  ]);

  const handleChange = (value, index) => {
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

  const _handleCreateRoom = (e) => {
    if (
      inputs[0].value &&
      inputs[1].value &&
      inputs[2].value &&
      inputs[3].value &&
      inputs[4].value &&
      inputs[5].value &&
      inputs[6].value &&
      inputs[7].value &&
      inputs[8].value
    ) {
      createRoom({
        // id: uuidv4(),
        roomName: inputs[0].value,
        buildingName: inputs[1].value,
        address: inputs[2].value,
        description: inputs[3].value,
        roomPrice: inputs[4].value,
        capacity: inputs[5].value,
        floor: inputs[6].value,
        table: inputs[7].value,
        large: inputs[8].value,
        picture: imageRoom,
      });
      e.preventDefault();
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
          value: building,
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
          name: "roomPrice",
          type: "text",
          placeholder: "Room Price",
          value: "",
          required: true,
        },
        {
          id: 5,
          name: "capacity",
          type: "number",
          placeholder: "e.g 10",
          value: "",
          required: true,
        },
        {
          id: 6,
          name: "floor",
          type: "number",
          placeholder: "e.g 10",
          value: "",
          required: true,
        },
        {
          id: 7,
          name: "table",
          type: "text",
          placeholder: "e.g office table",
          value: "",
          required: true,
        },
        {
          id: 8,
          name: "large",
          type: "text",
          placeholder: "e.g 10m",
          value: "",
          required: true,
        },
      ]);
    } else {
      setMsg("Please fill all the fields");
    }
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
        value: building,
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
        name: "roomPrice",
        type: "text",
        placeholder: "Room Price",
        value: "",
        required: true,
      },
      {
        id: 5,
        name: "capacity",
        type: "number",
        placeholder: "e.g 10",
        value: "",
        required: true,
      },
      {
        id: 6,
        name: "floor",
        type: "number",
        placeholder: "e.g 10",
        value: "",
        required: true,
      },
      {
        id: 7,
        name: "table",
        type: "text",
        placeholder: "e.g office table",
        value: "",
        required: true,
      },
      {
        id: 8,
        name: "large",
        type: "text",
        placeholder: "e.g 10m",
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
    <>
      <div className=" flex bg-secondary-blue h-full">
        <Sidebar />
        <Navbar />
        <div className="basis-5/6">
          <div className="px-4 py-4 mt-20">
            <h1 className="text-3xl font-bold mb-4">Room</h1>

            <div className="flex items-center justify-between mb-6">
              <FormWrap onSubmit={_handleCreateRoom}>
                <h3 className="text-2xl text-left font-bold">
                  Create Room
                </h3>
                <p className="has-text-centered text-error-red">{msg}</p>
                <div className="w-full grid grid-col gap-4">
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
                        onChange={(e) => handleChange(e.target.value, inputIdx)}
                      />
                    ) : input.name === "description" ? (
                      <FormTextArea
                        key={inputIdx}
                        {...input}
                        value={input.value}
                        type={input.type}
                        onChange={(e) => handleChange(e.target.value, inputIdx)}
                      />
                    ) : input.name === "roomPrice" ? (
                      <div className="flex gap-2 items-center w-full">
                        <FormInput
                          key={inputIdx}
                          {...input}
                          value={input.value}
                          type={input.type}
                          onChange={(e) =>
                            handleChange(e.target.value, inputIdx)
                          }
                        />
                        <p className="text-md text-gray-600">/Days</p>
                      </div>
                    ) : input.type === "select" ? (
                      <>
                        <SelectWrap
                          key={inputIdx}
                          type={input.type}
                          onChange={(e) =>
                            handleChange(e.target.value, inputIdx)
                          }
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
                      <div className="flex gap-8 justify-start items-center w-full">
                        <div>{input.name}</div>
                        <FormInput
                          key={inputIdx}
                          {...input}
                          value={input.value}
                          type={input.type}
                          onChange={(e) =>
                            handleChange(e.target.value, inputIdx)
                          }
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

                  <hr className="text-secondary-softblue" />
                  <FormRoomItem />
                  <ListRoomItem />

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
                        onClick={_handleCreateRoom}
                      >
                        Create Room
                      </Button>
                    </div>
                  </div>
                </div>
              </FormWrap>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
