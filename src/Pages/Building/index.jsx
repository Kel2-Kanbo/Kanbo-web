import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import { getBuilding, deleteBuilding } from "../../API/ApiFetch";
import Button from "../../Components/Button";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import TableBuilding from "../../Components/TableBuilding";

export default function Building() {
  const [building, setBuilding] = useState([]);
  console.log(building);

  const [tabelHeader] = useState([
    "No",
    "Picture",
    "Building Name",
    "Complex Name",
    "Address",
    "Room",
    "Description",
    "Actions",
  ]);

  //get building
  const getAllBuilding = async () => {
    try {
      await getBuilding().then((response) => {
        setBuilding(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //delete building
  const removeBuilding = async (id) => {
    try {
      await deleteBuilding(id).then((response) => {
        Swal.fire({
          title: "Do You Want To Delete This Building?",
          text: `All data will be lost `,
          confirmButtonColor: "#4C35E0",
          confirmButtonText: "Delete",
          showCancelButton: true,
          cancelButtonText: "Cancel",
          cancelButtonColor: "#4C35E0",
        }).then((result) => {
          if (result.isConfirmed) {
            setBuilding(building.filter((building) => building.id !== id));
          }
        });
      });
    } catch (error) {
      Swal.fire({
        title: "Error Can't Delete Building",
        text: error.response.message,
        confirmButtonColor: "#4C35E0",
        confirmButtonText: "Ok!",
      });
    }
  };

  useEffect(() => {
    getAllBuilding();
  }, []);

  return (
    <div className="flex bg-secondary-blue h-full">
      <Sidebar />
      <Navbar />
      <div className="basis-5/6">
        <div className="px-4 py-4 mt-20">
          <div className="flex items-center justify-end">
            <div className="flex justify-end">
              <div className="w-auto ">
                <Link to="/create-building">
                  <Button
                    type="button"
                    className="bg-primary-blue text-primary-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Create Building
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        </div>
        <div className="bg-primary-white items-center mt-4 ml-9 rounded">
          <TableBuilding
            building={building}
            removeBuilding={removeBuilding}
            tabelHeader={tabelHeader}
          />
        </div>
      </div>
    </div>
  );
}
