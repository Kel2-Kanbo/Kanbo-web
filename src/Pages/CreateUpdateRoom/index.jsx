import styled from "@emotion/styled";
import FormInput from "../../Components/FormInput";
import { useState } from "react";

import React from 'react';
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

export default function CreateUpdateRoom () {

    const [data, setData] =  useState({
        roomName: "",
        floor: "",
        roomitem: "",
        quantity: "",
        description: "",
        harga: "",
    });

    const [inputs, setInputs] = useState([
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
            type: "text",
            placeholder: "Quantity",
            value: "",
        },
        {
            id: 2,
            name: "description",
            type: "text",
            placeholder: "Description",
            value: "",
        },
    ])

    const [inputHarga, setInputHarga] = useState ([
        {
            id: 0,
            name: "harga",
            type: "number",
            placeholder: "Harga",
            value: "",
        }
    ])

    const handleChangeInputs = (value, index) => {
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

  const handleChangeInputHarga = (value, index) => {
    setInputHarga(
      inputHarga.map((input) => {
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
      [inputHarga[index].name]: value,
    });
  };

    return (
        <>
        <CreateRoomWrap>

        <h1>Create Room</h1>

        {inputs.map((input,inputIdx) => (
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

        <div className="flex justify-around">
            {inputsRoomItem.map((input,inputIdx) => (
                <FormRoomItem
                key={inputIdx}
                    {...input}
                    value={input.value}
                    type={input.type}
                    onChange={(e) => handleChangeInputsRoomItem(e.target.value, inputIdx)}
                    />
            ))}
        </div>

        <button
            className="bg-primary-blue font-bold uppercase text-sm px-6 py-3 rounded shadow mr-1 mb-1"
            type="button">
                Add Facilities
        </button>

        <div className="flex justify-around">
            {inputHarga.map((input, inputIdx) => (
                <FormInputHarga
                key={inputIdx}
                {...input}
                value={input.value}
                type={input.type}
                onChange={(e) => handleChangeInputHarga(e.target.value, inputIdx)}
                />
            ))}
        <span>/Day</span>
        </div>

        <div className="flex justify-around">
            <button
                className="bg-primary-blue font-bold uppercase text-sm px-6 py-3 rounded shadow mr-1 mb-1"
                type="button">
                    Cancel
            </button>

            <button
                className="bg-primary-blue font-bold uppercase text-sm px-6 py-3 rounded shadow mr-1 mb-1"
                type="button">
                    Add Room
            </button>
        </div>
            
        </CreateRoomWrap>
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
    border: 2px solid black;
    border-radius: 8px;
    padding: 10px;
`;

const FormInputHarga = styled.input`
    width: 100%;
    border: 2px solid black;
    border-radius: 8px;
    padding: 10px;
    `;