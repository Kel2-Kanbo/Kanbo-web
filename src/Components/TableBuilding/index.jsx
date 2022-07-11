import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import ButtonIconDelete from "../ButtonIconDelete";
import ButtonIconEdit from "../ButtonIconEdit";

export default function TableBuilding(props) {
  const { building, removeBuilding, updateBuilding, tabelHeader } = props;
  const setDataBuilding = (building) => {
    console.log(building);
  };

  let angka = 0;

  return (
    <div>
      <div className="flex flex-col">
        <div className="inline-block min-w-fit p-2">
          <div className="overflow-hidden">
            <table className="table-fixed min-w-fit">
              <thead className="bg-white">
                <tr>
                  {tabelHeader.map((item) => (
                    <th
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                      {item}
                    </th>
                  ))}
                  
                </tr>
              </thead>
              <tbody>
                {building?.map((building, buildingIdx) => (
                  <tr
                    key={buildingIdx}
                    className="odd:bg-secondary-softblue text-primary-gray "
                  >
                    <td className="text-base text-textColor-blackThin">
                      {(angka += 1)}
                    </td>
                    <td className="text-base text-textColor-blackThin">
                      <img src={building.building_image} alt="building" width="72px" />
                    </td>
                    <td className="text-base text-textColor-blackThin">
                      {building.buildingName}
                    </td>
                    <td className="text-base text-textColor-blackThin">
                      {building.complexName}
                    </td>
                    <td className="text-base text-textColor-blackThin">
                      {building.address}
                    </td>
                    <td className="text-base text-textColor-blackThin">
                      {building.numOfRooms}
                    </td>
                    <td className="text-base text-textColor-blackThin">
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
