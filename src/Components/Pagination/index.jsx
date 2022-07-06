import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { getComplex } from "../../API/ApiFetch";

import "./style.css";

import SearchNavbar from "../SearchNavbar";

const PER_PAGE = 10;

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const getDataComplex = async () => {
    try {
      await getComplex().then((res) => {
        setData(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getAllComplexes = async () => {
      const allComplex = await getDataComplex();
      if (allComplex) {
        setData(allComplex);
        console.log(allComplex);
      }
    };
    getAllComplexes();
  }, []);

  function _handlePageClick({ selected: selectedPage }) {
    console.log("selectedPage ", selectedPage);
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;
  console.log("offset ", offset);

  const currentPageData = data.slice(offset, offset + PER_PAGE).map((item) => {
    return item;
  });
  console.log("currentPageData", currentPageData);

  const pageCount = Math.ceil(data.length / PER_PAGE);

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
        <p className="text-primary-gray2">{`${offset + 1} - ${
          offset + PER_PAGE
        } of ${data.length}`}</p>
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          pageCount={pageCount}
          onPageChange={_handlePageClick}
          containerClassName="pagination"
          previousLinkClassName="pagination__link"
          nextLinkClassName="pagination__link"
          disabledClassName="pagination__link--disabled"
          activeClassName="pagination__link--active"
        />
      </div>
    </div>
  );
}
