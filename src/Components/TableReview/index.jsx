import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Button from "../Button";
import ModalReplyReview from "../ModalReplyReview";
import SearchNavbar from "../SearchNavbar";

export default function TableReview(props) {
  const { review, replyReviews, tabelHeader } = props;
  const [showModal, setShowModal] = useState(false);
  const _handleOpenModal = () => {
    setShowModal(true);
  };
  const _handleCloseModal = () => {
    setShowModal(false);
  };

  const PER_PAGE = 5;
  const setDataReview = (review) => {
    console.log(review);
  };

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
    setData(review);
  }, [review]);
  console.log(data);

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
                } of ${review.length}`}</p>
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
            <table className="table-fixed min-w-fit">
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
                {review
                  ?.filter((item) => {
                    return item.username
                      .toLowerCase()
                      .includes(searchValue.toLowerCase());
                  })
                  .slice(offset, offset + PER_PAGE)
                  .map((review, reviewIdx) => (
                    <tr className="odd:bg-secondary-softblue text-primary-gray">
                      <td className="px-6 py-4 whitespace-no-wrap">
                        {review.noOrder} 222
                      </td>
                      <td className="text-base text-textColor-blackThin px-6 py-4 ">
                        {review.userName} anjelina12
                      </td>
                      <td className="text-base text-textColor-blackThin py-2">
                        {/* {review.roomBooked?.map((roomBooked) => ( */}
                        <div className="flex justify-between w-full items-center">
                          <img src={""} alt="" />
                          Gambar
                          <div className="flex flex-col">
                            <span key={""}>{""} RoomA</span>
                            <span>{""}alamat</span>
                          </div>
                        </div>
                      </td>
                      <td className="text-base text-textColor-blackThin px-6 py-4">
                        {/* {review.reviews?.map((reviewRoom) => ( */}
                        <div className="w-full">
                          <span class="flex items-center">
                            <svg
                              className="fill-primary-orange stroke-primary-orange w-4 h-4"
                              fill="none"
                              stroke="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg
                              className="fill-primary-orange stroke-primary-orange w-4 h-4"
                              fill="none"
                              stroke="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg
                              className="fill-primary-orange stroke-primary-orange w-4 h-4"
                              fill="none"
                              stroke="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg
                              className="fill-primary-orange stroke-primary-orange w-4 h-4"
                              fill="none"
                              stroke="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg
                              className="stroke-primary-orange w-4 h-4"
                              fill="none"
                              stroke="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                          </span>
                          <p>ini Review</p>
                          <p>17 July 2022</p>
                        </div>
                        {/* ))} */}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center  w-3/4">
                          <Button
                            type="button"
                            className="text-primary-blue bg-primary-white font-medium text-xs leading-tight uppercase rounded"
                            onClick={{ _handleOpenModal }}
                          >
                            Reply
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {showModal ? (
            <ModalReplyReview
              showModal={showModal}
              handleClose={_handleCloseModal}
              review={review}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
