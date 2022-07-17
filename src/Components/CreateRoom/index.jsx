import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "../Button";
import FormInput from "../FormInput";
import FormWrap from "../FormWrap";
import FormTextArea from "../FormTextArea";
import FormWrapModal from "../FormWrapModal";
import { getBuilding } from "../../API/ApiFetch";
import SelectWrap from "../SelectWrap";

export default function CreateRoom(props) {
  const { addRoom, handleClose, showModal } = props;

  const [data, setData] = useState({
    picture: "",
    roomName: "",
    floor: "",
    description: "",
    roomPrice: "",
    status: false,
    roomitem: ["TV", "AC", "WIFI"],
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
      addRoom({
        // id: uuidv4(),
        roomName: inputs[0].value,
        buildingName: inputs[1].value,
        address: inputs[2].value,
        description: inputs[3].value,
        capacity: inputs[4].value,
        floor: inputs[5].value,
        table: inputs[6].value,
        large: inputs[7].value,
        roomPrice: inputs[8].value,
        picture: imageRoom,
      });
      e.preventDefault();

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

      handleClose();
    } else {
      setMsg("Please fill all the fields");
    }
  };

  const _handleClose = () => {
    handleClose();
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

  if (!showModal) return null;

  return (
    <>
      <div
        onSubmit={_handleCreateRoom}
        className="fixed flex-col gap-10 inset-0 bg-primary-black bg-opacity-30 backdrop-blur-md flex justify-center items-center"
      >
        <FormWrapModal className=" h-4/5 outline-none overflow-x-hidden overflow-y-auto">
          <h3 className="text-2xl text-center font-bold">Create Room</h3>
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
                  onChange={(e) => handleChange(e.target.value, inputIdx)}
                />
                <p className="text-md text-gray-600">/Days</p>
              </div>
            ) : input.type === "select" ? (
              <>
                <SelectWrap
                  key={inputIdx}
                  type={input.type}
                  onChange={(e) => handleChange(e.target.value, inputIdx)}
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
                  onChange={(e) => handleChange(e.target.value, inputIdx)}
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
              onClick={_handleCreateRoom}
            >
              Submit
            </Button>
          </div>
        </FormWrapModal>
      </div>
    </>
  );
}
