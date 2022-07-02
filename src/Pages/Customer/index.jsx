import React, {useState, useEffect} from "react";
// import api from "../../API/Complex"

import Button from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import TableCust from "../../Components/TableCust";

const Customer = () => {

    const [customer, setCustomer] = useState([]);

    const removeCustomer = async (id) => {
        const response = await delete(`/customer/${id}`);
        if(response.data) {
            alert("Customer has been delete");
            setCustomer(customer.filter((item) => item.id !== id));
        }
    };

    return (
    <div className='flex h-screen bg-secondary-softblue'>
        <Sidebar />
        <Navbar />
      <div className='basis-5/6'>
        <div className="px-4 py-4 mt-20">
          <h1 className="text-3xl font-bold mb-1">Customer</h1>
          <div className="flex justify-end">
            <div className="w-auto">
            </div>
          </div>
          <div className="bg-primary-white items-center rounded mt-4">
            <TableCust
            customer={customer}
            removeCustomer={removeCustomer}
            />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Customer;