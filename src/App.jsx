import { useState } from "react";
import SideBar from "./LeftPage/SideBar";
import MiddlePage from "./MiddlePage/MiddlePage";
import Navbar from "./Navbar/Navbar";
import RightPage from "./RightPage/RightPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-400">
      <Navbar />
      <div className="flex  bg-blue-400 h-40">
        <SideBar></SideBar>
        <MiddlePage></MiddlePage>
        <RightPage></RightPage>
      </div>
    </div>
  );
}

export default App;
