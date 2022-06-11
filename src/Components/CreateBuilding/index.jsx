import styled from "@emotion/styled";
import Axios from "axios";
import React, { useState } from "react";

import FormInput from '../FormInput'

export default function CreateBuilding() {
  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState({
    officeName: "",
    officeAddress: "",
    officeComplex: "",
    description: "",
  });
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

    setData({
      ...data,
      [inputs[index].name]: value,
    });
  };

  const _handleCreateBuilding = async (e) => {
    if(data.officeAddress && data.officeName && data.officeComplex && data.description){
      try {
        await Axios.post("http://localhost:3000/api/buildings", {
          address: data.officeAddress,
          officeName: data.officeName,
          complex: data.officeComplex,
          description: data.description,
        });
        alert("Building Created");
      } catch (error) {
        if(error.response) {
          setMsg(error.response.data.msg);
        }
      }
      e.preventDefault();

      setData({
        officeName: "",
        officeAddress: "",
        officeComplex: "",
        description: "",
      })
      setShowModal(false);
    } else {
      setMsg("Please fill out all fields");
    }
  };

  return (
    <>
      <button
        className={`mr-1 mb-1 ${
          showModal ? "opacity-50" : " opacity-100"
        } `}
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create Building
      </button>
      {showModal ? (
        <>
          <CreateWrap onSubmit={_handleCreateBuilding}>
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
                    type={input.type}
                    onChange={(e) => _handleChange(e.target.value, inputIdx)}
                  >
                    <option value="">Complex</option>
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
                    onChange={(e) => _handleChange(e.target.value, inputIdx)}></textarea>
                </>
              ) : (
                ""
              )
            )}

            <div className="flex justify-between w-full text-primary-white">
              <button
                className="font-bold bg-error-red uppercase px-6 py-3 text-sm rounded shadow mr-1 mb-1"
                type="button"
                onClick={() => setShowModal(false)}
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
          </CreateWrap>
        </>
      ) : null}
    </>
  );
}

const SelectWrap = styled.select`
  width: 100%;
  border: 2px solid black;
  border-radius: 8px;
  padding: 10px;
`;

const CreateWrap = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  border: 1px solid black;
  border-radius: 10px;
  align-items: center;
  padding: 24px;
  width: 40%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .textarea{
    width: 100%;
    height: 100%;
    border: 2px solid black;
    border-radius: 8px;
    padding: 10px;
  }
`;