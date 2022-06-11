import styled from "@emotion/styled";
import colors from "../../Utils/styles/colors";
import React, { useState } from "react";

import FormInput from "../FormInput";

export default function CreateComplex(props) {
  const {handleClose, addComplex} = props

  const [data, setData] = useState({
    complexName: "",
    complexAddress: "",
    city: "",
    district: "",
    building: "",    
  });
  const [msg, setMsg] = useState("");

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

  const _handleCreateComplex = () => {
    if (data.complexAddress && data.complexName && data.city && data.district) {
      addComplex({
        id: Math.floor(Math.random() * 100),
        complexName: data.complexName,
        complexAddress: data.complexAddress,
        city: data.city,
        district: data.district,
        building: data.building,
      })

      setData({
        complexName: "",
        complexAddress: "",
        city: "",
        district: "",
        building: "",
      });    
      alert("Complex Created");
      handleClose();

    } else {
      setMsg("Please fill out all fields");
    }
  }

  return (
    <>
      <CreateWrap onSubmit={_handleCreateComplex}>
        <h3 className="text-2xl text-center font-bold">Create Complex</h3>
        <p className="has-text-centered text-secondary-red">{msg}</p>
        {inputs.map((input, inputIdx) =>
          input.type !== "select" ? (
            <>
              <FormInput
                key={inputIdx}
                {...input}
                value={input.value}
                type={input.type}
                onChange={(e) => _handleChange(e.target.value, inputIdx)}
              />
            </>
          ) : (
            <>
              <SelectWrap
                type={input.type}
                onChange={(e) => _handleChange(e.target.value, inputIdx)}
              >
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

        <div className="flex justify-between w-full text-primary-white">
          <button
            className="font-bold bg-secondary-red uppercase px-6 py-3 text-sm rounded shadow mr-1 mb-1"
            type="button"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className="bg-primary-blue2 font-bold uppercase text-sm px-6 py-3 rounded shadow mr-1 mb-1"
            type="button"
            onClick={_handleCreateComplex}
          >
            Submit
          </button>
        </div>
      </CreateWrap>
    </>
  );
}

const SelectWrap = styled.select`
  width: 100%;
//   border: 2px solid black;
  border-radius: 8px;
  padding: 10px;
`;

const CreateWrap = styled.div`
  background-color: ${colors.primary.white};
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  border: 1px solid white;
  border-radius: 10px;
  align-items: center;
  padding: 24px;
  width: 40%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
`;