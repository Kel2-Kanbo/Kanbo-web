import React, { useEffect , useState } from "react";
import ReactPaginate from "react-paginate";
import { getComplex } from "../../API/ApiFetch";
import { Link } from "react-router-dom";

import "./style.css";

import SearchNavbar from "../SearchNavbar";


export default function Pagination() {
  const PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 10;

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `http://3.80.97.57/v2`
        // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      // console.log(Math.ceil(total/12));
      setItems(data);
    };

    getComments();
  }, [limit]);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `http://3.80.97.57/v2`
      // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);

    setItems(commentsFormServer);
    // scroll to the top
    //window.scrollTo(0, 0)
  };


  // function handlePageClick({ selected: selectedPage }) {
  //   console.log("selectedPage ", selectedPage);
  //   setCurrentPage(selectedPage);
  // }

  const offset = currentPage * PER_PAGE;
  console.log("offset ", offset);

  const currentPageData = data.slice(offset, offset + PER_PAGE).map((item) => {
    return item;
  });
  console.log("currentPageData", currentPageData);

  // const pageCount = Math.ceil(data.length / PER_PAGE);

  const _handleSearch = async (e) => {
    e.preventDefault();
    return await getComplex().then((res) => {
      setData(res);
    });
  };

  return (
    <div className="flex gap-4 justify-between items-center">
      <SearchNavbar value={value} onChange={(e) => setValue(e.target.value)} />
      {currentPageData}

      <div className="flex gap-2 items-center">
        <p>Sort by </p>
        <select className="p-2 px-4 bg-primary-white rounded-md">
          <option value="">All</option>
        </select>
      </div>

      <div className="flex gap-2 items-center">
        <p className="text-primary-gray2">
          {`${offset + 1} - ${ offset + PER_PAGE} of ${data.length}`}
        </p>

        <ReactPaginate
          previousLabel={"< previous"}
          nextLabel={"next >"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}
