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
  getProvince,
} from "../../API/ApiFetch";
import Button from "../../Components/Button";
import CreateComplex from "../../Components/CreateComplex";
// import CreateComplex from "./CreateComplex";
import Navbar from "../../Components/Navbar";
import Pagination from "../../Components/Pagination";
import Sidebar from "../../Components/Sidebar";
import TableComplex from "../../Components/TableComplex";
import api from "../../API/Complex";


const Complex = () => {
  const [complex, setComplex] = useState([]);
  console.log(complex);

  const [showModal, setShowModal] = useState(false);

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
  useEffect(() => {
    const getAllComplex = async () => {
      const allComplex = await getComplex();
      if (allComplex) {
        setComplex(allComplex);
      }
    };
    getAllComplex();
  }, []);
  //get complex data from the server
  // const getComplexes = async () => {
  //   try {
  //     await getComplex().then((response) => {
  //       setComplex(response);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // //add complex
  // const addComplex = async (data) => {
  //   try {
  //     await createComplex(data).then((response) => {
  //       if (response.data) {
  //         Swal.fire({
  //           title: "Create Complex Success",
  //           confirmButtonColor: "#4C35E0",
  //         }).then((result) => {
  //           if (result.isConfirmed) {
  //             setComplex([...complex, response.data]);
  //             setShowModal(false);
  //           }
  //         });
  //       }
  //       console.log(response);
  //     });
  //   } catch (error) {
  //     if (error.response) {
  //       console.log(error.response.data.msg);
  //     }
  //   }
  // };

  // // //remove complex
  // const removeComplex = async (id) => {
  //   try {
  //     await deleteComplex(id).then((response) => {
  //       console.log(response);
  //       if (response.status === 200) {
  //         Swal.fire({
  //           title: "Do You Want To Delete This Building?",
  //           text: `All data will be lost `,
  //           showCancelButton: true,
  //           cancelButtonText: "Cancel",
  //           confirmButtonColor: "#4C35E0",
  //           confirmButtonText: "Delete",
  //           cancelButtonColor: "#4C35E0",
  //         }).then((result) => {
  //           if (result.isConfirmed) {
  //             setComplex(complex.filter((complex) => complex.id !== id));
  //           }
  //         });
  //       }
  //     });
  //   } catch (error) {
  //     if (error.response) {
  //       Swal.fire({
  //         title: "Error Can't Delete Complex",
  //         text: error.response.message,
  //         confirmButtonColor: "#4C35E0",
  //         confirmButtonText: "Ok!",
  //       });
  //     }
  //   }
  // };

  // const getProvinces = async () => {
  //   try {
  //     await getProvince.then((response) => {
  //       setProvince(response);
  //       console.log(response);
  //     });
  //   } catch (error) {
  //     console.log(error);
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

  // useEffect(() => {
  //   const getAllComplex = async () => {
  //     const allComplex = await getComplexes();
  //     if (allComplex) {
  //       setComplex(allComplex);
  //     }
  //   };
  //   getAllComplex();

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

  // const getAllProvince = async () => {
  //   const allProvince = await getProvinces();
  //   if (allProvince) {
  //     setProvince(allProvince);
  //   }
  // }
  // }, []);

  return (
    <div className="flex h-screen bg-secondary-softblue">
      <Sidebar />
      <Navbar />
      <div className="basis-5/6">
        <div className="px-4 py-4 mt-20">
          {/* <h1 className="text-3xl font-bold mb-1">Complex</h1>
          <h4 className="text-md text-primary-gray">Manage complex</h4> */}
          <div className="flex justify-end">
            <div className="w-auto">
              <Link to="/create-complex">
                <Button
                  type="button"
                  className="bg-primary-blue text-primary-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={_handleOpenModal}
                >
                  Create Complex
                </Button>
              </Link>
            </div>
            {/* {showModal ? (
              <CreateComplex
                showModal={showModal}
                handleClose={_handleCloseModal}
              // addComplex={addComplex}
              />
            ) : null} */}
          </div>
          <Pagination/>
          <div className="bg-primary-white items-center rounded mt-4">
            <TableComplex
              complex={complex}
            // removeComplex={removeComplex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Complex;
