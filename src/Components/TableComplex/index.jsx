import React, { useState } from "react";

import EditComplex from "../EditComplex";
import ButtonIconDelete from "../ButtonIconDelete";
import ButtonIconEdit from "../ButtonIconEdit";

export default function TableComplex(props) {
  const { complex, removeComplex, updateComplex } = props;
  // console.log(complex)
  const [showModalEdit, setShowModalEdit] = useState(false);

  const _handleOpenModalEdit = () => {
    updateComplex(complex.id);
    setShowModalEdit(true);
  }
  const _handleCloseModalEdit = () => {
    setShowModalEdit(false);
  }

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
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    Complex Name
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    Address
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
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    Building
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
                {complex?.map((complex, complexIdx) => (
                  <tr key={complexIdx} className="odd:bg-secondary-softblue text-primary-gray">
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {(angka = angka + 1)}
                    </td>
                    <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                      {complex.complex_name}
                    </td>
                    <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                      {complex.address}
                    </td>
                    <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                      {complex.city_name}
                    </td>
                    <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                      {complex.district_name}
                    </td>
                    <td className="text-base text-textColor-blackThin  px-6 py-4 whitespace-nowrap">
                      {complex.numOfBuilding}
                    </td>
                    <td className="flex justify-center gap-8 px-6 py-4 whitespace-nowrap">
                      <button onClick={_handleOpenModalEdit}>
                        <ButtonIconEdit
                          
                        />
                      </button>
                      <button onClick={() => removeComplex(complex.id)}>
                        <ButtonIconDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table >
            {showModalEdit ? (
              <EditComplex
                handleClose={_handleCloseModalEdit}
                updateComplex={updateComplex}
                complex={complex}
              />
            ) : null}
          </div >
        </div >
      </div >
    </div >
  );
}