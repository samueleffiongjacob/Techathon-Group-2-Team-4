import React from "react";
import backgd from "../Form/Assets/formEvelope.jpg";
import logo from "../Form/Assets/logo.jpg";
const Validation = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center font-pop w-full h-screen sm:mb-[10rem]">
        <div className="w-4/5  flex flex-col justify-center items-center mt-[10rem] sm:mt-[5rem] xs:-mt-[2rem] ">
          <img
            src={backgd}
            alt="mail"
            className="w-[600px] opacity-5 absolute sm:hidden xs:hidden"
          />
          <img
            src={logo}
            alt="logo"
            className="w-[10rem] h-12 object-contain absolute top-10 sm:top-16 xs:top-16 "
          />
          <div className="grid grid-cols-2 -mx-1 md:-mt-[15rem] md:-mx-[3rem] sm:-mx-10 xs:-mx-6 xm:-mt-[10rem] xs:-mt-[4rem] sm:grid-cols-1 xs:grid-cols-1 items-center justify-between">
            <div className=" w-full py-6 ">
              <p className=" text-4xl sm:text-3xl xs:text-xl text-center sm:pb-12 md:text-3xl md:text-start xm:-ml-4  font-medium text-gray-900">
                You have successfully signed up,
                <br /> just one more step.
              </p>
              <p className="text-base text-gray-900  px-3 pt-10 sm:absolute sm:-bottom-[5rem]  text-center sm:-mx-[3rem] xs:mb-[8rem] xs:font-light xs:absolute xs:bottom-[9rem] xs:-ml-[3rem] xs:top-[32rem] xm:top-[22rem] xm:pl-[2.5rem] xm:pr-[1rem] xm:absolute xd:absolute ">
                A verification link has been sent to email
                <br /> all you need to do is to click in the link <br />
                sentto your mail box.
                <br />
                <br />
                blessingasukwo15@gmail.com
              </p>
            </div>
            <div>
              <img
                src={backgd}
                alt="mail"
                className="w-[470px] sm:w-[290px] sm:ml-16 xs:w-28 xs:-h-28 flex xs:ml-[6rem] xs:mt-8  place-content-center "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Validation;
