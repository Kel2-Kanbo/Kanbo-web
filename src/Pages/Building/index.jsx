import React, { useState, useEffect } from "react";
import api from "../../API/Complex";

import Button from "../../Components/Button";
import CreateBuilding from "../../Components/CreateBuilding";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import TableBuilding from "../../Components/TableBuilding";

const Building = () => {
  const [showModal, setShowModal] = useState(false);
  const [building, setBuilding] = useState([]);
  console.log(building);

  const _handleOpenModal = () => {
    setShowModal(true);
  };
  const _handleCloseModal = () => {
    setShowModal(false);
  };

  //get complex data from the server
  const getBuilding = async () => {
    const response = await api.get("/building");
    return response.data;
  };

  //add complex
  // const addComplex = async (data) => {
  //   const response = await api.post("/complex", data);
  //   if (response.data) {
  //     setBuilding([...complex, response.data]);
  //     setShowModal(false);
  //   }
  // };

  //remove complex
  // const removeComplex = async (id) => {
  //   const response = await api.delete(`/complex/${id}`);
  //   if (response.data) {
  //     alert("Complex has been deleted");
  //     setBuilding(complex.filter((item) => item.id !== id));
  //   }
  // };

  //update complex
  const updateComplex = async (data) => {
    console.log(data);
    console.log(data.id);
    const response = await api.put(`/complex/${data.id}`, data);
    const { id } = response.data;
    console.log(response.data);
    setBuilding(
      building.map((data) => {
        return data.id === id ? { ...response.data } : data;
      })
    );
    if (response.data) {
      const allBuilding = await getBuilding();
      setBuilding(allBuilding);
      setShowModal(false);
    }
  };

  useEffect(() => {
    const getAllBuilding = async () => {
      const allBuilding = await getBuilding();
      if (allBuilding) {
        setBuilding(allBuilding);
      }
    };
    getAllBuilding();
  }, []);

  return (
    <div className='flex h-screen bg-secondary-softblue'>
      <div className='basis-1/6 bg-primary-white'>
        <Sidebar />
      </div>
      <div className='basis-5/6'>
        <Navbar />
        <div className="px-4 py-4">
          <h1 className="text-3xl font-bold mb-1">Building</h1>
          <h4 className="text-md text-primary-gray">Manage Building</h4>
          <div className="flex justify-end">
            <div className="w-auto">
              <Button type="button" className="bg-primary-blue text-primary-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={_handleOpenModal}>
                Create Building
              </Button>
            </div>
            {showModal ? (
              <CreateBuilding
                handleClose={_handleCloseModal}
              // addComplex={addComplex}
              />
            ) : null}
          </div>
          <div className="bg-primary-white items-center rounded mt-4">
            <TableBuilding
              building={building}
              // removeComplex={removeComplex}
              updateComplex={updateComplex}
            />
          </div>
        </div>
      </div>
    </div >
  )
}
export default Building;