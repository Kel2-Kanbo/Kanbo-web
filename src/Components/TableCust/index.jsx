import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import ButtonIconDelete from "../ButtonIconDelete";
import SearchNavbar from "../SearchNavbar";

export default function TableCust(props) {
  const { customer, removeCustomer, tabelHeader } = props;

  const PER_PAGE = 5;

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
    setData(customer);
  }, [customer]);
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
                } of ${customer.length}`}</p>
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
                {customer
                  ?.filter((item) => {
                    return item.nama_customer
                      .toLowerCase()
                      .includes(searchValue.toLowerCase());
                  })
                  .slice(offset, offset + PER_PAGE)
                  .map((customer, customerIdx) => (
                    <tr className="odd:bg-secondary-softblue text-primary-gray">
                      <td className="px-6 py-4 whitespace-no-wrap">
                        {customer.nama_customer}
                      </td>
                      <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                        {customer.username}
                      </td>
                      <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                        {customer.email}
                      </td>
                      <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                        {customer.province.province_name}
                      </td>
                      <td className="text-base text-textColor-blackThin px-6 py-4 whitespace-nowrap">
                        {customer.city.city_name}
                      </td>
                      <td className="text-base text-textColor-blackThin  px-6 py-4 whitespace-nowrap">
                        {customer.district.district_name}
                      </td>
                      <td className="flex justify-center gap-8 px-6 py-4 whitespace-nowrap">
                        <button onClick={() => removeCustomer(customer.id_customer)}>
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