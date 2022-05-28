import React from "react";
import {BiFoodMenu} from "react-icons/bi"
import { useNavigate } from "react-router-dom";
function Banner(props) {
const navigate = useNavigate();
  return (
    <div className="w-full h-screen mt-[10vh] relative">
      <div className="w-full h-full bg-center bg-cover bg-no-repeat bg-banner blur-[2px]" />
      <div className="text-white absolute top-1/2 left-1/4 p-4 text-6xl uppercase">
        choose your favorite food
        <div className="flex justify-center items-center">
          <button className="btn-banner" onClick={() => navigate('./menu')}>Go to Menu <BiFoodMenu /></button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
