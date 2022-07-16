import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

import SearchNavbar from "../SearchNavbar";
import Button from "../Button";
import ButtonIconDelete from "../ButtonIconDelete";
import ButtonIconEdit from "../ButtonIconEdit";
import { getBuilding } from "../../API/ApiFetch";


export default function TableBuilding(props) {
  const { building, removeBuilding, updateBuilding, tabelHeader } = props;
  const PER_PAGE = 5;
  const setDataBuilding = (building) => {
    console.log(building);
  };

  let angka = 0;

  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllBuilding();
  }, []);

  const getAllBuilding = async () => {
    try {
      await getBuilding().then((response) => {
        setData(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  function handlePageClick({ selected: selectedPage}) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }

  const offset = currentPage + PER_PAGE;
  console.log('offset', offset);

  // const currentPageData = ;

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div>
      <div className="flex flex-col mb-6">
        <div className="inline-block min-w-fit p-2">
          <div className="overflow-hidden">
            <div className="flex flex-row justify-between">
              <SearchNavbar value={value} onChange={(e) => setValue(e.target.value)} />
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
                {/* {currentPageData} */}
                { building.slice(offset, offset + PER_PAGE).map((building, buildingIdx) => (
                  <tr
                    key={buildingIdx}
                    className="odd:bg-secondary-softblue text-primary-gray "
                  >
                    <td className="text-base text-textColor-blackThin">
                      {(angka += 1)}
                    </td>
                    <td className="text-base text-textColor-blackThin">
                      <img src={building.building_image} alt="building" width="52px" />
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
                      {/* {building.description.substr(0,22)}... */}
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
