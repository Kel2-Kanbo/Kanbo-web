import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import EditComplex from "../EditComplex";
import ButtonIconDelete from "../ButtonIconDelete";
import ButtonIconEdit from "../ButtonIconEdit";

export default function TableComplex(props) {
  const { complex, removeComplex, updateComplex } = props;
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
                      No
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Complex Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      City
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      District
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      Building
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-textColor-black px-6 py-4 text-center"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {complex?.map((complex) => (
                    <tr class="bg-secondary-blue">
                      <td class="px-6 py-4 whitespace-no-wrap">
                        {
                          angka = angka + 1
                        }
                      </td>
                      <td class="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {complex.complexName}
                      </td>
                      <td class="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {complex.complexAddress}
                      </td>
                      <td class="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {complex.city}
                      </td>
                      <td class="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {complex.district}
                      </td>
                      <td class="text-sm text-textColor-blackThin font-light px-6 py-4 whitespace-nowrap">
                        {complex.building}
                      </td>
                      <td class="flex justify-center gap-8 px-6 py-4 whitespace-nowrap">
                        <button onClick={() => updateComplex(complex)}>
                          <ButtonIconEdit onClick={_handleOpenModalEdit} />
                          {showModalEdit ? (
                            <EditComplex
                              _handleCloseModalEdit={_handleCloseModalEdit}
                              complex={complex}
                              updateComplex={() => updateComplex(complex)}
                            />
                          ) : null}
                        </button>
                        <button onClick={() => removeComplex(complex.id)}>
                          <ButtonIconDelete/>
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
