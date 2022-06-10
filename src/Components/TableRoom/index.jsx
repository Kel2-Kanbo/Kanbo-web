import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import EditComplex from "../EditComplex";

export default function TableComplex(props) {
  const { room, removeRoom } = props;
  const [showModalEdit, setShowModalEdit] = useState(false);
  const _handleCloseModalEdit = () => {
    setShowModalEdit(false);
  };
  const _handleOpenModalEdit = () => {
    setShowModalEdit(true);
  };

  return (
    <div>
      <div class="flex flex-col">
        <div>
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-white">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Picture
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Room Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Floor
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Room Item
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Rate per day
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {room?.map((room) => (
                    <tr class="bg-secondary-blue">
                      <td class="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        <img src={room.picture} alt="room" width='32px'/>
                      </td>
                      <td class="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {room.roomName}
                      </td>
                      <td class="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {room.floor}
                      </td>
                      <td class="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {room.roomItem}
                      </td>
                      <td class="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {room.roomPrice}
                      </td>
                      <td class="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {room.status}
                      </td>
                      <td class="flex justify-around px-6 py-4 whitespace-nowrap">
                        <button onClick={() => removeRoom(room.id)}> 
                          <RiDeleteBin5Line />
                        </button>
                        <button>
                          <FiEdit/>
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
