import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "../../Components/Button";
import CreateRoom from "../../Components/CreateRoom";
import TableRoom from "../../Components/TableRoom";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";

export default function Room() {
  const [showModal, setShowModal] = useState(false);
  const [room, setRoom] = useState([]);
  console.log(room);

  const _handleOpenModal = () => {
    setShowModal(true);
  };
  const _handleCloseModal = () => {
    setShowModal(false);
  };

  //get room data from the server
  // const getRoom = async () => {
  //   const response = await api.get("/room");
  //   return response.data;
  // };

  // //add room
  // const addRoom = async (data) => {
  //   const response = await api.post("/room", data);
  //   if (response.data) {
  //     setRoom([...room, response.data]);
  //     setShowModal(false);
  //   }
  // };

  // //remove room
  // const removeRoom = async (id) => {
  //   const response = await api.delete(`/room/${id}`);
  //   if (response.data) {
  //     alert("Delete room success");
  //     setRoom(room.filter((item) => item.id !== id));
  //   }
  // };

  // //update room
  // const updateRoom = async (data) => {
  //   console.log(data);
  //   console.log(data.id);
  //   const response = await api.put(`/room/${data.id}`, data);
  //   const { id } = response.data;
  //   console.log(response.data);
  //   setRoom(
  //     room.map((data) => {
  //       return data.id === id ? { ...response.data } : data;
  //     })
  //   );
  //   if (response.data) {
  //     const allRoom = await getRoom();
  //     setRoom(allRoom);
  //   }
  // };

  // useEffect(() => {
  //   const getAllRoom = async () => {
  //     const allRoom = await getRoom();
  //     if (allRoom) {
  //       setRoom(allRoom);
  //     }
  //   };
  //   getAllRoom();
  // }, []);

  return (
    <div className="flex h-screen bg-secondary-softblue">
      <Sidebar />
      <Navbar />
      <div className="basis-5/6 pl-6">
        <div className="px-4 py-4 mt-20">
          <h1 className="text-3xl font-bold mb-4">Room</h1>

          <div className="flex items-center justify-between mb-6">
            <div className="text-sm">
              <select className="text-textColor-blackThin whitespace-nowrap px-4 py-3 rounded border bg-primary-white">
                <option value="">Select Building</option>
                <option value="">Building 1</option>
                <option value="">Building 2</option>
              </select>
            </div>
            <div className="w-auto">
              <Button
                type="button"
                className="bg-primary-blue text-primary-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={_handleOpenModal}
              >
                Create Room
              </Button>
            </div>
            {showModal ? (
              <CreateRoom
                handleClose={_handleCloseModal}
                showModal={showModal}
                // addRoom={addRoom}
              />
            ) : null}
          </div>

          <div className="bg-primary-white items-center">
            <TableRoom
              room={room}
              //   removeRoom={removeRoom}
              //   updateRoom={updateRoom}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
