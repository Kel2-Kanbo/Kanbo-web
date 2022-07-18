import React, {useState, useEffect} from "react";
// import api from "../../API/Complex"

import Button from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import TableReview from "../../Components/TableReview";

import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_REVIEW } from "../../GraphQL/review/queries"; 

const Review = () => {
  // const { data, loading, error, refetch } = useQuery(GET_ALL_REVIEW);
  const { data: dataReview } = useQuery(GET_ALL_REVIEW, {
    refetchQueries: [{ query: GET_ALL_REVIEW }],
  });
  console.log(dataReview);

  const [review, setReview] = useState([]);

  useEffect(() => {
    if (dataReview) {
      setReview(dataReview?.kanbo_chat_review);
    }
  }, [dataReview]);

    const [tabelHeader ] = useState([
      "Id Review",
      "Username",
      "Room Name",
      "Name Customer",
      "Reply Reviews",
    ]);

    return (
    <div className='flex h-full bg-secondary-softblue'>
        <Sidebar />
        <Navbar />
      <div className='basis-5/6'>
        <div className="px-4 py-4 mt-20">
          <div className="flex justify-end">
            <div className="w-auto">
            </div>
          </div>
          <div className="bg-primary-white items-center rounded mt-4">
              <TableReview
              tabelHeader={tabelHeader}
              review={review}
              />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Review;