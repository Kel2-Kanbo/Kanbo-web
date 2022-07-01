import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import FormInput from "../FormInput";
import SelectWrap from "../SelectWrap";
import FormWrap from "../FormWrap";
import Button from "../Button";

export default function CreateComplex(props) {
  const { handleClose, addComplex, city, district } = props

  const [data, setData] = useState({
    complexName: "",
    complexAddress: "",
    city: "",
    district: "",
    building: "",
  });
  const [msg, setMsg] = useState("");

  const cityName = city?.map((item) => {
    return {
      value: item.name,
      id: item.id
    }
  })
  const city_name = new Array(cityName.length);
  for (let i = 0; i < cityName.length; i++) {
    city_name[i] = cityName[i].value;
  }

  console.log(city_name);
  console.log(city);

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
      options: city_name,
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

  const _handleCreateComplex = (e) => {
    if (inputs[0].value && inputs[1].value && inputs[2].value && inputs[3].value && inputs[4].value) {
      addComplex({
        id: uuidv4(),
        complexName: inputs[0].value,
        complexAddress: inputs[1].value,
        city: inputs[2].value,
        district: inputs[3].value,
        building: inputs[4].value,
      })
      alert("Complex Created");
      e.preventDefault();

      setInputs([
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
      ])
      handleClose();
    } else {
      setMsg("Please fill out all fields");
    }
  }

  const _handleClose = () => {
    handleClose();
    setInputs([
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
    ])
  }

  return (
    <>
      <FormWrap onSubmit={_handleCreateComplex}>
        <h3 className="text-2xl text-center font-bold">Create Complex</h3>
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

        <div className="flex gap-4 justify-between w-full text-primary-white">
          <button
            className="font-bold text-textColor-black uppercase px-6 py-3 text-sm shadow mr-1 mb-1"
            type="button"
            onClick={_handleClose}
          >
            Close
          </button>
          <Button
            type="button"
            onClick={_handleCreateComplex}
          >
            Add Complex
          </Button>
        </div>
      </FormWrap>
    </>
  );
}
