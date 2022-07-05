import React, { useState } from "react";

import ButtonIconDelete from "../ButtonIconDelete";
import ButtonIconEdit from "../ButtonIconEdit";

export default function TableBooking(props){

    const {booking, editBooking, removeBooking} = props;

    return(
    <div>
      <div className="flex flex-col">
        <div className="inline-block min-w-full p-2">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white">
                <tr>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    ID Order
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    Room Booked
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    Payment
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-center"
                  >
                    Actions
                  </th>
                </tr >
              </thead >
              <tbody>
                {booking?.map((booking) => (
                  <tr className="odd:bg-secondary-softblue text-primary-gray">
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {booking.idOrder}
                    </td>
                    <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                      {booking.name}
                    </td>
                    <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                      {booking.roomBooked}
                    </td>
                    <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                      {booking.payment}
                    </td>
                    <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                      {booking.date}
                    </td>
                    <td className="text-base text-textColor-blackThin  px-6 py-4 whitespace-nowrap">
                      {booking.total}
                    </td>
                    <td className="text-base text-textColor-blackThin  px-6 py-4 whitespace-nowrap">
                      {booking.status}
                    </td>
                    <td className="flex justify-center gap-8 px-6 py-4 whitespace-nowrap">
                      <button onClick={() => editBooking(booking.idOrder)}>
                        <ButtonIconEdit/>
                      </button>
                      <button onClick={() => removeBooking(booking.idOrder)}>
                        <ButtonIconDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table >
          </div >
        </div >
      </div >
    </div >
    );
}