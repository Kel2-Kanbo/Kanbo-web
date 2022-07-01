import React, { useState, useEffect } from "react";
import api from "../../API/Complex";

import Button from "../../Components/Button";
import CreateComplex from "../../Components/CreateComplex";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import TableComplex from "../../Components/TableComplex";

const Complex = () => {
  const [showModal, setShowModal] = useState(false);
  const [complex, setComplex] = useState([]);
  // console.log(complex);

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
  // const updateComplex = async (id) => {
  //   const response = await api.put(`complex/${id}`);
  //   console.log(response);
        // const { id } = response.data;
        // console.log(response.data);
        // setComplex(
        //   complex.map((data) => {
        //     return data.id === id ? { ...response.data } : data;
        //   })
        // );
        // if (response.data) {
        //   const allComplex = await getComplex();
        //   setComplex(allComplex);
        //   setShowModal(false);
        // }
  // };
  // const updateComplex = async (props) => {
  //   console.log("dataid", complex.props);
  //   await api.put(`complex/${complex.id}`, props);
  //   const { id } = complex.props;
  //   console.log(complex.props);
  //   setComplex(
  //     complex.map((props) => {
  //       return props.id === id ? { ...complex.props } : props;
  //     })
  //   );
  //   if (complex.props) {
  //     const allComplex = await getComplex();
  //     setComplex([allComplex]);
  //     setShowModal(false);
  //   }
  // };

  const updateComplex = async (complex) => {
    console.log("tes data"+ complex);
    // console.log("tes data id ",data.id);
    const response = await api.put(`/complex/{id}`, complex);
    const [id] = response.complex;
    console.log("tes response", response.complex);
    setComplex(
      complex.map((data) => {
        return data.id === id ? { ...response.data } : complex;
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
    <div className='flex h-screen bg-secondary-softblue'>
     <Sidebar />
        <Navbar />
      <div className='basis-5/6 pl-6'>
        <div className="px-4 py-4 mt-20">
          <h1 className="text-3xl font-bold mb-1">Complex</h1>
          <h4 className="text-md text-primary-gray">Manage complex</h4>
          <div className="flex justify-end">
            <div className="w-auto">
              <Button type="button" className="bg-primary-blue text-primary-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={_handleOpenModal}>
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
          <div className="bg-primary-white items-center rounded mt-4">
            <TableComplex
              complex={complex}
              removeComplex={removeComplex}
              updateComplex={updateComplex}
            />
          </div>
        </div>
      </div>
    </div >
  )
}
export default Complex;