import React, { useState } from "react";

import ButtonIconDelete from "../ButtonIconDelete";
import ButtonIconEdit from "../ButtonIconEdit";
import EditRoom from "../EditRoom";

export default function TableRoom(props) {
  const { room, removeRoom, updateRoom } = props;
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
                      No
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Picture
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Room Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Floor
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Room Item
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Rate per day
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Status
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
                  {room?.map((room) => (
                    <tr className="bg-secondary-blue">
                      <td className="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {(angka += 1)}
                      </td>
                      <td className="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        <img src={room.picture} alt="room" width="72px" />
                      </td>
                      <td className="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {room.roomName}
                      </td>
                      <td className="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {room.floor}
                      </td>
                      <td className="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {room.roomitem.map((item) => (
                          <li className="list-none inline m-1">
                            {item.itemName}
                          </li>
                        ))}
                      </td>
                      <td className="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {room.roomPrice}
                      </td>
                      <td className="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {room.status ? (
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
                        <button onClick={_handleOpenModalEdit}      
                          className="px-2 py-4"
                        >
                          <ButtonIconEdit onClick={() => updateRoom(room)}/>
                          {showModalEdit ? (
                            <EditRoom
                              _handleCloseModalEdit={_handleCloseModalEdit}
                              room={room}
                              updateRoom={() => updateRoom(room)}
                            />
                          ) : null}
                        </button>
                        <button
                          onClick={() => removeRoom(room.id)}
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
