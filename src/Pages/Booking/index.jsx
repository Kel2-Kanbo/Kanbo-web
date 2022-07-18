import React, { useState, useEffect } from "react";

import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import TableBooking from "../../Components/TableBooking";

import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_BOOKING } from "../../GraphQL/booking/queries";

const Booking = () => {
  const { data: dataBooking } = useQuery(GET_ALL_BOOKING);

  console.log('ini data booking di booking', dataBooking);

  const [booking, setBooking] = useState([]);

  useEffect(() => {
    if (dataBooking) {
      setBooking(dataBooking?.kanbo_chat_booking_details);
    }
  }, [dataBooking]);

  const [tabelHeader ] = useState([
    "ID Order",
    "Name",
    "Room Booked",
    "Payment",
    "Date",
    "Total",
    "Status",
    "Actions",
  ]);

  // const removeBooking = async (id) => {
  //   const response = await delete `/order/${id}`;
  //   if (response.data) {
  //     alert("Order has been delete");
  //     setBooking(booking.filter((item) => item.id !== id));
  //   }
  // };

  return (
    <div className="flex h-full bg-secondary-softblue">
      <Sidebar />
      <Navbar />
      <div className="basis-5/6">
        <div className="px-4 py-4 mt-20">
          <div className="flex justify-end">
            <div className="w-auto"></div>
          </div>
          <div className="bg-primary-white items-center rounded mt-4">
            <TableBooking
              tabelHeader={tabelHeader}
              booking={booking}
              // removeBooking={removeBooking}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
