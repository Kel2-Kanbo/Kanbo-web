import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { getComplex, deleteComplex } from "../../API/ApiFetch";
import Button from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import TableComplex from "../../Components/TableComplex";

const Complex = () => {
  const [complex, setComplex] = useState([]);
  console.log(complex);

  const [tabelHeader ] = useState([
    "No",
    "Complex Name",
    "Address",
    "City",
    "District",
    "Building",
    "Actions",
  ]);

  //get complex data from the server
  const getComplexes = async () => {
    try {
      await getComplex().then((response) => {
        setComplex(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // //remove complex
  const removeComplex = async (id) => {
    try {
      await deleteComplex(id).then((response) => {
        console.log(response);
        if (response) {
          Swal.fire({
            title: "Do You Want To Delete This Building?",
            text: `All data will be lost `,
            showCancelButton: true,
            cancelButtonText: "Cancel",
            confirmButtonColor: "#4C35E0",
            confirmButtonText: "Delete",
            cancelButtonColor: "#4C35E0",
          }).then((result) => {
            if (result.isConfirmed) {
              setComplex(complex.filter((complex) => complex.id !== id));
            }
          });
        }
      });
    } catch (error) {
      Swal.fire({
        title: "Error Can't Delete Building",
        text: error.response.message,
        confirmButtonColor: "#4C35E0",
        confirmButtonText: "Ok!",
      });
      console.log(error)
    }
  };

  useEffect(() => {
    getComplexes();
  }, []);

  return (
    <div className="flex h-full bg-secondary-softblue">
      <Sidebar />
      <Navbar />
      <div className="basis-5/6">
        <div className="px-4 py-4 mt-20">
          <div className="flex justify-end">
            <div className="w-auto">
              <Link to="/create-complex">
                <Button
                  type="button"
                  className="bg-primary-blue text-primary-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Create Complex
                </Button>
              </Link>
            </div>
          </div>
          {/* <div className="ml-6 mt-2">
            <Pagination />
          </div> */}
          <div className="bg-primary-white items-center rounded mt-4 ml-6">
            <TableComplex
              complex={complex}
              removeComplex={removeComplex}
              tabelHeader={tabelHeader}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Complex;
