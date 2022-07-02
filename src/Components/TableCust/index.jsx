import React, { useState } from "react";

import ButtonIconDelete from "../ButtonIconDelete";

export default function TableCust(props){

    const {customer, removeCustomer} = props;

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
                    Customer name
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    Username
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    Province
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    City
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    District
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
                {customer?.map((cust) => (
                  <tr className="odd:bg-secondary-softblue text-primary-gray">
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {customer.customerName}
                    </td>
                    <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                      {customer.userName}
                    </td>
                    <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                      {customer.email}
                    </td>
                    <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                      {customer.province}
                    </td>
                    <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                      {customer.city}
                    </td>
                    <td className="text-base text-textColor-blackThin  px-6 py-4 whitespace-nowrap">
                      {customer.districs}
                    </td>
                    <td className="flex justify-center gap-8 px-6 py-4 whitespace-nowrap">
                      <button onClick={() => removeCustomer(customer.id)}>
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