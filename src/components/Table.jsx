import React from "react";

export const Table = ({ data }) => {
  return (
    <table className="table-auto text-left w-full mx-auto">
      <thead className="">
        <tr className="text-[#696969] font-[16px] font-thin leading-[19px]">
          <th className="w-fit pr-[25px]">#</th>
          <th className="w-1/3">Title</th>
          <th className="w-1/3">Author</th>
          <th className="w-1/3">
            Most Liked{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#696969"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </th>
        </tr>
      </thead>
      <tbody className="flex flex-col gap-3">
        {data &&
          data.map(() => (
            <tr
              key={task.id}
              className="rounded-lg border border-gray-500 p-2 w-full"
            >
              <td>
                <span className="flex justify-center items-center w-fit pr-[25px]">
                  <p className="text-[#666666] font-thin text-[14px] text-center leading-7">
                    {task.id}
                  </p>
                </span>
              </td>
              <td>
                <span className="flex flex-row gap-[16px] justify-start items-center rounded-lg w-1/3">
                  <img src={task.taskImg} alt="task.itemImg" />
                  <p className="text-white font-thin text-[20px] leading-7">
                    {task.title}
                  </p>
                </span>
              </td>
              <td>
                <span className="flex flex-row gap-1 justify-start items-center rounded-lg w-1/3">
                  <img
                    className="rounded-[40px] w-[24px] h-[24px] "
                    src={task.photo}
                    alt={task.id}
                  />
                  <p className="text-[#DBFD51] font-thin text-[16px] leading-5">
                    {task.username}
                  </p>
                </span>
              </td>
              <td>
                <span className="flex flex-row gap-1 justify-right items-right w-1/3">
                  <p className="text-white font-thin text-[16px] leading-5">
                    {task.like}
                  </p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9.96"
                    height="5.01"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9BFF00"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 19V6M5 12l7-7 7 7" />
                  </svg>
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
