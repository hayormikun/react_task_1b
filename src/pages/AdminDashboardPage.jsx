import React, { useState } from "react";
import { useEffect } from "react";

const AdminDashboardPage = () => {
  const [data, setData] = useState(null);
  const [payload, setPayload] = useState({
    page: 1,
    limit: 10,
  });

  const num_pages = 12;

  useEffect(async () => {
    let sdk = new MkdSDK();
    const response = await sdk.callRestAPI(payload, "PAGINATE");
    setData(response);
  }, [data]);

  const handleNext = () => {
    setData((prev) => prev + 1);
    setPayload({
      page: data,
      limit: 10,
    });
  };

  const handlePrev = (prev) => {
    setData((prev) => prev - 1);
    setPayload({
      page: data,
      limit: 10,
    });
  };

  return (
    <>
      <div className="w-full bg-[#111111] flex justify-center items-center text-7xl h-screen text-gray-700 ">
        <div className="container w-[80%] m-auto flex flex-col">
          <nav className="flex justify-between mt-5 mb-10">
            <h1 className="text-white h-[20px] w-[102px] font-lg text-[48px] leading-5 font-[900]">
              APP
            </h1>
            <button className="bg-[#97f443] py-3 px-6 flex flex-row tracking-wider w-full gap-[10px] font-thin rounded-[40px] text-[#050505] text-[16px] justify-center items-center text-center">
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
            <Table data={data} />
          </div>

          <div className="flex justify-between my-10">
            {payload.page > 1 && (
              <button
                disabled={payload.page <= 1}
                onClick={() => handlePrev()}
                className="py-3 px-5 font-medium rounded-md bg-[#97f443] text-white tracking-wider w-full"
              >
                Previous
              </button>
            )}

            {payload.page < num_pages && (
              <button
                disabled={(payload.page = num_pages)}
                onClick={() => handleNext()}
                className="py-3 px-5 font-medium rounded-md bg-[#97f443] text-white tracking-wider w-full"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
