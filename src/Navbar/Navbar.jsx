import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillBell } from "react-icons/ai";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-blue-500 flex  px-10 py-4 justify-around items-center top-0 sticky">
      <div className=" font-semibold text-3xl text-white  w-72 ">
        Lamasocial
      </div>
      <div className="flex bg-white   w-5/12  px-3 py-2 rounded-3xl items-center ">
        <AiOutlineSearch className="text-lg mr-3" />
        <input
          className=" border-none focus:outline-none w-full "
          placeholder="Search for friend,post or video"
        />
      </div>
      <div className=" flex w-72  justify-center space-x-4 ">
        <span className=" text-white text-xl cursor-pointer ">Homepage</span>
        <span className=" text-white text-xl cursor-pointer">Timeline</span>
      </div>
      <div className="flex space-x-4  w-80 justify-center items-center">
        <FaUserAlt className=" cursor-pointer text-white text-2xl" />
        <BsFillChatLeftDotsFill className=" cursor-pointer text-3xl text-white" />
        <AiFillBell className="cursor-pointer text-white text-3xl" />
      </div>
      <div className="w-32 flex justify-end">
        <img
          src="https://images.unsplash.com/photo-1663024718100-9250a83a1db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          className="w-10 h-10 rounded-full cursor-pointer object-cover"
        />
      </div>
    </div>
  );
};

export default Navbar;
