import styled from "@emotion/styled";
import Axios from "axios";
import FormInput from "../FormInput";
import Button from "../Button";
import { useState } from "react";

import React from 'react';
// import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

export default function CreateRoom({ handleClose, addRoom }) {

  const [showRoom, setShowRoom] = useState(false);

  const [data, setData] = useState({
    roomName: "",
    floor: "",
    roomitem: "",
    quantity: "",
    description: "",
    price: "",
  });

  const [msg, setMsg] = useState("")

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
      name: "Description",
      type: "textarea",
      placeholder: "Description",
      value: "",
    },
  ])

  const [inputs2, setInputs2] = useState([
    {
      id: 0,
      name: "price",
      type: "number",
      placeholder: "Price",
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
    if (data.roomName && data.floor && data.roomItem && data.quantity && data.description && data.price) {
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
        if (error.response) {
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

  return (
    <>
      <CreateRoomWrap>

        <h1><b>Create Room</b></h1>

        {inputs.map((input, inputIdx) => (
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
          {inputsRoomItem.map((input, inputIdx) => (
            <FormRoomItem
              key={inputIdx}
              {...input}
              value={input.value}
              type={input.type}
              onChange={(e) => handleChangeInputsRoomItem(e.target.value, inputIdx)}
            />
          ))}
        </div>

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
            onClick={handleClose}
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