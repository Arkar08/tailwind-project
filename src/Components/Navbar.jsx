import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";


const Navbar = () => {

  const [isOpen , setIsOpen] = useState(false);
  return (
    <>
    <div className="w-full bg-white max-w-[1240px] mx-auto px-8 mt-4 border-b">
      <div className="flex justify-between items-center text-center w-full">
        <h1 className="text-2xl font-bold uppercase p-4">Noiceland</h1>
        <div onClick={()=>setIsOpen(!isOpen)} className=" md:hidden  block absolute top-7 right-7">
          {
            isOpen?<AiOutlineMenu size={30}/>:<AiOutlineCloseCircle size={30} />
          }
        </div>
        <div>
        <ul className="hidden md:flex items-center">
            <li className="p-4 uppercase text-black text-xl"><a href="/">Home</a></li>
            <li className="p-4 uppercase text-black text-xl"><a href="/">Latest</a></li>
            <li className="p-4 uppercase text-black text-xl"><a href="/">About</a></li>
        </ul>
        </div>
        <div className="md:hidden">
        <ul className={`${isOpen? "top-[-600px] fixed left-0 duration-500 ease-in-out":"fixed top-20 duration-500 ease-in-out w-full  bg-white left-0"}`}>
            <li className="p-4 uppercase text-black text-xl"><a href="/">Home</a></li>
            <li className="p-4 uppercase text-black text-xl"><a href="/">Latest</a></li>
            <li className="p-4 uppercase text-black text-xl"><a href="/">About</a></li>
        </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
