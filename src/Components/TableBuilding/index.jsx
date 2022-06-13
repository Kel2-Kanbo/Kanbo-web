import React, { useState } from "react";

import ButtonIconDelete from "../ButtonIconDelete";
import ButtonIconEdit from "../ButtonIconEdit";
// import EditRoom from "../EditRoom";

export default function TableBuilding(props) {
  const { building, removeRoom, updateRoom } = props;
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
                    Jml Room
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
                {building?.map((build) => (
                  <tr className="odd:bg-secondary-softblue text-primary-gray">
                    <td className="text-base text-textColor-blackThin   whitespace-nowrap">
                      {(angka += 1)}
                    </td>
                    <td className="text-base text-textColor-blackThin   whitespace-nowrap">
                      <img src={build.picture} alt="room" width="72px" />
                    </td>
                    <td className="text-base text-textColor-blackThin   whitespace-nowrap">
                      {build.buildingName}
                    </td>
                    <td className="text-base text-textColor-blackThin   whitespace-nowrap">
                      {build.complexName}
                    </td>
                    <td className="text-base text-textColor-blackThin   whitespace-nowrap">
                      {build.address}
                    </td>
                    <td className="text-base text-textColor-blackThin   whitespace-nowrap">
                      {build.jmlRoom}
                    </td>
                    <td className="text-base text-textColor-blackThin   whitespace-nowrap">
                      {build.desc}
                    </td>
                    <td className="flex justify-around whitespace-nowrap">
                      <button onClick={_handleOpenModalEdit}
                        className="px-2 py-4"
                      >
                        <ButtonIconEdit onClick={() => updateRoom(build)} />
                        {/* {showModalEdit ? (
                          <EditRoom
                            _handleCloseModalEdit={_handleCloseModalEdit}
                            room={room}
                            updateRoom={() => updateRoom(room)}
                          />
                        ) : null} */}
                      </button>
                      <button
                        onClick={() => removeRoom(build.id)}
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
  );
}
