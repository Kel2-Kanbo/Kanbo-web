import React, { useState } from "react";
import Button from "../Button";
import ModalReplyReview from "../ModalReplyReview";

export default function TableReview(props) {
  const { review, replyReviews } = props;
  const [showModal, setShowModal] = useState(false);

  const _handleOpenModal = () => {
    setShowModal(true);
  };
  const _handleCloseModal = () => {
    setShowModal(false);
  };

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
                    No.Order
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    Username
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    Room booked
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    Reviews
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-textColor-black px-6 py-4 text-left"
                  >
                    Reply Reviews
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {review?.map((review) => ( */}
                <tr className="odd:bg-secondary-softblue text-primary-gray">
                  <td className="px-6 py-4 whitespace-no-wrap">
                    {review.noOrder} 222
                  </td>
                  <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                    {review.userName} anjelina12
                  </td>
                  <td className="text-base text-textColor-blackThin py-4 whitespace-nowrap">
                    {/* {review.roomBooked?.map((roomBooked) => ( */}
                    <div className="flex justify-between w-full items-center">
                      <img src={""} alt="" />
                      Gambar
                      <div className="flex flex-col">
                        <span key={""}>{""} RoomA</span>
                        <span>{""}alamat</span>
                      </div>
                    </div>
                    {/* ))} */}
                  </td>
                  <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
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
                      onClick={_handleOpenModal}
                    >
                      Reply
                    </Button>
                      </div>
                  </td>
                </tr>
                {/* ))} */}
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
