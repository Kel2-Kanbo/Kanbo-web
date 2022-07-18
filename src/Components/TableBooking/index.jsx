import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

import ButtonIconDelete from "../ButtonIconDelete";
import ButtonIconEdit from "../ButtonIconEdit";
import Button from "../Button";
import SearchNavbar from "../SearchNavbar";

export default function TableBooking(props) {

  const { booking, dataBooking, editBooking, removeBooking, tabelHeader } = props;

  const PER_PAGE = 5;
  const setDataBooking = (booking) => {
    console.log('ini data booking di table booking',booking);
  }

  //search
  const [searchValue, setSearchValue] = useState("");
  const _handleSearch = (e) => {
    setSearchValue(e.target.value);
  }
  console.log(searchValue);

  //pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [dataPagination, setDataPagination] = useState([]);

  function handlePageClick({ selected: selectedPage }) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;
  console.log("offset", offset);

  const pageCount = Math.ceil(dataPagination.length / PER_PAGE);
  useEffect(() => {
    setDataPagination(booking);
  }, [booking]);
  console.log(dataPagination);

  return (
    <div>
      <div className="flex flex-col mb-6">
        <div className="inline-block min-w-fit p-2">
          <div className="overflow-hidden">
            <div className="flex flex-row justify-between">
              <SearchNavbar _handleSearch={_handleSearch} />
              <div className="flex gap-2 items-center">
                <p className="text-primary-gray2">{`${offset + 1} - ${
                  offset + PER_PAGE
                } of ${booking.length}`}</p>
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
                    <th className="text-base font-medium text-textColor-black px-6 py-4 text-left">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
              {/* {room?.filter((item) => {
                    return item.room_name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase());
                  })
                  .slice(offset, offset + PER_PAGE)
                  .map((room, roomIdx) => ( */}
                {booking
                  ?.filter((item) => {
                    return item.room_name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase());
                  })
                  .slice(offset, offset + PER_PAGE)
                  .map((booking, bookingIdx) => (
                  <tr className="odd:bg-secondary-softblue text-primary-gray" key={bookingIdx} data-key={booking.booking_id}>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {booking.booking_id}
                    </td>
                    <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                      {booking.user}
                    </td>
                    <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                      {booking.room.room_name}
                    </td>
                    
                    <td className="flex justify-center gap-8 px-6 py-4 whitespace-nowrap">
                    {/* <Button>
                          <Link
                            to={`/update-booking/${booking.id}`}
                            state={{ booking }}
                            key={bookingIdx}
                            onClick={() => setDataBooking(booking)}
                          >
                            <ButtonIconEdit />
                          </Link>
                        </Button>
                      <button onClick={() => removeBooking(booking.idOrder)}>
                        <ButtonIconDelete />
                      </button> */}
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
