import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import ButtonIconDelete from "../ButtonIconDelete";
import ButtonIconEdit from "../ButtonIconEdit";

export default function TableBuilding(props) {
  const { building, removeBuilding, updateBuilding } = props;
  const setDataBuilding = (building) => {
    console.log(building);
  };

  let angka = 0;

  return (
    <div>
      <div className="flex flex-col">
        <div className="inline-block min-w-full p-2">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white">
                <tr>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black  text-left"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black  text-left"
                  >
                    Picture
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black  text-left"
                  >
                    Building Name
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black  text-left"
                  >
                    Complex Name
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black  text-left"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black  text-left"
                  >
                    Jumlah Room
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black  text-left"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black  text-left"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {building?.map((building, buildingIdx) => (
                  <tr
                    key={buildingIdx}
                    className="odd:bg-secondary-softblue text-primary-gray"
                  >
                    <td className="text-base text-textColor-blackThin   whitespace-nowrap">
                      {(angka += 1)}
                    </td>
                    <td className="text-base text-textColor-blackThin   whitespace-nowrap">
                      <img src={building.building_image} alt="building" width="72px" />
                    </td>
                    <td className="text-base text-textColor-blackThin   whitespace-nowrap">
                      {building.buildingName}
                    </td>
                    <td className="text-base text-textColor-blackThin   whitespace-nowrap">
                      {building.complexName}
                    </td>
                    <td className="text-base text-textColor-blackThin   whitespace-nowrap">
                      {building.address}
                    </td>
                    <td className="text-base text-textColor-blackThin   whitespace-nowrap">
                      {building.numOfRooms}
                    </td>
                    <td className="text-base text-textColor-blackThin   whitespace-nowrap">
                      {building.description}
                    </td>
                    <td className="flex items-center justify-around whitespace-nowrap">
                      <Button>
                        <Link
                          to={`/update-building/${building.id}`}
                          state={{ building }}
                          key={buildingIdx}
                          onClick={() => setDataBuilding(building)}
                        >
                          <ButtonIconEdit />
                        </Link>
                      </Button>
                      <button
                        onClick={() => removeBuilding(building.id)}
                        className="px-2 py-4"
                      >
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
  );
}
