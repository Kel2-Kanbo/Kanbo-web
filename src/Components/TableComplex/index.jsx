import React, { useState } from "react";

import EditComplex from "../EditComplex";
import ButtonIconDelete from "../ButtonIconDelete";
import ButtonIconEdit from "../ButtonIconEdit";
import UpdateComplex from "../../Pages/UpdateComplex";
import { Link } from "react-router-dom";

export default function TableComplex(props) {
  const { complex, removeComplex, updateComplex, tabelHeader } = props;
  const setDataComplex = (complex) => {
    console.log(complex);
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
                  {tabelHeader.map((item) => (
                    <th scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                      {item}
                    </th>
                  ))}
                  
                </tr>
              </thead>
              <tbody>
                {complex?.map((complex, complexIdx) => (
                  <tr
                    key={complexIdx}
                    className="odd:bg-secondary-softblue text-primary-gray"
                  >
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
                      {complex.province_name}
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
                      <button>
                        <Link
                          to= {`/update-complex/${complex.id}`}
                          state={{complex}}
                          key={complexIdx}
                          onClick={() => setDataComplex(complex)}
                        >
                          <ButtonIconEdit />
                        </Link>
                      </button>
                      <button onClick={() => removeComplex(complex.id)}>
                        <ButtonIconDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* {showModalEdit ? (
              <EditComplex
                handleClose={_handleCloseModalEdit}
                updateComplex={updateComplex}
                complex={complex}
              />
            ) : null} */}
          </div>
        </div>
      </div>
    </div>
  );
}
