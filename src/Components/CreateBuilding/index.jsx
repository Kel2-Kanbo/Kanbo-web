import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import FormInput from '../FormInput';
import SelectWrap from '../SelectWrap';
import FormWrap from '../FormWrap';
import Button from "../Button";

export default function CreateBuilding(props) {
  const [showModal, setShowModal] = useState(true);
  const {handleClose, addBuilding} = props

  const [data, setData] = useState({
    buildingName: "",
    complexName: "",
    address: "",
    jumlahRoom: "",
    description: "",
    picture: "",
  });

  const [msg, setMsg] = useState("");

  const [inputs, setInputs] = useState([
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
      name: "complexName",
      type: "select",
      placeholder: "Complex Name",
      options: ["Complex 1", "Complex 2", "Complex 3"],
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
      name: "jumlahRoom",
      type: "number",
      placeholder: "Jumlah Room",
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
    {
      id: 5,
      name: "picture",
      type: "text",
      placeholder: "Picture",
      value: "",
      required: true,
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
      [inputs[index].name]:value,
    });
  };

  

  const _handleCreateBuilding = (e) => {
    if (
      inputs[0].value && 
      inputs[1].value && 
      inputs[2].value && 
      inputs[3].value && 
      inputs[4].value && 
      inputs[5].value
      ) {
        addBuilding({
          id: uuidv4(),
          buildingName: inputs[0].value,
          complexName: inputs[1].value,
          address: inputs[2].value,
          jumlahRoom: inputs[3].value,
          description: inputs[4].value,
          picture: inputs[5].value,
        });
      alert("Building Created");
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
          name: "complexName",
          type: "select",
          placeholder: "Complex Name",
          options: ["Complex 1", "Complex 2", "Complex 3"],
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
          name: "jumlahRoom",
          type: "number",
          placeholder: "Jumlah Room",
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
        {
          id: 5,
          name: "picture",
          type: "text",
          placeholder: "Picture",
          value: "",
          required: true,
        },
      ]);
      setShowModal(false);
    } else {
      setMsg("Please fill out all fields");
    }
  };

  const _handleClose = () => {
    handleClose();
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
        name: "complexName",
        type: "select",
        placeholder: "Complex Name",
        options: ["Complex 1", "Complex 2", "Complex 3"],
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
        name: "jumlahRoom",
        type: "number",
        placeholder: "Jumlah Room",
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
        {
        id: 5,
        name: "picture",
        type: "text",
        placeholder: "Picture",
        value: "",
        required: true,
      },
    ]);
  };

  return (
        <>
          <FormWrap onSubmit={_handleCreateBuilding}>
            <h3 className="text-2xl text-center font-bold">
              Create Building
            </h3>
            <p className="has-text-centered text-error-red">{msg}</p>
            {inputs.map((input, inputIdx) =>
              input.type !== "select" && input.type !== "textarea" ? (
                <>
                  <FormInput
                    key={inputIdx}
                    {...input}
                    value={input.value}
                    type={input.type}
                    onChange={(e) => _handleChange(e.target.value, inputIdx)}
                  />
                </>
              ) : input.type === "select" ? (
                <>
                  <SelectWrap
                    key={inputIdx}
                    type={input.type}
                    onChange={(e) => _handleChange(e.target.value, inputIdx)}
                    value={input.value}
                  >
                    <option value="">Complex Option</option>
                    {input.options.map((option, optionIdx) => (
                      <option key={optionIdx} value={option}>
                        {option}
                      </option>
                    ))}
                  </SelectWrap>
                </>
              ) : input.type === "textarea" ? (
                <>
                  <textarea
                    className="textarea"
                    key={inputIdx}
                    value={input.value}
                    type={input.type}
                    onChange={(e) => _handleChange(e.target.value, inputIdx)}>
                  </textarea>
                </>
              ) : (
                ""
              )
            )}

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
                onClick={_handleCreateBuilding}
              >
                Submit
              </Button>
            </div>
          </FormWrap>
        </>
  );
}
