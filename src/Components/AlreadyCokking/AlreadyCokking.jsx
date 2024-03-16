import React from "react";

const AlreadyCokking = ({ alreadyCookings, idx }) => {
  const { name, time, calories, id } = alreadyCookings;
  console.log(name, time, calories, id);
  return (
    <tr className="second-tr text-[#666666]  bg-[#f8f8f8] h-[85px]  lg:text-lg  border-b-[10px] border-transparent">
      <td className="w-[30px] pl-2">
        <span className="pl-5">{idx + 1}</span>
      </td>
      <td className="w-[120px] ">{name}</td>
      <td className="w-[140px]">
        {time} <br /> minutes
      </td>
      <td className="w-[90px]">
        {calories} <br /> calories
      </td>
    </tr>
  );
};

export default AlreadyCokking;
