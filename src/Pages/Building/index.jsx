import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";

import Button from "../../Components/Button";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
// import CreateBuilding from "../../Components/CreateBuilding";
// import CreateBuilding from "./CreateBuilding";
import TableBuilding from "../../Components/TableBuilding";
import {
  getBuilding,
  createBuilding,
  deleteBuilding,
  editBuilding,
  getComplex,
} from "../../API/ApiFetch";

export default function Building() {
  const [building, setBuilding] = useState([]);
  console.log(building);

  

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

  // //get complex
  // const getAllComplex = async () => {
  //   try {
  //     await getComplex().then((response) => {
  //       setComplex(response);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //create building
  const addBuilding = async (data) => {
    try {
      await createBuilding(data).then((response) => {
        console.log(response);
        setBuilding([...building, response.data]);
      });
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
        }
      });
    }
  };

  //delete building
  const removeBuilding = async (id) => {
    try {
      await deleteBuilding(id).then((response) => {
        console.log(response);
        setBuilding(building.filter((item) => item.id !== id));
      });
    } catch (error) {
      console.log(error);
    } finally {
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
          setBuilding(building.filter((item) => item.id !== id));
        }
      });
    }
  };

  //update building
  const updateBuilding = async (data) => {
    try {
      await editBuilding(data).then((response) => {
        console.log(response);
        setBuilding(
          building.map((item) => (item.id === data.id ? data : item))
        );
      });

      // if (response.status === 200) {
      //   const allBuilding = await getBuilding();
      //   setBuilding(allBuilding);
      // }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.msg);
      }
    } finally {
      Swal.fire({
        title: "Update Building Success",
        // text: `You `,
        confirmButtonColor: "#4C35E0",
        // confirmButtonText: "Ok!",
      }).then((result) => {
        if (result.isConfirmed) {
          setBuilding(
            building.map((item) => (item.id === data.id ? data : item))
          );
        }
      });
    }
  };

  useEffect(() => {
    const getAllBuildings = async () => {
      const allBuilding = await getAllBuilding();
      if (allBuilding) {
        setBuilding(allBuilding);
        console.log(allBuilding);
      }
    };
    getAllBuildings();
  }, []);

  // useEffect(() => {
  //   const getAllComplexes = async () => {
  //     const allComplex = await getAllComplex();
  //     if (allComplex) {
  //       setComplex(allComplex);
  //       console.log(allComplex);
  //     }
  //   };
  //   getAllComplexes();
  // }, []);

  return (
    // <div className='flex h-screen bg-secondary-softblue'>
    //     <Sidebar />
    //     <Navbar />
    //   <div className='basis-5/6 pl-6'>
    //     <div className="px-4 py-4 mt-20">
    //       <h1 className="text-3xl font-bold mb-1">Building</h1>
    //       <h4 className="text-md text-primary-gray">Manage Building</h4>
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
              <Link to="/create-building">
              <Button
                type="button"
                className="bg-primary-blue text-primary-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                // onClick={building}
              >
                Create Building
                {/* <CreateBuilding/> */}
              </Button>
              </Link>
            </div>
            {/* {showModal ? (
              <CreateBuilding
                handleClose={_handleCloseModal}
                createBuilding={createBuilding}
                complex={complex}
              />
            ) : null} */}
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
