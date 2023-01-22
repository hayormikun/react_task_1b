import React, { useState } from "react";
import { useEffect } from "react";

const AdminDashboardPage = () => {

  const [data, setData] = useState(null);
  
  useEffect(async () => {
    let sdk = new MkdSDK();
    const response = await sdk.callRestAPI("", "GET")
    setData(response.json);
  }, []);
  
  return (
    <>
      <div className="w-full bg-[#111111] flex justify-center items-center text-7xl h-screen text-gray-700 ">
        <div className="container w-[80%] m-auto flex flex-col">
          <nav className="flex justify-between mt-5 mb-10">
            <h1 className="text-white h-[20px] w-[102px] font-lg text-[48px] leading-5 font-[900]">
              APP
            </h1>
            <button className="bg-[#97f443] flex flex-row gap-1 font-thin rounded-sm text-[#050505] text-[16px] justify-center items-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#696969"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >

                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <p>Logout</p>
            </button>
          </nav>

          <div className="flex justify-between">
            <h2 className="font-thin text-[40px] w-auto h-auto leading-[48px] text-white">
              Today’s leaderboard
            </h2>

            <span className="bg-[#1D1D1D] w-[418px] h-auto rounded-2xl grid grid-cols-3">
              <div className="col-span-1">
                <p className="text-white font-thin text-[16px] leading-5">
                  30 May 2022
                </p>
              </div>
              <div className="col-span-1 bg-[#9BFF00] text-center rounded-lg py-1 px-[10px]">
                <p className="text-[#000000] uppercase text-sm leading-[17px] font-thin">
                  Submissions OPEN
                </p>
              </div>
              <div className="col-span-1">
                <p className="text-white font-thin text-[16px] leading-5">
                  11:34
                </p>
              </div>
            </span>
          </div>

          <div className="">
            <Table data={data}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
