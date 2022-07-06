import React, {useState, useEffect} from "react";
import api from "../../API/Complex"

import Button from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import TableReview from "../../Components/TableReview";

const Review = () => {

    const [review, setReview] = useState([]);

    return (
    <div className='flex h-screen bg-secondary-softblue'>
        <Sidebar />
        <Navbar />
      <div className='basis-5/6'>
        <div className="px-4 py-4 mt-20">
          <h1 className="text-3xl font-bold mb-1">MANAGE REVIEW</h1>
          <div className="flex justify-end">
            <div className="w-auto">
            </div>
          </div>
          <div className="bg-primary-white items-center rounded mt-4">
            <TableReview
            review={review}
            />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Review;