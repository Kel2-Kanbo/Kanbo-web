import React, { useState } from "react";

import FormInput from "../FormInput";
import FormWrap from "../FormWrap";
import Button from "../Button";
import SelectWrap from "../SelectWrap";

export default function EditRoom(props) {
  const { _handleCloseModalEdit, room, updateRoom } = props;
  const [msg, setMsg] = useState("");

  console.log(room);

  const _handleClose = () => {
    _handleCloseModalEdit();
  }

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

  const [inputsRoomItem, setInputsRoomItem] = useState([
    {
      id: 0,
      name: "roomItem",
      type: "text",
      placeholder: "Room Item",
      value: "",
    },
    {
      id: 1,
      name: "quantity",
      type: "number",
      placeholder: "Quantity",
      value: "",
    },
  ]);

  return (
    <>
      <FormWrap>
        <h3 className="text-2xl text-center font-bold">Edit Room</h3>
        <p className="has-text-centered text-error-red">{msg}</p>
        {inputs.map((input, inputIdx) =>
          input.type !== "select" ? (
            <>
              <FormInput
                key={inputIdx}
                {...input}
                value={input.value}
                type={input.type}
              />
            </>
          ) : (
            <>
              <SelectWrap type={input.type}>
                <option value="">{input.placeholder}</option>
                {input.options.map((option, optionIdx) => (
                  <option key={optionIdx} value={option}>
                    {option}
                  </option>
                ))}
              </SelectWrap>
            </>
          )
        )}

        <div className="flex gap-4 justify-between w-full text-primary-white">
          <button
            className="font-bold text-textColor-black uppercase px-6 py-3 text-sm shadow mr-1 mb-1"
            onClick={_handleCloseModalEdit}
          >
            Close
          </button>
          <Button type="button">
            Update Room
          </Button>
        </div>
      </FormWrap>
    </>
  );
}