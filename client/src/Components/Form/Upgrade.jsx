import React from "react";
import logo from "../Form/Assets/logo1.png";
import ellipse from "../Form/Assets/ellipse.svg";
import { BsDot } from "react-icons/bs";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

const Upgrade = () => {
  const [show, setShow] = useState(false);
  const hideBar = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="flex w-full place-items-center mx-auto font-pop relative ">
        <div class="flex w-full justify-between mx-auto xs:flex-col xs:h-screen ">
          <div className="w-[20%] h-screen ">
            {/* Desktop side bar */}
            <div class=" h-screen flex flex-col text-white items-center bg-tee-200 xs:hidden md:flex p-4">
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
              className="xs:flex hidden  rounded-md mt-[3rem]"
              onClick={hideBar}
            >
              <div className="text-white z-50 w-[19rem] pt-2 h-12 ">
                {show ? (
                  <HiMenuAlt1 className="z-20 text-tee-200 text-lg text-[1rem] w-[4rem] h-10 pl-5 static" />
                ) : (
                  <HiMenuAlt1 className="z-20 text-white text-[2rem]  right-[7rem] fixed " />
                )}
              </div>
              <div
                className={
                  !show
                    ? "flex  bg-tee-200 h-[1450px] fixed w-80 pt-10 pr-28 pl-20 text-white"
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

          <div class="w-full  ">
            <div className="flex xs:justify-center xs:items-center xs:text-center mx-5 mt-5 xs:mt-[2rem]   xs:pr-0 xs:mx-0 ">
              <div>
                <p className="text-[40px] xs:text-[20px] font-medium text-tee-400 xs:font-bold">
                  Upgrade
                </p>
                <p className="text-[16px] xs:text-[12px] font-light">
                  Fine the right plan for you on Teetre
                </p>
                <p className="text-[15px] xs:text-[12px] font-light">
                  You can opt out anytime
                </p>
              </div>
            </div>
            <div className="flex px-[5rem] justify-around xs:flex-col xs:px-0 ">
              <div className="flex flex-col items-center">
                <h1 className="text-[20px] xs:text-[16px] text-green-500 font-normal p-5">
                  Monthly
                </h1>
                <div className="w-[383px] h-[510px] xs:w-[330px] border rounded-lg border-tee-300 flex flex-col  items-center">
                  <div className="flex flex-col items-center text-center w-[331px] h-[500px] ">
                    <h1 className="text-[20px] xs:text-[16px] xs:font-bold font-medium text-black py-5">
                      Free
                    </h1>
                    <p className="font-normal text-[14px] xs:text-[12px] xs:px-8 py-3">
                      Connect your community to the everything you are in one
                      link
                    </p>
                    <h1 className="font-medium text-[20px] xs:text-[12px] xs:font-bold py-4">
                      Included in Free:
                    </h1>
                    <ul className="flex flex-col items-center ">
                      <li className="text-[16px] font-light flex items-center py-2 xs:text-[13px] ">
                        <span className=" text-[1.2rem] ">
                          <BsDot />
                        </span>
                        <p>unlimited links and links app</p>
                      </li>
                      <li className="text-[16px] font-light flex items-center py-2 xs:text-[13px]">
                        <span className=" text-[1.2rem]">
                          <BsDot />
                        </span>
                        <span>clicks and view for past 28days</span>
                      </li>
                      <li className="text-[16px] font-light flex items-center py-2 xs:text-[13px]">
                        <span className=" text-[1.2rem]">
                          <BsDot />
                        </span>
                        <span>collect payments, tips and donations</span>
                      </li>
                      <li className="text-[16px] font-light flex items-center py-2 xs:text-[13px]">
                        <span className=" text-[1.2rem]">
                          <BsDot />
                        </span>
                        <span>0% transaction fee for limited time</span>
                      </li>
                      <li className="text-[16px] font-light flex items-center py-2 xs:text-[13px]">
                        <span className=" text-[1.2rem]">
                          <BsDot />
                        </span>
                        <span>collect payments, tips and donations</span>
                      </li>
                    </ul>
                    <button
                      type="submit"
                      className="w-[183] xs:w-[109px] h-[55px] bg-tee-300 text-center text-white  rounded-lg p-4 mt-8 xs:mt-12"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center xs:mb-24">
                <h1 className="text-[20px] xs:text-[16px] xs:font-bold text-tee-300 font-normal p-5 xs:mt-10">
                  Annually
                </h1>
                <div className="w-[383px] h-[510px] xs:w-[330px] border rounded-lg border-tee-300 flex flex-col  items-center">
                  <div className="flex flex-col items-center text-center w-[331px] h-[500px] ">
                    <h1 className="text-[20px] xs:text-[16px] xs:font-bold font-medium text-black py-5">
                      Premium
                    </h1>
                    <p className="font-normal text-[14px] xs:text-[12px]  py-3">
                      vip plan for creator and business
                      <br />{" "}
                      <span className="font-medium xs:font-bold text-black text-[] ">
                        $24 USD
                      </span>
                    </p>
                    <h1 className="font-medium text-[20px] xs:text-[12px] xs:font-bold py-4">
                      Included in Free:
                    </h1>
                    <ul className="flex flex-col items-center">
                      <li className="text-[16px] font-light flex items-center py-2 xs:text-[13px]">
                        <span className=" text-[1.2rem]">
                          <BsDot />
                        </span>
                        <p>Unlimited links and links App</p>
                      </li>
                      <li className="text-[16px] font-light flex items-center py-2 xs:text-[13px]">
                        <span className=" text-[1.2rem]">
                          <BsDot />
                        </span>
                        <span>clicks and views for pasts 28days</span>
                      </li>
                      <li className="text-[16px] font-light flex items-center py-2 xs:text-[13px]">
                        <span className=" text-[1.2rem]">
                          <BsDot />
                        </span>
                        <span>Collect payment, tips and donations</span>
                      </li>
                      <li className="text-[16px] font-light flex items-center py-2 xs:text-[13px]">
                        <span className=" text-[1.2rem]">
                          <BsDot />
                        </span>
                        <span>0% transaction fee for limited time</span>
                      </li>
                      <li className="text-[16px] font-light flex items-center py-2 xs:text-[13px]">
                        <span className=" text-[1.2rem]">
                          <BsDot />
                        </span>
                        <span>Collect payment, tips and donations</span>
                      </li>
                    </ul>
                    <button
                      type="submit"
                      className="w-[183] xs:w-[109px] h-[55px] bg-tee-300 text-center text-white  rounded-lg p-4 my-8 "
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-[5rem] top-8 xs:right-5 xs:top-[3rem]  ">
            <img
              src={ellipse}
              alt="image"
              className="w-12  h-12 xs:w-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Upgrade;
