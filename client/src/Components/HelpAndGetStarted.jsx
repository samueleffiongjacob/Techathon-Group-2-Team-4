import React from "react";
import logo from "../Components/Form/Assets/logo1.png";
import ellipse from "../Components/Form/Assets/Ellipse.svg";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

const HelpAndGetStarted = () => {
  const [show, setShow] = useState(false);
  const hideBar = () => {
    setShow(!show);
  };

  return (
  
      <div className="flex w-full place-items-center mx-auto font-pop relative ">
        <div class="flex w-full justify-between mx-auto xs:flex-col ">
          <div className="w-[25%]  ">
            {/* Desktop side bar */}
            <div class=" h-[1300px] md:h-[2000px] flex flex-col text-white items-center bg-tee-200 xs:hidden md:flex p-4">
              <img
                src={logo}
                alt="logo"
                className="w-[10rem] px-2 h-12 object-contain "
              />
              <div>
                <ul>
                  <li>what ever </li>
                  <li>what ever </li>
                  <li>what ever </li>
                </ul>
              </div>
            </div>

            {/* Mobile SibeBar */}
            <div
              className="xs:flex hidden  rounded-md mt-[2rem]"
              onClick={hideBar}
            >
              <div className="text-white z-50 w-[19rem] pt-2 h-12 ">
                {show ? (
                  <HiMenuAlt1 className="z-20 text-tee-200 text-lg text-[1rem] w-[4rem] h-10 pl-5 static " />
                ) : (
                  <HiMenuAlt1 className="z-20 text-white text-[2rem]  right-[7rem] xd:left-2 fixed " />
                )}
              </div>
              <div
                className={
                  !show
                    ? "flex  bg-tee-200 h-[1450px] fixed w-80 pt-10 pr-28 pl-20 text-white rounded-r-3xl"
                    : "hidden"
                }
              >
                <ul>
                  <li>what </li>
                  <li>what </li>
                  <li>what </li>
                  <li>what </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="w-full flex flex-col font-pop ">
            <div className="flex xs:justify-center xs:items-center xs:text-center mx-5 mt-5 xs:-mt-10 xs:pr-0 xs:mx-0 ">
              <div>
                <p className="text-[24px] xs:text-[20px]  font-medium text-tee-400 xs:font-bold xs:hidden">
                  Welcome! Blessing Asukwo
                </p>
                <p className="text-[16px] xs:text-[20px] pr-[2rem] font-semi text-tee-400  hidden xs:flex  ">
                  Support
                </p>
                <p className="text-[16px] text-tee-500 xs:text-[12px] font-light xs:hidden">
                  what would you like us to help you with?
                </p>
              </div>
            </div>
            <div className="flex flex-col xs:justify-center xs:items-center pl-[1rem] xs:pl-[2rem] pt-10 xs:pt-[5rem] xs:mt-0 font-pop gap-5 w-[92%] ">
              <div className="flex justify-around items-center xs:items-center bg-tee-600 font-pop rounded-lg w-full  py-[15px] xs:py-2 xs:px-3 ">
                <p className="text-[16px]  w-[400px] xs:w-[300px]">How to create a Teetree account</p>
                <button className="w-[130px] xs:w-[120px] bg-tee-700 h-[38px] xs:h-[30px] text-[12px] xs:text-[11px] rounded-lg">
                  Show More &gt;
                </button>
              </div>
              <div className="flex justify-around items-center xs:items-center bg-tee-600 font-pop rounded-lg w-full py-[15px] xs:py-2 xs:px-3">
                <p className="text-[16px] w-[400px] xs:w-[300px]">
                  How to add a new link to your Teetree
                </p>
                <button className="w-[130px] xs:w-[120px] bg-tee-700 h-[38px] xs:h-[30px] text-[12px] xs:text-[11px] rounded-lg">
                  Show More &gt;
                </button>
              </div>
              <div className="flex justify-around items-center xs:items-center bg-tee-600 font-pop rounded-lg w-full py-[15px] xs:py-2 xs:px-3">
                <p className="text-[16px] w-[400px] xs:w-[300px]">How to navigate through Teetree</p>
                <button className="w-[130px] xs:w-[120px] bg-tee-700 h-[38px] xs:h-[30px] text-[12px] xs:text-[11px] rounded-lg">
                  Show More &gt;
                </button>
              </div>
              <div className="flex justify-around items-center xs:items-center bg-tee-600 font-pop rounded-lg w-full py-[15px] xs:py-2 xs:px-3">
                <p className="text-[16px] w-[400px] xs:w-[300px]">How to navigate through Teetree</p>
                <button className="w-[130px] xs:w-[120px] bg-tee-700 h-[38px] xs:h-[30px] text-[12px] xs:text-[11px] rounded-lg">
                  Show More &gt;
                </button>
              </div>
              <div className="flex justify-around items-center xs:items-center bg-tee-600 font-pop rounded-lg w-full py-[15px] xs:py-2 xs:px-3">
                <p className="text-[16px] w-[400px] xs:w-[300px]">How to create a Teetree account</p>
                <button className="w-[130px] xs:w-[120px] bg-tee-700 h-[38px] xs:h-[30px] text-[12px] xs:text-[11px] rounded-lg">
                  Show More &gt;
                </button>
              </div>
              <div className="flex justify-around items-center xs:items-center bg-tee-600 font-pop rounded-lg w-full py-[15px] xs:py-2 xs:px-3">
                <p className="text-[16px] w-[400px] xs:w-[300px]">
                  How to add a new link to your Teetree
                </p>
                <button className="w-[130px] xs:w-[120px] bg-tee-700 h-[38px] xs:h-[30px] text-[12px] xs:text-[11px] rounded-lg">
                  Show More &gt;
                </button>
              </div>
              <div className="flex justify-around items-center xs:items-center bg-tee-600 font-pop rounded-lg w-full py-[15px] xs:py-2 xs:px-3">
                <p className="text-[16px] w-[400px] xs:w-[300px]">How to navigate through Teetree</p>
                <button className="w-[130px] xs:w-[120px] bg-tee-700 h-[38px] xs:h-[30px] text-[12px] xs:text-[11px] rounded-lg">
                  Show More &gt;
                </button>
              </div>
            </div>
          </div>
          </div>

          <div className=" absolute right-[5rem] top-8 xs:right-5 xs:top-[2rem] xd:absolute xd:left-[16.8rem] w-[5rem] flex justify-center ">
            <img
              src={ellipse}
              alt="image"
              className="w-12  h-12 xs:w-10 rounded-full"
            />
          </div>
        </div>
    
   
  );
};



export default HelpAndGetStarted;


