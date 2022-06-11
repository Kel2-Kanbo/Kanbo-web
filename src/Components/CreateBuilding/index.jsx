import Axios from "axios";
import React, { useState } from "react";

import FormInput from '../FormInput';
import SelectWrap from '../SelectWrap';
import FormWrap from '../FromWrap';

export default function CreateBuilding() {
  const [showModal, setShowModal] = useState(false);

  const [msg, setMsg] = useState("")

  const [inputs, setInputs] = useState([
    {
      id: 0,
      name: "officeName",
      type: "text",
      placeholder: "Office Name",
      value: "",
      required: true,
    },
    {
      id: 1,
      name: "officeAddress",
      type: "text",
      placeholder: "Address",
      value: "",
      required: true,
    },
    {
      id: 2,
      name: "officeComplex",
      type: "select",
      placeholder: "Complex",
      options: ["Complex 1", "Complex 2", "Complex 3"],
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
  };

  const _handleCreateBuilding = async (e) => {
    if (inputs[0].value && inputs[1].value && inputs[2].value && inputs[3].value) {
      try {
        await Axios.post("http://localhost:3000/api/buildings", {
          officeName: inputs[0].value,
          address: inputs[1].value,
          complex: inputs[2].value,
          description: inputs[3].value,
        });
        alert("Building Created");
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
      e.preventDefault();

      setInputs([
        {
          id: 0,
          name: "officeName",
          type: "text",
          placeholder: "Office Name",
          value: "",
          required: true,
        },
        {
          id: 1,
          name: "officeAddress",
          type: "text",
          placeholder: "Address",
          value: "",
          required: true,
        },
        {
          id: 2,
          name: "officeComplex",
          type: "select",
          placeholder: "Complex",
          options: ["Complex 1", "Complex 2", "Complex 3"],
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
      ])
      setShowModal(false);
    } else {
      setMsg("Please fill out all fields");
    }
  };
  const _handleClose = () => {
    setShowModal(false);
    setInputs([
      {
        id: 0,
        name: "officeName",
        type: "text",
        placeholder: "Office Name",
        value: "",
        required: true,
      },
      {
        id: 1,
        name: "officeAddress",
        type: "text",
        placeholder: "Address",
        value: "",
        required: true,
      },
      {
        id: 2,
        name: "officeComplex",
        type: "select",
        placeholder: "Complex",
        options: ["Complex 1", "Complex 2", "Complex 3"],
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
    ]);
  }
  return (
    <>
      <button
        className={`mr-1 mb-1 ${showModal ? "opacity-50" : " opacity-100"
          } `}
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create Building
      </button>
      {showModal ? (
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
              <button
                className="font-bold bg-error-red uppercase px-6 py-3 text-sm rounded shadow mr-1 mb-1"
                type="button"
                onClick={_handleClose}
              >
                Close
              </button>
              <button
                className="bg-primary-blue font-bold uppercase text-sm px-6 py-3 rounded shadow mr-1 mb-1"
                type="button"
                onClick={_handleCreateBuilding}
              >
                Submit
              </button>
            </div>
          </FormWrap>
        </>
      ) : null}
    </>
  );
}




