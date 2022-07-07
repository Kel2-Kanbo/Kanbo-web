import React, {useState, useEffect} from "react";
// import api from "../../API/Complex"

import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import TableBooking from "../../Components/TableBooking";

const Booking = () => {

    const [booking, setBooking] = useState([]);

    const removeBooking = async (id) => {
        const response = await delete(`/order/${id}`);
        if(response.data) {
            alert("Order has been delete");
            setBooking(booking.filter((item) => item.id !== id));
        }
    };

    return (
    <div className='flex h-screen bg-secondary-softblue'>
        <Sidebar />
        <Navbar />
      <div className='basis-5/6'>
        <div className="px-4 py-4 mt-20">
          <div className="flex justify-end">
            <div className="w-auto">
            </div>
          </div>
          <div className="bg-primary-white items-center rounded mt-4">
            <TableBooking
            booking={booking}
            removeBooking={removeBooking}
            />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Booking;