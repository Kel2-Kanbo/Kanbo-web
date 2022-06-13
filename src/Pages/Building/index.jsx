import React, { useState, useEffect } from "react";
import api from "../../API/Complex";

import Button from "../../Components/Button";
import CreateBuilding from "../../Components/CreateBuilding";
import TableBuilding from "../../Components/TableBuilding";

export default function Building() {
  const [showModal, setShowModal] = useState(false);
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
    <div className="bg-secondary-blue h-screen">
      <h1 className="text-3xl p-4">Building</h1>
      <div className="text-sm">
        <select className="bg-secondary-blue text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
          <option value="" className="bg-secondary-blue text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">Sort by</option>
        </select>
       </div>

      <div className="flex justify-end">
        <div className="w-auto p-8">
          <Button type="button" style={{backgroundColor: "blue", color: "white"}} onClick={() => _handleOpenModal}>
            Create Building
          </Button>
        </div>
        {showModal ? (
          <CreateBuilding handleClose={_handleCloseModal} addBuilding={addBuilding} />
        ) : null}
      </div>
      <div className="bg-primary-white items-center m-4">
        <TableBuilding
          Building={Building}
          removeBuilding={removeBuilding}
          updateBuilding={updateBuilding}
        />
      </div>
    </div>
  );
}