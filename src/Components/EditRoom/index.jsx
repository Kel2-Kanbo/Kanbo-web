import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
    {
      id: 4,
      name: "picture",
      type: "text",
      placeholder: "Picture",
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

  const handleAddRoom = (e) => {
    if (
      inputs[0].value &&
      inputs[1].value &&
      inputs[2].value &&
      inputs[3].value &&
      inputs[4].value
    ) {
      addRoom({
        id: uuidv4(),
        roomName: inputs[0].value,
        floor: inputs[1].value,
        description: inputs[2].value,
        roomPrice: inputs[3].value,
        picture: inputs[4].value,
      });
      alert("Room Added");
      e.preventDefault();

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
        {
          id: 4,
          name: "picture",
          type: "text",
          placeholder: "Picture",
          value: "",
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
      {
        id: 4,
        name: "picture",
        type: "text",
        placeholder: "Picture",
        value: "",
      },
    ]);
  };

  return (
    <>
      <FormWrap
        className="modal fade fixed top-0 left-0 hidden w-full h-4/5 outline-none overflow-x-hidden overflow-y-auto"
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

        <div className="flex gap-4 justify-between w-full">
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
