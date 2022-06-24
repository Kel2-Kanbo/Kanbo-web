import React, { useState, useEffect } from "react";
import api from "../../API/Complex";

import Button from "../../Components/Button";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import CreateBuilding from "../../Components/CreateBuilding";
import TableBuilding from "../../Components/TableBuilding";
import Search from "../../Components/Search";

export default function Building() {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  const [building, setBuilding] = useState([]);
  console.log(building);

  const _handleOpenModal = () => {
    setShowModal(true);
  };
  const _handleCloseModal = () => {
    setShowModal(false);
  };

  const getBuilding = async () => {
    const response = await api.get("/building");
    return response.data;
  };

  const addBuilding = async (data) => {
    const response = await api.post("/building", data);
    if (response.data) {
      setBuilding([...building, response.data]);
      setShowModal(false);
    }
  };

  const removeBuilding = async (id) => {
    const response = await api.delete(`/building/${id}`);
    if (response.data) {
      alert("Delete building success");
      setBuilding(building.filter((item) => item.id !== id));
    }
  };

  const updateBuilding = async (data) => {
    console.log(data);
    console.log(data.id);
    const response = await api.put(`/building/${data.id}`, data);
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
    <div className=" flex bg-secondary-blue h-screen">
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
              <CreateBuilding handleClose={_handleCloseModal} addBuilding={addBuilding} />
            ) : null}
          </div>
          <Search />
          <div className="bg-primary-white items-center mt-4">
            <TableBuilding
              building={building}
              removeBuilding={removeBuilding}
              updateBuilding={updateBuilding}
            />
          </div>
        </div>

      </div>
    </div>
  );
}