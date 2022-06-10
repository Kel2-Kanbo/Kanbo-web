import React, { useState, useEffect } from "react";
import api from "../../API/Complex";

import Button from "../../Components/Button";
import CreateComplex from "../../Components/CreateComplex";
import TableComplex from "../../Components/TableComplex";

export default function Complex() {
  const [showModal, setShowModal] = useState(false);
  const [complex, setComplex] = useState([]);
  // const [complex, setComplex] = useState(null);
  console.log(complex);

  const _handleOpenModal = () => {
    setShowModal(true);
  };
  const _handleCloseModal = () => {
    setShowModal(false);
  };

  //get complex data from the server
  const getComplex = async () => {
    const response = await api.get("/complex");
    return response.data;
  };

  //add complex
  const addComplex = async (data) => {
    const response = await api.post("/complex", data);
    if (response.data) {
      setComplex([...complex, response.data]);
      setShowModal(false);
    }
  };

  //remove complex
  const removeComplex = async (data) => {
    console.log(complex);
    const id = complex;
    console.log(id);
    const response = await api.delete(`/complex/${id}`);
    alert("Complex removed successfully");
    console.log(response.data);
    if (response.data) {
      const allComplex = await getComplex();
      setComplex(allComplex);
    }
  };

  //update complex
  const updateComplex = async (data) => {
    console.log(data)
    console.log(data.id)    
    const response = await api.put(`/complex/${data.id}`, data);
    const {id, complexName, complexAddress, city, district, building} = response.data;
    console.log(response.data);
    setComplex(complex.map((data) => {
      return data.id === id ? { ...response.data } : data;
    }))
    if (response.data) {
      const allComplex = await getComplex();
      setComplex(allComplex);
    }
  }

  useEffect(() => {
    const getAllComplex = async () => {
      const allComplex = await getComplex();
      if (allComplex) {
        setComplex(allComplex);
      }
    };
    getAllComplex();
  }, []);

  return (
    <div className="bg-secondary-blue h-screen">
      <h1 className="text-3xl p-4">COMPLEX</h1>
      <h4 className="text-sm pl-4">Manage complex</h4>
      <div className="flex justify-end">
        <div className="w-auto p-8">
          <Button type="button" onClick={_handleOpenModal}>
            Create Complex
          </Button>
        </div>
        {showModal ? (
          <CreateComplex
            handleClose={_handleCloseModal}
            addComplex={addComplex}
          />
        ) : null}
      </div>
      <div className="bg-primary-white items-center m-4">
        <TableComplex
          complex={complex}
          removeComplex={removeComplex}
          updateComplex={updateComplex}
        />
      </div>
    </div>
  );
}
