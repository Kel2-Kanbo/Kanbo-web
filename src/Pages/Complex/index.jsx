import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import {
  getComplex,
  createComplex,
  deleteComplex,
  editComplex,
  getCity,
  getDistrict,
} from "../../API/ApiFetch";
import Button from "../../Components/Button";
// import CreateComplex from "../../Components/CreateComplex";
import CreateComplex from "./CreateComplex";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import TableComplex from "../../Components/TableComplex";

const Complex = () => {
  const [complex, setComplex] = useState([]);
  console.log(complex);

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

  // // //add complex
  // const addComplex = async (data) => {
  //   try {
  //     await createComplex(data).then((response) => {
  //       console.log(response);
  //       setComplex([...complex, response.data]);
  //     });
  //   } catch (error) {
  //     if (error.response) {
  //       console.log(error.response.data.msg);
  //     }
  //   } finally {
  //     Swal.fire({
  //       title: "Create Complex Success",
  //       // text: `You `,
  //       confirmButtonColor: "#4C35E0",
  //       // confirmButtonText: "Ok!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         setComplex([...complex, data]);
  //         setShowModal(false);
  //       }
  //     });
  //   }
  // };

  // //remove complex
  const removeComplex = async (id) => {
    try {
      await deleteComplex(id).then((response) => {
        console.log(response);
        if (response.status === 200) {
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
      if (error.response) {
        Swal.fire({
          title: "Error Can't Delete Complex",
          text: error.response.message,
          confirmButtonColor: "#4C35E0",
          confirmButtonText: "Ok!",
        });
      }
    }
  };

  // update complex
  // const updateComplex = async (id, data) => {
  //   try {
  //     await editComplex(id, data).then((response) => {
  //       console.log(response);
  //       setComplex(
  //         complex.map((data) => {
  //           return data.id === id ? { ...response.data } : data;
  //         })
  //       );
  //     });

  //     // if (response.status === 200) {
  //     //   const allBuilding = await getBuilding();
  //     //   setComplex(allBuilding);
  //     // }
  //   } catch (error) {
  //     if (error.response) {
  //       console.log(error.response.data.msg);
  //     }
  //   } finally {
  //     Swal.fire({
  //       title: "Update Building Success",
  //       // text: `You `,
  //       confirmButtonColor: "#4C35E0",
  //       // confirmButtonText: "Ok!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         setComplex(
  //           complex.map((item) => (item.id === data.id ? data : item))
  //         );
  //       }
  //     });
  //   }
  // };

  // const getCities = async () => {
  //   try {
  //     await getCity().then((response) => {
  //       setCity(response);
  //       console.log(response);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getDistricts = async () => {
  //   try {
  //     await getDistrict().then((response) => {
  //       setDistrict(response);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const getAllComplex = async () => {
      const allComplex = await getComplexes();
      if (allComplex) {
        setComplex(allComplex);
      }
    };
    getAllComplex();

    // const getAllCity = async () => {
    //   const allCity = await getCities()
    //   if(allCity) {
    //     setCity(allCity)
    //   }
    // };
    // getAllCity();

    // const getAllDistrict = async () => {
    //   const allDistrict = await getDistricts();
    //   if (allDistrict) {
    //     setDistrict(allDistrict);
    //   }
    // };
    // getAllDistrict();
  }, []);

  // useEffect(() => {
  //   const getAllCity = async () => {
  //     const allCity = await getCities();
  //     if (allCity) {
  //       setCity(allCity);
  //     }
  //   };
  //   getAllCity();
  // }, []);

  return (
    <div className="flex h-screen bg-secondary-softblue">
      <Sidebar />
      <Navbar />
      <div className="basis-5/6 pl-6">
        <div className="px-4 py-4 mt-20">
          <h1 className="text-3xl font-bold mb-1">Complex</h1>
          <h4 className="text-md text-primary-gray">Manage complex</h4>
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
            {/* {showModal ? (
              < CreateComplex
                handleClose={_handleCloseModal}
                addComplex={addComplex}
                city={city}
                district={district}
              />
            ) : null} */}
          </div>
          <div className="bg-primary-white items-center rounded mt-4">
            <TableComplex
              complex={complex}
              removeComplex={removeComplex}
              // updateComplex={updateComplex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Complex;
