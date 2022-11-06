import { MdRssFeed, MdGroups } from "react-icons/md";
import { BsChatSquareTextFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";

function SideBar() {
  return (
    <div className="w-1/4 bg-gray-100 h-screen ">
      <div className="flex space-x-2 m-4 items-center">
        <MdRssFeed />
        <h1>feed</h1>
      </div>

      <div className="flex space-x-2 m-4 items-center">
        <BsChatSquareTextFill />
        <h1>chats</h1>
      </div>

      <div className="flex space-x-2 m-4 items-center">
        <FaVideo />
        <h1>Videos</h1>
      </div>

      <div className="flex space-x-2 m-4 items-center">
        <MdGroups />
        <h1>groups</h1>
      </div>
    </div>
  );
}

export default SideBar;
