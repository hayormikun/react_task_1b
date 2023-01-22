import React from "react";

export const Table = ({ data }) => {
  return (
    <table className="table-auto text-left w-full mx-auto">
      <thead className="">
        <tr className="text-[#696969] font-[16px] font-thin leading-[19px]">
          <th className="p-3">#</th>
          <th className="p-3">Title</th>
          <th className="p-3">Author</th>
          <th className="p-3">Most Liked</th>
        </tr>
      </thead>
      <tbody className="flex flex-col gap-3">
        {data &&
          data.map(() => (
            <tr key={task.id} className="border-b-2 border-gray-200">
              <td>
                <span className="flex justify-center items-center ">
                  <p className="text-[#666666] font-thin text-[14px] text-center leading-7">
                    {task.id}
                  </p>
                </span>
              </td>
              <td>
                <span className="flex flex-row gap-2 justify-start items-center rounded-lg">
                  <img src={task.taskImg} alt="task.itemImg" />
                  <p className="text-white font-thin text-[20px] leading-7">
                    {task.title}
                  </p>
                </span>
              </td>
              <td>
                <span className="flex flex-row gap-2 justify-start items-center rounded-lg">
                  <img
                    className="rounded-[40px] w-[24px] h-[24px] "
                    src={task.taskImg}
                    alt={task.taskImg}
                  />
                  <p className="text-[#DBFD51] font-thin text-[16px] leading-5">
                    {task.author}
                  </p>
                </span>
              </td>
              <td>
                <span className="flex flex-row justify-end items-center p-3 gap-1">
                  <p className="text-white font-thin leading-5 text-right">
                    {task.most_liked}
                  </p>
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
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
