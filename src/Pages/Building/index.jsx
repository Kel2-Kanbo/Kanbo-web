import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../../API/Complex";
import newAPI from "../../API/newAPI";
import Swal from "sweetalert2";

import Button from "../../Components/Button";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import CreateBuilding from "../../Components/CreateBuilding";
import TableBuilding from "../../Components/TableBuilding";
import { getBuilding } from "../../API/ApiFetch";
// import { data } from "autoprefixer";

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

  const getAllBuilding = async() => {
    try{
      await getBuilding().then((response) => {
        setBuilding(response);
      });
    } catch (error) {
      console.log(error)
    }
  }

  const addBuilding = async (data) => {
    try {
      await newAPI
        .post("/api/page/admin/building", data)
        .then((response) => console.log(response));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.msg);
      }
    } finally {
      Swal.fire({
        title: "Create Building Success",
        // text: `You `,
        confirmButtonColor: "#4C35E0",
        // confirmButtonText: "Ok!",
      }).then((result) => {
        if (result.isConfirmed) {
          setBuilding([...building, data]);
          setShowModal(false);
        }
      });
    }
    // const response = await newAPI.post("/api/page/admin/building/create", data);
    // if (response.data) {
    //   setBuilding([...building, response.data]);
    //   setShowModal(false);
    // }
  };

  const removeBuilding = async (id) => {
    const response = await newAPI.delete(`/api/page/admin/building/${id}`);
    if (response.data) {
      alert("Delete building success");
      setBuilding(building.filter((item) => item.id !== id));
    }
  };

  const updateBuilding = async (data) => {
    console.log(data);
    console.log(data.id);
    const response = await newAPI.put(
      `/api/page/admin/building/${data.id}`,
      data
    );
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
    const getAllBuildings = async () => {
      const allBuilding = await getAllBuilding();
      if (allBuilding) {
        setBuilding(allBuilding);
        console.log(allBuilding)
      }
    };
    getAllBuildings();
  }, []);

  return (
    <div className=" flex bg-secondary-blue h-screen">
      <Sidebar />
      <Navbar />
      <div className="basis-5/6">
        <div className="px-4 py-4 mt-20">
          <h1 className="text-3xl font-bold mb-4">Building</h1>

          <div className="flex items-center justify-between mb-6">
            <div className="text-sm">
              <select className="text-textColor-blackThin whitespace-nowrap px-4 py-3 rounded border bg-primary-white">
                <option
                  value=""
                  className="bg-secondary-blue text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap"
                >
                  Building A
                </option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="w-auto ">
              <Button
                type="button"
                className="bg-primary-blue text-primary-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={_handleOpenModal}
              >
                Create Building
              </Button>
            </div>
            {showModal ? (
              <CreateBuilding
                handleClose={_handleCloseModal}
                addBuilding={addBuilding}
                // getComplex={getComplex}
              />
            ) : null}
          </div>
        </div>
        <div className="bg-primary-white items-center m-4">
          <TableBuilding
            building={building}
            removeBuilding={removeBuilding}
            updateBuilding={updateBuilding}
          />
        </div>
      </div>
    </div>
  );
}
