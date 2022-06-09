import styled from "@emotion/styled";
import React, { useState } from "react";

import FormInput from "../FormInput";

export default function EditComplex(props) {
  const {_handleCloseModalEdit, complex, updateComplex} = props

  const [data, setData] = useState({
    complexName: complex.complexName,
    complexAddress: complex.complexAddress,
    city: complex.city,
    district: complex.district,
    building: complex.building,
  })
  console.log(data)
  
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

  const _handleEditComplex = () => {
    const complex = {
      complexName: inputs[0].value,
      complexAddress: inputs[1].value,
      city: inputs[2].value,
      district: inputs[3].value,
      building: inputs[4].value,
    };
    updateComplex(complex);
    setMsg("Complex updated successfully");
    setData({
      complexName: "",
      complexAddress: "",
      city: "",
      district: "",
      building: "",
    });
    _handleCloseModalEdit();
  };

  return (
    <>
      <CreateWrap>
        <h3 className="text-2xl text-center font-bold">Edit Complex</h3>
        <p className="has-text-centered text-error-red">{msg}</p>
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
            className="font-bold bg-error-red uppercase px-6 py-3 text-sm rounded shadow mr-1 mb-1"
            type="button"
            onClick={_handleCloseModalEdit}
          >
            Close
          </button>
          <button
            className="bg-primary-blue font-bold uppercase text-sm px-6 py-3 rounded shadow mr-1 mb-1"
            type="button"
            onClick={_handleEditComplex}
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

  .textarea {
    width: 100%;
    height: 100%;
    border: 2px solid black;
    border-radius: 8px;
    padding: 10px;
  }
`;
