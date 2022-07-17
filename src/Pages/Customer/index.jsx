import React, {useState, useEffect} from "react";
// import api from "../../API/Complex"

import Button from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import TableCust from "../../Components/TableCust";

const Customer = () => {

    const [customer, setCustomer] = useState([]);

    const [tabelHeader ] = useState([
      "Customer Name",
      "Username",
      "Email",
      "Province",
      "City",
      "District",
      "Actions",
    ]);

    const removeCustomer = async (id) => {
        const response = await delete(`/customer/${id}`);
        if(response.data) {
            alert("Customer has been delete");
            setCustomer(customer.filter((item) => item.id !== id));
        }
    };

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