import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery, useMutation } from "@apollo/client";

import { DELETE_ROOM_BY_ID, GET_DATA_ROOM, UPDATE_ROOM } from "../../GraphQL/room/queries";
import Button from "../../Components/Button";
import TableRoom from "../../Components/TableRoom";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";

export default function Room() {
  const [room, setRoom] = useState([]);
  console.log(room);

  const [tabelHeader] = useState([
    "ID Room",
    "Picture",
    "Room Name",
    "Floor",
    "Room Item",
    "Rate per day",
    "Status",
    "Actions",
  ]);

  //get room
  const { data: dataRoom } = useQuery(GET_DATA_ROOM, {
    refetchQueries: [{ query: GET_DATA_ROOM }],
  });

  console.log(dataRoom);

  useEffect(() => {
    if (dataRoom) {
      setRoom(dataRoom?.kanbo_chat_room);
    }
  }, [dataRoom]);

  //delete room
  const [deleteRoom] = useMutation(DELETE_ROOM_BY_ID, {
    refetchQueries: [GET_DATA_ROOM],
    onCompleted: (room) => {
      console.log(room);
      Swal.fire({
        title: "Success",
        text: "Delete Room Success",
        icon: "success",
        confirmButtonText: "OK",
      });
    },
  });

  const removeRoom = (room_id) => {
    console.log(room_id);
    Swal.fire({
      title: "Do You Want To Delete This Room?",
      text: `All data will be lost `,
      confirmButtonColor: "#4C35E0",
      confirmButtonText: "Delete",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      cancelButtonColor: "#4C35E0",
    }).then((result) => {
      console.log(result);
      if (result.value) {
        deleteRoom({ variables: { room_id: room_id } });
      }
    });
  };

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
