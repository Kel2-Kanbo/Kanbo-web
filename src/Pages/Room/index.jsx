import React, { useState, useEffect } from "react";
import api from "../../API/Complex";

import Button from "../../Components/Button";
import TableRoom from "../../Components/TableRoom";

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

  //get complex data from the server
  const getRoom = async () => {
    const response = await api.get("/room");
    return response.data;
  };

  //add complex
  //   const addComplex = async (data) => {
  //     const response = await api.post("/complex", data);
  //     if (response.data) {
  //       setComplex([...complex, response.data]);
  //       setShowModal(false);
  //     }
  //   };

  //remove complex
  const removeRoom = async (id) => {
    const response = await api.delete(`/room/${id}`);
    if (response.data) {
      alert("Delete success");
      setRoom(room.filter((item) => item.id !== id));
    }
  }

  //update complex
  //   const updateComplex = async (data) => {
  //     console.log(data)
  //     console.log(data.id)
  //     const response = await api.put(`/complex/${data.id}`, data);
  //     const {id, complexName, complexAddress, city, district, building} = response.data;
  //     console.log(response.data);
  //     setComplex(complex.map((data) => {
  //       return data.id === id ? { ...response.data } : data;
  //     }))
  //     if (response.data) {
  //       const allComplex = await getComplex();
  //       setComplex(allComplex);
  //     }
  //   }

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
    <div className="bg-secondary-blue h-screen">
      <h1 className="text-3xl p-4">Room</h1>
      <h4 className="text-sm pl-4">Manage room</h4>
      <div className="flex justify-end">
        <div className="w-auto p-8">
          <Button type="button" onClick={_handleOpenModal}>
            Create Room
          </Button>
        </div>
        {/* {showModal ? (
          <CreateComplex
            handleClose={_handleCloseModal}
            addComplex={addComplex}
          />
        ) : null} */}
      </div>
      <div className="bg-primary-white items-center m-4">
        <TableRoom room={room} removeRoom={removeRoom} />
      </div>
    </div>
  );
}
