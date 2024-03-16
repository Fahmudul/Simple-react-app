import React from "react";

const CookingItem = ({ wantToCook, idx, handlePreparing }) => {
  const { name, time, calories, id } = wantToCook;

  return (
    <tr className="second-tr text-[#666666]  bg-[#f8f8f8] h-[85px]  lg:text-lg border-transparent">
      <td className="w-[40px] ">
        <span className="pl-5">{idx + 1}.</span>
      </td>
      <td className="w-[180px] pl-2 ">{name}</td>
      <td className="w-[100px] ">
        {time} <br /> minutes
      </td>
      <td className="w-[90px] pl-3">
        {calories} <br /> calories
      </td>
      <td className="align-middle pl-3">
        <button
          onClick={() => handlePreparing(name, time, calories, id)}
          className="btn bg-[#0be58a] lg:text-xl text-black rounded-full border-none outline-none lg:w-[130px] lg:h-[55px] "
        >
          Preparing
        </button>
      </td>
    </tr>
  );
};

export default CookingItem;
