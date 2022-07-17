import React from "react";
import NavBar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Loading from "../../Components/Loading/LoadingSvg";
import pic1 from "../../Assets/User3.png";
import pic2 from "../../Assets/User2.png";
import Message from "../../Assets/message.png";
import {
  GET_ALL_CHATS,
  INSERT_CHAT,
  GET_ROOM_CHAT,
} from "../../GraphQL/chat/queries";
import { useState } from "react";
// Apollo Client
import { useMutation, useSubscription } from "@apollo/client";
import { useEffect } from "react";
import SearchNavbar from "../../Components/SearchNavbar";

const Chat = () => {
  const { data: dataChat, loading } = useSubscription(GET_ALL_CHATS);
  const { data: dataRoom, loading: loadingRoomChat } =
    useSubscription(GET_ROOM_CHAT);

  // console.log(data);
  const [friend, setFriend] = useState([
    {
      user: "Yovanta",
      message: "hii",
    },
    {
      user: "Vina",
      message: "haloo",
    },
  ]);
  const [typing, setTyping] = useState("");
  const [room, setRoom] = useState({
    roomId: "",
    user: "Dimas",
    friend: "",
  });
  const [roomChat, setRoomChat] = useState([]);
  const [insertChat, { loading: loadingInsertChat }] = useMutation(
    INSERT_CHAT,
    {
      onCompleted: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.log("Terjadi error di mutasi insert", { error });
      },
    }
  );

  const getClick = (user) => {
    setRoom({ ...room, friend: user });
  };

  //search
  const [searchValue, setSearchValue] = useState("");
  const _handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  console.log(searchValue);

  useEffect(() => {
    if (dataRoom) {
      dataRoom.kanbo_chat_roomChat.filter((item) => {
        if (
          (item.user1 === room.user && item.user2 === room.friend) ||
          (item.user1 === room.friend && item.user2 === room.user)
        ) {
          return setRoom({ ...room, roomId: item.id_room });
        }
      });
      if (dataChat) {
        const newRoomChat = dataChat.kanbo_chat_chat.filter((item) => {
          return item.id_room === room.roomId;
        });
        setRoomChat(newRoomChat);
      }
    }
  }, [dataRoom, dataChat, room]);
  const sendChat = (e) => {
    e.preventDefault();
    insertChat({
      variables: {
        id_room: room.roomId,
        user: room.user,
        msg: typing,
      },
    });
    setTyping("");
  };
  return (
    <div className="flex h-full">
      <Sidebar />
      <NavBar />
      <div className="basis-5/6 pl-6">
        <div className="px-4 py-4 mt-20">
          <div className="basis-full h-screen container basis-full flex-row bg-primary-white rounded">
            <div className="p-6 container ">
              <div
                className="flex basis-full h-100 border-2 rounded"
                style={{ borderColor: "#D7D7D7" }}
              >
                <div
                  className="basis-1/3 border-r-2"
                  style={{ borderColor: "#D7D7D7" }}
                >
                  <div className="container flex-col px-2">
                    <SearchNavbar _handleSearch={_handleSearch} />
                    <div className="flex flex-col">
                      {friend
                        ?.filter((item) => {
                          return item.user
                            .toLowerCase()
                            .includes(searchValue.toLowerCase());
                        })
                        .map((item, index) => {
                          return (
                            <div
                              onClick={() => {
                                getClick(item.user);
                              }}
                              className="chat hover:bg-secondary-softblue flex p-4"
                            >
                              <img
                                src={pic2}
                                alt="room"
                                className="rounded-full mr-2 h-14"
                              />
                              <div className="container flex-col self-center">
                                <div className="flex justify-between">
                                  <span>
                                    <b>{item.user}</b>
                                  </span>
                                  <span className="text-primary-gray">
                                    17 Jun
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-primary-gray">
                                    {item.message}
                                  </span>
                                  {/* <span className='px-1 text-primary-blue bg-secondary-softblue rounded-full'>2</span> */}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div className="basis-2/3 relative">
                  {loadingRoomChat || loading ? (
                    <Loading></Loading>
                  ) : room.roomId !== "" ? (
                    <>
                      <div
                        className="border-b-2"
                        style={{ borderColor: "#D7D7D7" }}
                      >
                        <div className="m-6 flex">
                          <img
                            src={pic1}
                            alt="room"
                            className="rounded-full mr-2 h-14"
                          />
                          <div className="container flex-col self-center">
                            <span>
                              <b>{room.friend}</b>
                            </span>
                            <span className="text-sm text-primary-gray">{`@${room.friend}`}</span>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{ height: "540px" }}
                        className="container flex-col overflow-auto pb-8"
                      >
                        {/* <div className='my-8 container justify-center'>
                      <span className='text-center py-1 px-3 border-2 rounded-full'>
                        Fri, 18 Jun
                      </span>
                    </div> */}
                        <div className="container p-4 flex-col">
                          {roomChat.map((item, index) => (
                            <div
                              className={
                                item.user === room.user
                                  ? "flex mt-8 justify-end"
                                  : "flex mt-8 "
                              }
                            >
                              <div
                                div
                                className="max-w-xl p-4 bg-secondary-softblue rounded"
                              >
                                <span>
                                  <b>{item.user}</b>
                                </span>
                                <p>{item.msg}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <form
                        onSubmit={sendChat}
                        className="container absolute bottom-0 left-0 right-0 bg-primary-blue py-3 px-4"
                      >
                        <input
                          className="bg-secondary-softblue w-full py-1 px-4 rounded"
                          type="text"
                          placeholder="123"
                          value={typing}
                          onChange={(e) => {
                            setTyping(e.target.value);
                          }}
                        />
                        <div className="ml-4">
                          <button
                            type="submit"
                            className="py-1 px-4 rounded "
                            style={{ background: "white" }}
                          >
                            Send
                          </button>
                        </div>
                      </form>
                    </>
                  ) : (
                    <div className="h-full flex align-center">
                      <h1 className="self-center flex justify-center">
                        <img src={Message} className="w-2/3" alt="" />
                      </h1>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
