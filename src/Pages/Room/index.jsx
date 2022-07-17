import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { deleteRoom, getRoom } from "../../API/ApiFetch";
import Button from "../../Components/Button";
import TableRoom from "../../Components/TableRoom";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";

export default function Room() {
  const [room, setRoom] = useState([]);
  console.log(room);

  const [tabelHeader] = useState([
    "No",
    "Picture",
    "Room Name",
    "Floor",
    "Room Item",
    "Rate per day",
    "Status",
    "Actions",
  ]);

  //get room
  const getAllRoom = async () => {
    try {
      await getRoom().then((response) => {
        setRoom(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //delete room
  const removeRoom = async (id) => {
    try {
      await deleteRoom(id).then((response) => {
        Swal.fire({
          title: "Do You Want To Delete This Room?",
          text: `All data will be lost `,
          confirmButtonColor: "#4C35E0",
          confirmButtonText: "Delete",
          showCancelButton: true,
          cancelButtonText: "Cancel",
          cancelButtonColor: "#4C35E0",
        }).then((result) => {
          if (result.isConfirmed) {
            setRoom(room.filter((room) => room.id !== id));
          }
        });
      });
    } catch (error) {
      Swal.fire({
        title: "Error Can't Delete Room",
        text: error.response.message,
        confirmButtonColor: "#4C35E0",
        confirmButtonText: "Ok!",
      });
    }
  };

  useEffect(() => {
    getAllRoom();
  }, []);

  return (
    <div className="flex h-full bg-secondary-softblue">
      <Sidebar />
      <Navbar />
      <div className="basis-5/6 pl-6">
        <div className="px-4 py-4 mt-20">
          <div className="flex items-center justify-end mb-2">
            <div className="w-auto">
              <Link to="/create-room">
                <Button
                  type="button"
                  className="bg-primary-blue text-primary-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Create Room
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-primary-white items-center">
            <TableRoom
              room={room}
              removeRoom={removeRoom}
              tabelHeader={tabelHeader}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
