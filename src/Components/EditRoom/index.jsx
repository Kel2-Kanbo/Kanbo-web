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
      name: "complexName",
      type: "text",
      placeholder: "Complex Name",
      value: "",
      required: true,
    },
    {
      id: 1,
      name: "complexAddress",
      type: "text",
      placeholder: "Complex Address",
      value: "",
      required: true,
    },
    {
      id: 2,
      name: "city",
      type: "select",
      placeholder: "City",
      options: ["City 1", "City 2", "City 3"],
      value: "",
      required: true,
    },
    {
      id: 3,
      name: "district",
      type: "select",
      placeholder: "District",
      options: ["District 1", "District 2", "District 3"],
      value: "",
      required: true,
    },
    {
      id: 4,
      name: "building",
      type: "number",
      placeholder: "Building",
      value: "",
      required: true,
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