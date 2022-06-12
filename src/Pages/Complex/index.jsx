import React, { useState, useEffect } from "react";
import api from "../../API/Complex";

import Button from "../../Components/Button";
import CreateComplex from "../../Components/CreateComplex";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import TableComplex from "../../Components/TableComplex";

export default function Complex() {
  const [showModal, setShowModal] = useState(false);
  const [complex, setComplex] = useState([]);
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
  const removeComplex = async (id) => {
    const response = await api.delete(`/complex/${id}`);
    if (response.data) {
      alert("Complex has been deleted");
      setComplex(complex.filter((item) => item.id !== id));
    }
  };

  //update complex
  const updateComplex = async (data) => {
    console.log(data);
    console.log(data.id);
    const response = await api.put(`/complex/${data.id}`, data);
    const { id } = response.data;
    console.log(response.data);
    setComplex(
      complex.map((data) => {
        return data.id === id ? { ...response.data } : data;
      })
    );
    if (response.data) {
      const allComplex = await getComplex();
      setComplex(allComplex);
      setShowModal(false);
    }
  };

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
    <div className="flex">
      <Sidebar />
      <Navbar />
      <div className="bg-secondary-blue h-screen flex-1 ">
        <h1 className="text-3xl p-4">COMPLEX</h1>
        <h4 className="text-sm pl-4">Manage complex</h4>
        <div className="flex justify-end">
          <div className="w-auto p-8">
            <Button
              type="button"
              className="px-6 py-2.5 bg-primary-blue text-primary-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={_handleOpenModal}
            >
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
            handleClose={_handleCloseModal}
            removeComplex={removeComplex}
            updateComplex={updateComplex}
          />
        </div>
      </div>
    </div>
  );
}
