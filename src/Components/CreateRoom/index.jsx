import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

import Button from "../Button";
import FormInput from "../FormInput";
import FormWrap from "../FormWrap";
import FormTextArea from "../FormTextArea";

export default function CreateRoom(props) {
  const { addRoom, handleClose } = props;

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
      name: "floor",
      type: "text",
      placeholder: "Floor",
      value: "",
      required: true,
    },
    {
      id: 2,
      name: "description",
      type: "textarea",
      placeholder: "Description",
      value: "",
      required: true,
    },
    {
      id: 3,
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

  const handleAddRoom = (e) => {
    if (
      inputs[0].value &&
      inputs[1].value &&
      inputs[2].value &&
      inputs[3].value
    ) {
      addRoom({
        id: uuidv4(),
        roomName: inputs[0].value,
        floor: inputs[1].value,
        description: inputs[2].value,
        roomPrice: inputs[3].value,
        picture: imageRoom,
      });
      Swal.fire({
        title: "Create Room Success",
        confirmButtonColor: "#4C35E0",
        confirmButtonText: "Ok!",
      }).then((result) => {
        if (result.isConfirmed) {
          e.preventDefault();
        }
      });

      setInputs([
        {
          id: 0,
          name: "roomName",
          type: "text",
          placeholder: "Room Name",
          value: "",
        },
        {
          id: 1,
          name: "floor",
          type: "text",
          placeholder: "Floor",
          value: "",
        },
        {
          id: 2,
          name: "description",
          type: "textarea",
          placeholder: "Description",
          value: "",
        },
        {
          id: 3,
          name: "roomPrice",
          type: "text",
          placeholder: "Room Price",
          value: "",
        },
      ]);
      setImageRoom("");

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
      },
      {
        id: 1,
        name: "floor",
        type: "text",
        placeholder: "Floor",
        value: "",
      },
      {
        id: 2,
        name: "description",
        type: "textarea",
        placeholder: "Description",
        value: "",
      },
      {
        id: 3,
        name: "roomPrice",
        type: "text",
        placeholder: "Room Price",
        value: "",
      },
    ]);
    setImageRoom("");
  };

  return (
    <>
      <FormWrap
        className="modal fade fixed top-0 left-0 hidden w-full h-5/6 outline-none overflow-x-hidden overflow-y-scroll"
        onSubmit={handleAddRoom}
      >
        <h3 className="text-2xl text-center font-bold">Create Room</h3>
        <p className="has-text-centered text-error-red">{msg}</p>

        {inputs.map((input, inputIdx) =>
          input.name !== "roomPrice" && input.name !== "description" ? (
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
          ) : (
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
          )
        )}
        <div>
          <FormInput
            type="file"
            id="gambar"
            onChange={(e) => uploadImageRoom(e)}
          />
        </div>

        <div className="flex gap-4 justify-between mt-4 w-full">
          <button
            className="font-bold text-textColor-black uppercase px-6 py-3 text-sm shadow mr-1 mb-1"
            type="button"
            onClick={_handleClose}
          >
            Close
          </button>
          <Button type="button" onClick={handleAddRoom}>
            Add Room
          </Button>
        </div>
      </FormWrap>
    </>
  );
}
