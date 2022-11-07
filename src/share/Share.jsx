import React from "react";

const Share = () => {
  return (
    <div>
      <div className="  bg-white m-3 p-2 rounded-md shadow-sm shadow-gray-100">
        <div className="flex space-x-4  px-4">
          <img
            className="w-14 h-12  rounded-full object-cover"
            src="https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/person/1.jpeg"
            alt="profile"
          />
          <input
            type="text"
            placeholder=" what's in your mind ??"
            className=" focus:outline-none border-none  w-full py-1"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Share;
