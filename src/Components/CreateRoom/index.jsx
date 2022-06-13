import styled from "@emotion/styled";
import Axios from "axios";
import FormInput from "../FormInput";
import Button from "../Button";
import { useState } from "react";
import SelectWrap from "../SelectWrap";
import FormWrap from "../FormWrap";
import {v4 as uuidv4} from 'uuid';


import React from 'react';
// import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

export default function CreateRoom () {

    const [showRoom, setShowRoom] = useState(false);

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

    const handleChangeInputs = (value, index) => {

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

  const handleChangeInputsRoomItem = (value, index) => {
      setInputsRoomItem(
          inputsRoomItem.map((input) => {
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
          [inputsRoomItem[index].name]: value,
      });
  };

  const handleChangeInputs2 = (value, index) => {
    setInputs2(
      inputs2.map((input) => {
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
      [inputs2[index].name]: value,
    });
  };

  const handleCreateRoom = async (e) => {
    if(data.roomName && data.floor && data.roomItem && data.quantity && data.description && data.price){
      try {
        await Axios.post("http://localhost:3000/api/buildings", {
          roomName: data.roomName,
          floor: data.floor,
          roomItem: data.roomItem,
          quantity: data.quantity,
          description: data.description,
          price: data.price,
        });
        alert("Room Created");
      } catch (error) {
        if(error.response) {
          setMsg(error.response.data.msg);
        }
      }
      e.preventDefault();

      setData({
        roomName: "",
        floor: "",
        roomitem: "",
        quantity: "",
        description: "",
        price: "",
      })
      setShowRoom(false);
    } else {
      setMsg("Please fill out all fields");
    }
  };


    setData({
      ...data,
      [inputs[index].name]: value,
    });
  };

  const _handleCreateComplex = (e) => {
    if (inputs[0].value &&  inputs[1].value && inputs[2].value && inputs[3].value && inputs[4].value)  {
      addRoom({
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
                onChange={(e) => handleChangeInputs(e.target.value, inputIdx)}
                />
            ))
        }

        <p className="self-auto md:self-start">Room Item</p>

        <div className="self-auto md:self-start">
            {inputsRoomItem.map((input,inputIdx) => (
                <FormRoomItem
                key={inputIdx}
                    {...input}
                    value={input.value}
                    type={input.type}
                    onChange={(e) => handleChangeInputsRoomItem(e.target.value, inputIdx)}
                    />
            ))
                    </div>
}


        <Button 
                style={{
                    backgroundColor: "blue",
                    color: "white",
                }}>
            Add Room Item
        </Button>

        <div className="flex justify-between">
            {inputs2.map((input, inputIdx) => (
                <div style={{
                    textAlign: "start",
                }}>
                    <FormInputHarga
                    style={{
                        width: 430,
                    }}
                     key={inputIdx}
                    {...input}
                    value={input.value}
                    type={input.type}
                    onChange={(e) => handleChangeInputs2(e.target.value, inputIdx)}
                    />
                    <span>  /Day</span>
                </div>
            )
            )}
        
        </div>

        <div>
            <Button
                style={{
                    marginRight: 250,
                    backgroundColor: "red",
                    color: "white",
                }}
                type="button"
                onClick={() => setShowRoom(false)}
                >
                    Cancel
            </Button>
            
            <Button
                style={{
                    backgroundColor: "blue",
                    color: "white",
                }}
                type="button"
                onClick={handleCreateRoom}
                >
                    Add Room
            </Button>
        </div>
            
        </CreateRoomWrap>
        </>
    );
}


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
const CreateRoomWrap = styled.div`
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
`;

const FormRoomItem = styled.input`
    width: 30%;
    border: 2px solid grey;
    border-radius: 8px;
    padding: 10px;
    margin-right: 8px;
`;

const FormInputHarga = styled.input`
    width: 100%;
    border: 2px solid grey;
    border-radius: 8px;
    padding: 10px;
    `;
