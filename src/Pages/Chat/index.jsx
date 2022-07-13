import React from 'react'
import NavBar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import pic1 from "../../Assets/User3.png"
import pic2 from "../../Assets/User2.png"
import { GET_CHATS, INSERT_ROOM_CHAT, GET_ROOM_CHAT } from '../../GraphQL/chat/queries';
import { FaSignOutAlt, FaChartLine } from "react-icons/fa";
import { useState } from 'react';
// Apollo Client
import { useLazyQuery, useMutation, useSubscription } from '@apollo/client';
import { useEffect } from 'react';

import Swal from "sweetalert2";

const Chat = () => {
  const { data, loading, error } = useSubscription(GET_CHATS, { variables: { from: "Yovanta" } });
  // console.log(data);
  const [friend, setFriend] = useState([
    {
      user: "Yovanta",
      message: "hii",
    },
    {
      user: "Vina",
      message: "haloo",
    }
  ]);
  const [room, setRoom] = useState({
    roomId: "",
    user: "Dimas",
    friend: "",
  });
  const [insertRoom, { loading: loadingInsertRoom }] = useMutation(INSERT_ROOM_CHAT, {
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log('Terjadi error di mutasi insert', { error });
    }
  });

  const cekRoomExist = (data) => {
    const cek = data.filter((item) => {
      return item.user1 === room.user && item.user2 === room.friend;
    });

    if (cek.length > 0) {
      console.log("ini cek", cek);
      setRoom({ ...room, roomId: cek[0].id_room });

      // cek.map((item) => {
      // });
    } else {
      console.log("tidak ada");
    }
    console.log('setelah cek ada isinya', room);
  }


  const [getRoomChat, { data: dataRoom, loading: loadingIdUpdate, refetch }] = useLazyQuery(GET_ROOM_CHAT, {
    onCompleted: (dataRoom) => {
      cekRoomExist(dataRoom.kanbo_chat_roomChat);
    },
    onError: (error) => {
      console.log('Terjadi error di getDataUpdate lazyQuery', { error });
    }
  });
  console.log('ini data room', dataRoom)
  const tambahRoom = () => {
    // console.log(room);
    insertRoom({
      variables: {
        user1: room.user,
        user2: room.friend,
      }
    });
  }
  const getData = () => {
    if (!dataRoom) {
      getRoomChat();
      console.log("ini data room")
    } else {
      refetch();
      console.log("refetch");
    }
  };
  // console.log(data.kanbo_chat_chat);
  // if (error) {
  //   console.log(error)
  // }
  const getClick = (user) => {
    setRoom({ ...room, friend: user });

    Swal.fire({
      title: "Yakin logout?",
      text: "Jika ingin masuk silahkan login kembali!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        getData();
        Swal.fire("Berhasil!", "success");
      }
    });
  }
  useEffect(() => {
    return console.log('ini room', room)
  }, []);
  // console.log(cek)
  // console.log(room);

  return (
    <div className='flex h-screen'>
      <Sidebar />
      <NavBar />
      <div className='basis-5/6 pl-6'>
        <div className='px-4 py-4 mt-20'>
          <div className="basis-full h-screen container basis-full flex-row bg-primary-white rounded">
            <div className='p-6 container '>
              <div className='flex basis-full h-100 border-2 border-gray-400 rounded'>
                <div className='basis-1/3 border-r-2'>
                  <div className="container flex-col">
                    <div className='m-10'>
                      Search
                    </div>
                    <div className='flex flex-col'>
                      {
                        friend.map((item, index) => {
                          return (
                            <div onClick={() => { getClick(item.user) }} className='chat flex p-4'>
                              <img src={pic2} alt="room" className='rounded-full mr-2 h-14' />
                              <div className='container flex-col self-center'>
                                <div className='flex justify-between'>
                                  <span><b>{item.user}</b></span>
                                  <span className='text-primary-gray'>17 Jun</span>
                                </div>
                                <div className='flex justify-between'>
                                  <span className='text-sm text-primary-gray'>{item.message}</span>
                                  {/* <span className='px-1 text-primary-blue bg-secondary-softblue rounded-full'>2</span> */}
                                </div>
                              </div>
                            </div>
                          )
                        }
                        )
                      }

                    </div>
                  </div>
                </div>
                <div className='basis-2/3 relative'>
                  {
                    loadingIdUpdate || loadingInsertRoom ? <h1>Loading</h1> :
                      room.roomId !== "" ? (
                        <>
                          {
                            <span>{room.roomId}</span>
                          }
                          <div className='border-b-2'>
                            <div className='m-6 flex'>
                              <img src={pic1} alt="room" className='rounded-full mr-2 h-14' />
                              <div className='container flex-col self-center'>
                                <span><b>Samantha Rachel</b></span>
                                <span className='text-sm text-primary-gray'>@samawa</span>
                              </div>
                            </div>
                          </div>
                          <div style={{ height: "540px" }} className='container flex-col overflow-auto pb-8'>
                            {/* <div className='my-8 container justify-center'>
                      <span className='text-center py-1 px-3 border-2 rounded-full'>
                        Fri, 18 Jun
                      </span>
                    </div> */}
                            <div className='container p-4 flex-col'>
                              <div className='flex'>
                                <div className='max-w-xl p-4 bg-secondary-softblue rounded'>
                                  <span>
                                    <b>Samantha Rachel</b>
                                  </span>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                  </p>
                                </div>
                              </div>
                              <div className='flex mt-8 justify-end'>
                                <div className='max-w-xl p-4 bg-secondary-softblue rounded'>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                  </p>
                                </div>
                              </div>
                              <div className='flex mt-8 justify-end'>
                                <div className='max-w-xl p-4 bg-secondary-softblue rounded'>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                  </p>
                                </div>
                              </div>
                              <div className='flex mt-8 justify-end'>
                                <div className='max-w-xl p-4 bg-secondary-softblue rounded'>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                  </p>
                                </div>
                              </div>
                              <div className='flex mt-8 justify-end'>
                                <div className='max-w-xl p-4 bg-secondary-softblue rounded'>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                  </p>
                                </div>
                              </div>
                              <div className='flex mt-8'>
                                <div className='max-w-xl p-4 bg-secondary-softblue rounded'>
                                  <span>
                                    <b>Samantha Rachel</b>
                                  </span>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <form className="container absolute bottom-0 left-0 right-0 bg-primary-blue py-3 px-4">
                            <input className=' bg-secondary-softblue w-full py-1 px-4 rounded' type="text" placeholder='123' />
                            <div className='ml-4' >
                              <button className='py-1 px-4 rounded ' style={{ background: "white" }}>
                                Send
                              </button>
                            </div>
                          </form>
                        </>) : (<span>isi kosong</span>)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Chat;