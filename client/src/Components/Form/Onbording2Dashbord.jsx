import React from "react";
import logo from "../Form/Assets/logo.jpg"


const Onbording2Dashbord = () => {
  return (
    <>
      <div className=" flex justify-center items-center font-pop">
        <img
          src={logo}
          alt="logo"
          className="w-[10rem] h-12 object-contain absolute top-8"
        />
        <div className="w-[600px] xs:w-[400px] xm:w-[300px] flex flex-col h-[400px] my-[10rem] xd:ml-[1rem] ">
          <p className="xs:w-[] xs:text-[16px] xs:pl-[2rem] xs:mr-[3rem] pb-[4rem] xs:pb-2 sm:pb[1rem] sm:pb-[1rem] text-2xl text-center  xm:text-[16px] font-medium text-gray-900 capitalize">
            which niche can we categories Your services?
          </p>
          <form
            action="Dashboard"
            className=" py-10 xs:w-[400px] xm:w-[300px] xd:w-[200px] rounded-xl  xs:border-none  border border-tee-200 flex flex-col justify-center items-center space-y-9 "
          >
            <p className="text-xl text-gray-900 pt-8 capitalize text-center xs:text-[14px] ">
              Choose the option best fit your niche?
            </p>
            <div className="xm:w-[380px]  sm:border-none flex flex-col place-items-center">
                <label
                  className="  text-gray-500 w-full flex border-tee-200 items-center justify-between h-14 py-4 pl-4 ml-2 border rounded-lg outline-none"
                  placeholder="Email"
                >
                  Niche
                </label>
                <select
                  name=""
                 
                  className=" -mt-[2.8rem] ml-[19rem]  xm:ml-[12rem] capitalize  py-1  my-5 font-pop "
                >
                  <option value="">None</option>
                  <option value="tech" className="hover:bg-tee-200">
                    Tech
                  </option>
                  <option value="fashion-design" className="hover:text-tee-200">
                    fashion and design
                  </option>
                  <option value="business">business</option>
                  <option value="creative">creative</option>
                  <option value="health">health</option>
                  <option value="travel-and-tourism">travel and tourism</option>
                  <option value="creative">creative</option>
                  <option value="finance">finance</option>
                  <option value="education">education</option>
                  <option value="others">others</option>
                </select>
              </div>
             <div className="flex items-center justify-center xs:w-[480px] xm:w-[380px]  ">
             <button className="bg-purple-900 w-full h-12  xm:w-[380px]  px-28 py-4 text-[18px] xs:text-base flex items-center justify-center font-medium text-white rounded-md ">
                Send
              </button>
             </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Onbording2Dashbord;
