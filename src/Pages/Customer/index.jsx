import React, {useState, useEffect} from "react";
// import api from "../../API/Complex"

import Button from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import TableCust from "../../Components/TableCust";
import { useQuery,useMutation } from "@apollo/client";
import { GET_ALL_CUSTOMER, DELETE_CUSTOMER_BY_ID } from "../../GraphQL/customer/queries";
import Swal from "sweetalert2";

const Customer = () => {

  const { data: dataCustomer} = useQuery(GET_ALL_CUSTOMER, {
    refetchQueries: [{query: GET_ALL_CUSTOMER}],
  });
  console.log(dataCustomer);

    const [customer, setCustomer] = useState([]);

    useEffect(() => {
      if (dataCustomer) {
        setCustomer(dataCustomer?.kanbo_chat_customer);
      }
    }, [dataCustomer]);

    const [deleteCustomer] = useMutation(DELETE_CUSTOMER_BY_ID);

    const removeCustomer = (cust_id) => {
      console.log(cust_id)
      Swal.fire({
        title: "Do You Want To Delete This Customer?",
        text: "All data will be lost",
        confirmButtonColor: "#4C35E0",
        confirmButtonText: "Delete",
        showCancelButton: true,
        cancelButtonText: "Cancel",
        cancelButtonColor: "#4C35E0",
      }).then((result) => {
        console.log(result);
        if (result.value) {
          deleteCustomer({ variables: {cust_id: cust_id} });
        }
      });
    };

    const [tabelHeader ] = useState([
      "Customer Name",
      "Username",
      "Email",
      "Province",
      "City",
      "District",
      "Actions",
    ]);

    // const removeCustomer = async (id) => {
    //     const response = await delete(`/customer/${id}`);
    //     if(response.data) {
    //         alert("Customer has been delete");
    //         setCustomer(customer.filter((item) => item.id !== id));
    //     }
    // };

    return (
    <div className='flex h-full bg-secondary-softblue'>
        <Sidebar />
        <Navbar />
      <div className='basis-5/6'>
        <div className="px-4 py-4 mt-20">
          <div className="flex justify-end">
            <div className="w-auto">
            </div>
          </div>
          <div className="bg-primary-white items-center rounded mt-4">
            <TableCust
            customer={customer}
            tabelHeader={tabelHeader}
            removeCustomer={removeCustomer}
            />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Customer;