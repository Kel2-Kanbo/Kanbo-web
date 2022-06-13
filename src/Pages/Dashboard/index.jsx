// import React from 'react'
// import NavBar from '../../Components/Navbar';
// import Sidebar from '../../Components/Sidebar';

// function Dashboard() {
//   return (
//     <div className=' flex'>
//         <Sidebar/>
//           <NavBar/>
//           <div className='h-screen flex-1 '>
//             <div className='bg-secondary-softblue'>
//               <div className="px-6 py-12 lg:my-12 md:px-12 text-primary-gray text-center lg:text-left">
//                 <h1 className='text-2xl'>Dashboard</h1>
//                 <div className="container mx-auto xl:px-10">
//                   <div className="grid lg:grid-cols-2 gap-12 flex items-center">
//                     <div className="mt-12 lg:mt-0">
//                       <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">The best offer <br /><span className="text-blue-600">for your business</span></h1>
//                       <a className="inline-block px-7 py-3 mr-2 bg-primary-blue text-primary-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Create Building</a>
//                       {/* <a className="inline-block px-7 py-3 bg-transparent text-primary-blue font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a> */}
//                     </div>
//                     <div className="mb-12 lg:mb-0">
//                       <img
//                         src="https://mdbootstrap.com/img/new/standard/city/017.jpg"
//                         className="w-full rounded-lg shadow-lg"
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className=" px-6 py-12 lg:my-12 md:px-12 text-primary-gray text-center lg:text-left">
//                 <div className="container mx-auto xl:px-10">
//                   <div className="grid lg:grid-cols-2 gap-12 flex items-center">
//                     <div className="mt-12 lg:mt-0">
//                       <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">The best offer <br /><span className="text-blue-600">for your business</span></h1>
//                       <a className="inline-block px-7 py-3 mr-2 bg-primary-blue text-primary-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Create Building</a>
//                       {/* <a className="inline-block px-7 py-3 bg-transparent text-primary-blue font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a> */}
//                     </div>
//                     <div className="mb-12 lg:mb-0">
//                       <img
//                         src="https://mdbootstrap.com/img/new/standard/city/017.jpg"
//                         className="w-full rounded-lg shadow-lg"
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//     </div>
//   )
// }

// export default Dashboard;

import React from 'react'
import NavBar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import { FaSignOutAlt, FaChartLine } from "react-icons/fa";
import { useState } from 'react';

const Dashboard = () => {
  const [table, setTable] = useState([
    {
      room: "Room A",
      customerName: "Dimas Seto",
      status: "Paid",
    },
    {
      room: "Room A",
      customerName: "Dimas Seto",
      status: "Unpaid",
    },
    {
      room: "Room A",
      customerName: "Dimas Seto",
      status: "Paid",
    },
    {
      room: "Room A",
      customerName: "Dimas Seto",
      status: "Unpaid",
    },
  ])
  return (
    <div className='flex h-screen bg-secondary-softblue'>
        <Sidebar />
        <NavBar />
      <div className='basis-5/6 '>
        <div className='px-4 py-4 mt-20'>
          <div className="container basis-full flex-row">
            <div className="basis-1/4 flex mr-3 items-center justify-center rounded bg-primary-white p-2">
              <div className='basis-1/5'>
                <div className='bg-secondary-softblue p-3 mr-3 rounded-full'>
                  <FaSignOutAlt className='text-3xl text-primary-blue' />
                </div>
              </div>
              <div className='basis-4/5'>
                <h2 className='text-sm text-primary-gray'>New booked room</h2>
                <h1 className='text-xl font-bold'>50</h1>
                <span className='text-xs text-primary-blue'>5 new booked room today!</span>
              </div>
            </div>
            <div className="basis-1/4 flex mr-3 items-center justify-center rounded bg-primary-white p-2">
              <div className='basis-1/5'>
                <div className='bg-secondary-green p-3 mr-3 rounded-full'>
                  <FaSignOutAlt className='text-3xl text-primary-green' />
                </div>
              </div>
              <div className='basis-4/5'>
                <h2 className='text-sm text-primary-gray'>Available Room</h2>
                <h1 className='text-xl font-bold'>50</h1>
                <span className='text-xs text-primary-green'>5 new room added!</span>
              </div>
            </div>
            <div className="basis-1/4 flex mr-3 items-center justify-center rounded bg-primary-white p-2">
              <div className='basis-1/5'>
                <div className='bg-secondary-mossgreen p-3 mr-3 rounded-full'>
                  <FaSignOutAlt className='text-3xl text-primary-mossgreen' />
                </div>
              </div>
              <div className='basis-4/5'>
                <h2 className='text-sm text-primary-gray'>Check in</h2>
                <h1 className='text-xl font-bold'>50</h1>
                <span className='text-xs text-primary-mossgreen'>5 reservations incoming!</span>
              </div>
            </div>
            <div className="basis-1/4 flex items-center justify-center rounded bg-primary-white p-2">
              <div className='basis-1/5'>
                <div className='bg-secondary-orange p-3 mr-3 rounded-full'>
                  <FaSignOutAlt className='text-3xl text-primary-orange' />
                </div>
              </div>
              <div className='basis-4/5'>
                <h2 className='text-sm text-primary-gray'>Check out</h2>
                <h1 className='text-xl font-bold'>50</h1>
                <span className='text-xs text-primary-orange'>5 reservations outgoing!</span>
              </div>
            </div>
          </div>
          <div className="container mt-4">
            <div className='flex items-center basis-1/2 p-4 bg-primary-white rounded mr-3'>
              <div className='basis-1/2 h-40'>
                <h1 className='text-2xl text-primary-gray mb-2'>Revenue total</h1>
                <h2 className='text-3xl mb-3'>+ Rp 3.000</h2>
                <p className='text-sm font-bold text-primary-green'>Last Transaction</p>
                <p className='text-sm mt-6 text-primary-blue'>View Details</p>
              </div>
              <div className='basis-1/2'>
                <h1 className=' text-4xl font-bold'>Rp 3.000.000</h1>
              </div>
            </div>
            <div className='basis-1/2 p-4 bg-primary-white rounded'>
              <div className='flex justify-between mb-5'>
                <h1 className='text-2xl text-primary-gray mb-2'>Revenue total per building</h1>
                <div className='text-end'>
                  <select className='p-2 bg-primary-white rounded border' name="" id="">
                    <option value="">Building no 1</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-col'>
                <h1 className=' text-4xl font-bold mb-7'>Rp 3.000.000</h1>
                <div className='flex text-sm font-bold text-primary-gray3'>
                  <div className='flex items-center px-3 py-2 bg-secondary-green rounded-full'>
                    <FaChartLine className='mr-2 text-base text-primary-green' />
                    <span className='text-base text-primary-green'>+ 8%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 p-4 bg-primary-white rounded">
            <h1 className='text-xl font-bold mb-6'>Room Tables</h1>
            <table className="text-center w-full bg-primary-white drop-shadow-md">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Data Room</th>
                  <th>Customer Name</th>
                  <th>Transaction Status</th>
                </tr>
              </thead>
              <tbody >
                {
                  table.map((tab, tabIdx) => {
                    let angka = 1;
                    return (
                      <tr className='odd:bg-secondary-softblue text-primary-gray'>
                        <td>{tabIdx += 1}</td>
                        <td>{tab.room}</td>
                        <td>{tab.customerName}</td>
                        <td className={tab.status === "Paid" ? "text-primary-green" : "text-primary-red"}>{tab.status}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Dashboard;