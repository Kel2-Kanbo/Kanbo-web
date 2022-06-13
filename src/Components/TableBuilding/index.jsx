import React, { useState } from "react";

import ButtonIconDelete from "../ButtonIconDelete";
import ButtonIconEdit from "../ButtonIconEdit";

export default function TableBuilding(props) {
  const { building, removeBuilding, updateBuilding } = props;
  const [showModalEdit, setShowModalEdit] = useState(false);

  const _handleCloseModalEdit = () => {
    setShowModalEdit(false);
  };

  const _handleOpenModalEdit = () => {
    setShowModalEdit(true);
  };

  let angka = 0;

  return (
    <div>
      <div className="flex flex-col">
        <div>
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Building Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Complex Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Jumlah Room
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {building?.map((building) => (
                    <tr className="bg-secondary-blue">
                      <td className="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {building.buildingName}
                      </td>
                      <td className="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {building.complexName}
                      </td>
                      <td className="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {building.address}
                      </td>
                      <td className="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {building.jumlahRoom}
                      </td>
                      <td className="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {building.description}
                      </td>
                      
                      <td className="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {building.status ? (
                          <button className="bg-success-green text-textColor-green font-bold py-2 px-6 rounded-full">
                            Available
                          </button>
                        ) : (
                          <button className="bg-error-pink text-textColor-red font-bold py-2 px-6 rounded-full">
                            Booked
                          </button>
                        )}
                      </td>
                      <td className="flex justify-around whitespace-nowrap">
                        <button
                          onClick={() => removeBuilding(building.id)}
                          className="px-2 py-4">
                          <ButtonIconDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}