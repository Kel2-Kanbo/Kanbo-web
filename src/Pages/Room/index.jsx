import React, { useState, useEffect } from "react";
import api from "../../API/Complex";

import Button from "../../Components/Button";
import CreateRoom from "../../Components/CreateRoom";
import TableRoom from "../../Components/TableRoom";
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import Search from '../../Components/Search'

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

  const [building, setBuilding] = useState([
    {
      id: 0,
      name: "",
      type: "select",
      placeholder: "Building",
      options: [],
      value: "",
    }
  ]);

  //get room data from the server
  const getRoom = async () => {
    const response = await api.get("/room");
    return response.data;
  };

  //add room
  const addRoom = async (data) => {
    const response = await api.post("/room", data);
    if (response.data) {
      setRoom([...room, response.data]);
      setShowModal(false);
    }
  };

  //remove room
  const removeRoom = async (id) => {
    const response = await api.delete(`/room/${id}`);
    if (response.data) {
      alert("Delete room success");
      setRoom(room.filter((item) => item.id !== id));
    }
  };

  //update room
  const updateRoom = async (data) => {
    console.log(data);
    console.log(data.id);
    const response = await api.put(`/room/${data.id}`, data);
    const { id } = response.data;
    console.log(response.data);
    setRoom(
      room.map((data) => {
        return data.id === id ? { ...response.data } : data;
      })
    );
    if (response.data) {
      const allRoom = await getRoom();
      setRoom(allRoom);
    }
  };

  useEffect(() => {
    const getAllRoom = async () => {
      const allRoom = await getRoom();
      if (allRoom) {
        setRoom(allRoom);
      }
    };
    getAllRoom();
  }, []);

  return (
    <div className='flex h-screen bg-secondary-softblue'>
      <Sidebar />
      <Navbar />
      <div className="basis-5/6">
        <div className='px-4 py-4 mt-20'>
          <div className="flex justify-end mb-4">
            <div className="w-auto ">
              <Button type="button" className="bg-primary-blue text-primary-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={_handleOpenModal}>
                Create Building
              </Button>
            </div>
            {showModal ? (
              <CreateRoom handleClose={_handleCloseModal} addRoom={addRoom} />
            ) : null}
          </div>
          <Search />

          <div className="bg-primary-white items-center mt-4">
            <TableRoom
              room={room}
              removeRoom={removeRoom}
              updateRoom={updateRoom}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
