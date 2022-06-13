// import React from 'react'
// import Sidebar from '../../Components/Sidebar'
// import Navbar from '../../Components/Navbar'

// import { Link } from 'react-router-dom'

// function index() {
//   return (
//     <div className=' flex'>
//         <Sidebar/>
//           <Navbar/>
//           <div className='h-screen flex-1 '>
//             <div className='bg-secondary-softblue'>
//               <div className="px-6 py-12 lg:my-12 md:px-12  text-primary-gray text-center lg:text-left">
//                 <h1 className='text-2xl'>Room</h1>
//                 <div className="container mx-auto xl:px-10">
//                   <div className="grid lg:grid-cols-2 gap-12 flex items-center">
//                     <div className="mt-12 lg:mt-0">
//                       <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">The best offer <br /><span className="text-blue-600">for your business</span></h1>
//                       <a className="inline-block px-7 py-3 mr-2 bg-primary-blue text-primary-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Create Building</a>
//                       {/* <a className="inline-block px-7 py-3 bg-transparent text-primary-blue font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a> */}
//                     </div>
//                     <div className="mb-12 lg:mb-0">
//                       <img
//                         src="https://mdbootstrap.com/img/new/standard/city/017.jpg"
//                         className="w-full rounded-lg shadow-lg"
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className=" px-6 py-12 lg:my-12 md:px-12 text-primary-gray text-center lg:text-left">
//                 <div className="container mx-auto xl:px-10">
//                   <div className="grid lg:grid-cols-2 gap-12 flex items-center">
//                     <div className="mt-12 lg:mt-0">
//                       <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">The best offer <br /><span className="text-blue-600">for your business</span></h1>
//                       <a className="inline-block px-7 py-3 mr-2 bg-primary-blue text-primary-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Create Building</a>
//                       {/* <a className="inline-block px-7 py-3 bg-transparent text-primary-blue font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a> */}
//                     </div>
//                     <div className="mb-12 lg:mb-0">
//                       <img
//                         src="https://mdbootstrap.com/img/new/standard/city/017.jpg"
//                         className="w-full rounded-lg shadow-lg"
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//     </div>
//   )
// }

// export default index

import React, { useState, useEffect } from "react";
import api from "../../API/Complex";

import Button from "../../Components/Button";
import CreateRoom from "../../Components/CreateRoom";
import TableRoom from "../../Components/TableRoom";
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'

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
              <Button type="button" style={{ backgroundColor: "blue", color: "white" }} onClick={_handleOpenModal}>

                Create Room
              </Button>
            </div>
            {showModal ? (
              <CreateRoom handleClose={_handleCloseModal} addRoom={addRoom} />
            ) : null}
          </div>
          <div className="bg-primary-white items-center">
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
