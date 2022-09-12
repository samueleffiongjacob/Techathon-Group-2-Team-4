import React from "react";
import logo from "../Form/Assets/logo1.png";
import ellipse from "../Form/Assets/ellipse.svg";
import { BsDot } from "react-icons/bs";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import {
  MdContactSupport,
  MdStarHalf,
  MdOutlineCampaign,
  MdOutlineTextSnippet,
  MdLink,
} from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";



const Support = () => {
  const [show, setShow] = useState(false);
  const hideBar = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="flex w-full place-items-center mx-auto font-pop relative ">
        <div class="flex w-full justify-between mx-auto xs:flex-col xs:h-screen ">
          <div className="w-[20%]  ">
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

          <div class="w-full flex flex-col font-pop  ">
            <div className="flex xs:justify-center xs:items-center xs:text-center mx-5 mt-5 xs:mt-[2rem]   xs:pr-0 xs:mx-0 ">
              <div>
                <p className="text-[24px] xs:text-[20px]  font-medium text-tee-400 xs:font-bold xs:hidden">
                  Welcome! Blessing Asukwo
                </p> 
                <p className="text-[16px] xs:text-[20px] pr-[2rem] font-semi text-tee-400  hidden xs:flex -mt-[4rem]">
                  Support
                </p>
                <p className="text-[16px] text-tee-500 xs:text-[12px] font-light xs:hidden">
                  what would you like us to help you with?{" "}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-2 pl-[3rem] md:pl-8 md:gap-[2rem] xs:-mt-[1rem] xs:grid-cols-1 xs:justify-center xs:items-center mt-5 xs:gap-0 gap-[8rem] ">
              <div className="flex flex-col mt-8 xs:mt-0 mb-2 w-[300px] md:w-[280px] h-[460px]  space-y-5 ">
                <MdContactSupport className="text-[560px] w-[17rem] h-10 mt-7 text-tee-200 flex items-center" />
                <div>
                <p className="pl-8 pb-7 font-bold text-[20px] ">Teetree Discussions</p>
                <p className="pl-8 text-[16px]">Most popular</p>
                </div>

                <div className="flex ">
                <MdStarHalf className="text-[30px]"/>
                  <span className="pl-2 text-[16px] w-[250px] ">Changing my profile picture on Teetree</span>
                </div>

                <div className=" flex ">
                <MdStarHalf className="text-[30px]"/>
                  <span className="pl-2 text-[16px] w-[250px]">Adding a bio description to your Teetree account</span>
                </div>
                <div className=" flex">
                <MdStarHalf className="text-[34px] "  />
                  <span className="pl-2 text-[16px] w-[250px]">Becoming a community advocate on Teetree</span>
                </div>
                <div className="  flex">
                <MdStarHalf className="text-[34px] "  />
                  <span className="pl-2 text-[16px] w-[250px]">Adding a new theme to my Teetree background</span>
                </div>
              </div>


              <div className="flex flex-col mt-8 mb-2 w-[300px] md:w-[280px] h-[460px] space-y-5">
                <MdOutlineTextSnippet className="text-[560px] w-[17rem] h-10 mt-7 text-tee-200 flex items-center" />
                <div>
                <p className="pl-8 pb-7 font-bold  text-[20px]">Teetree User Guide</p>
                <p className="pl-8 text-[16px]">Most popular</p>
                </div>
                <div className=" flex">
                <MdStarHalf className="text-[34px] "  />
                  <span className="pl-2 text-[16px] w-[250px]">How to get started on Teetree</span>
                </div>
                <div className="flex ">
                <MdStarHalf className="text-[34px] "  />
                  <span className="pl-2 text-[16px] w-[250px]">Sharing your Teetree link</span>
                </div>
                <div className="flex">
                <MdStarHalf className="text-[34px] "  />
                  <span className="pl-2 text-[16px] w-[250px]">Changing your Teetree email address</span>
                </div>
                <div className=" flex">
                <MdStarHalf className="text-[34px]"/>
                  <span className="pl-2 text-[16px] w-[250px]">Be part of Teetree community</span>
                </div>
              </div>



              <div className="flex flex-col mt-8 xs:-mt-10 md:mt-3 mb-2 w-[300px] md:w-[280px] h-[460px] space-y-5">
                <FaUserCircle className="text-[560px] w-[17rem] h-10 mt-7 text-tee-200 flex items-center" />
                <p className="pl-8 pb-7 font-bold text-[20px] ">Personalized Support</p>
                <div className="flex ">
                <MdStarHalf className="text-[34px] "  />
                  <span className="pl-2 text-[16px] w-[250px]">
                    Find your profile to get into your Teetree account{" "}
                  </span>
                </div>
              </div>



              <div className="flex flex-col mb-2 w-[300px] md:w-[280px] xs:-mt-[14rem] h-[460px]  space-y-5 ">
                <MdOutlineCampaign className="text-[560px] w-[17rem] h-10 mt-7 text-tee-200 flex items-center" />
                <p className="pl-8 pb-7 font-bold  text-[20px] xs:pr-[3rem] xs:text-center">Announcements</p>
                <div className=" flex ">
                <MdStarHalf className="text-[34px] "  />
                  <span className="pl-2 text-[16px] w-[250px]">New landing page!</span>
                </div>
                <div className=" flex">
                <MdStarHalf className="text-[34px] "  />
                  <span className="pl-2 text-[16px] w-[250px]">
                    You can now add more than one email address to your Teetree
                  </span>
                </div>
                <div className="flex">
                <MdStarHalf className="text-[34px] "  />
                  <span className="pl-2 text-[16px] w-[250px]">
                    Get a referal link to invite your friends to Teetree
                  </span>
                </div>
              </div>



              <div className="flex flex-col my-2 w-[300px] xs:-mt-[6rem] md:w-[280px] h-[460px] space-y-5 ">
                <MdLink className="text-[560px] w-[17rem] h-10 mt-7 text-tee-200 flex items-center"  />
                <p className="pl-8 pb-7 font-bold  text-[20px] xs:pr-[3.4rem] xs:text-center">Resources</p>
                <div className=" flex">
                <MdStarHalf className="text-[34px] "  />
                  <span className="pl-2 text-[16px] w-[250px]">Report a link error </span>
                </div>
                <div className="flex">
                <MdStarHalf className="text-[34px] "  />
                  <span className="pl-2 text-[16px] w-[250px]">Glossary</span>
                </div>
                <div className="flex">
                <MdStarHalf className="text-[34px] "  />
                  <span className="pl-2 text-[16px] w-[250px]">Download the Teetree app</span>
                </div>
                <div className=" flex">
                <MdStarHalf className="text-[34px] "  />
                  <span className="pl-2 text-[16px] w-[250px]">Contact us</span>
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
      </div>
    </>
  );
};

export default Support;
