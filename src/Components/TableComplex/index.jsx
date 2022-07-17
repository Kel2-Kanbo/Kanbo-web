import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import SearchNavbar from "../SearchNavbar";
import ButtonIconDelete from "../ButtonIconDelete";
import ButtonIconEdit from "../ButtonIconEdit";
import { Link } from "react-router-dom";

const PER_PAGE = 5;

export default function TableComplex(props) {
  const { complex, removeComplex, tabelHeader } = props;
  const setDataComplex = (complex) => {
    console.log(complex);
  };
  let angka = 0;

  //search
  const [searchValue, setSearchValue] = useState("");
  const _handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  console.log(searchValue);

  //pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  function handlePageClick({ selected: selectedPage }) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;
  console.log("offset", offset);

  const pageCount = Math.ceil(data.length / PER_PAGE);

  useEffect(() => {
    setData(complex);
  }, [complex]);

  return (
    <div>
      <div className="flex flex-col">
        <div className="inline-block min-w-full p-2">
          <div className="overflow-hidden">
            <div className="flex flex-row justify-between">
              <SearchNavbar _handleSearch={_handleSearch} />
              <div className="flex gap-2 items-center">
                <p className="text-primary-gray2">{`${offset + 1} - ${
                  offset + PER_PAGE
                } of ${complex.length}`}</p>
                <ReactPaginate
                  previousLabel="<"
                  nextLabel=">"
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName="pagination"
                  previousLinkClassName="pagination__link"
                  nextLinkClassName="pagination__link"
                  disabledClassName="pagination__link--disabled"
                  activeClassName="pagination__link--active"
                />
              </div>
            </div>
            <table className="min-w-full">
              <thead className="bg-white">
                <tr>
                  {tabelHeader.map((item) => (
                    <th
                      scope="col"
                      className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {complex
                  .filter((item) => {
                    return item.complex_name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase());
                  })
                  .slice(offset, offset + PER_PAGE)
                  .map((complex, complexIdx) => (
                    <tr
                      key={complexIdx}
                      className="odd:bg-secondary-softblue text-primary-gray"
                    >
                      <td className="px-6 py-4 whitespace-no-wrap">
                        {(angka = angka + 1)}
                      </td>
                      <td className="text-base text-textColor-blackThin px-6 py-4">
                        {complex.complex_name}
                      </td>
                      <td className="text-base text-textColor-blackThin px-6 py-4">
                        {complex.address}
                      </td>
                      <td className="text-base text-textColor-blackThin px-6 py-4">
                        {complex.city_name}
                      </td>
                      <td className="text-base text-textColor-blackThin px-6 py-4">
                        {complex.district_name}
                      </td>
                      <td className="text-base text-textColor-blackThin  px-6 py-4">
                        {complex.numOfBuilding}
                      </td>
                      <td className="flex justify-center gap-8 px-6 py-4 whitespace-nowrap">
                        <button>
                          <Link
                            to={`/update-complex/${complex.id}`}
                            state={{ complex }}
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
          </div>
        </div>
      </div>
    </div>
  );
}