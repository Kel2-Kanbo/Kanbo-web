import React, { useState } from "react";

export default function TableReview(props){

    const {review, replyReviews} = props;

    return(
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
                </tr >
              </thead >
              <tbody>
                {review?.map((review) => (
                  <tr className="odd:bg-secondary-softblue text-primary-gray">
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {review.noOrder}
                    </td>
                    <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                      {review.userName}
                    </td>
                    <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                      {review.roomBooked}
                    </td>
                    <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                      {review.reviews}
                    </td>
                    <td className="flex justify-center gap-8 px-6 py-4 whitespace-nowrap">
                      <button onClick={() => replyReviews(review.id)}>
                        Reply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table >
          </div >
        </div >
      </div >
    </div >
    );
}