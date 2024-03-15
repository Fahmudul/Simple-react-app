import React from "react";
import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const CookItem = ({ cookItem }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = cookItem;
  return (
    <div className="border-2 border-red-500 w-[380px] flex flex-col  py-6">
      <div className="w-[345px] mx-auto">
        <img
          className="w-full h-[220px] bg-center bg-cover rounded-2xl m"
          src={recipe_image}
          alt=""
        />
        <h1 className="text-xl mt-6">{recipe_name}</h1>
        <p className="text-base text-[#878787] w-[330px] mt-4 mb-7">
          {short_description}
        </p>
        <p>Ingredient: {ingredients.length}</p>
        <ul className="mt-4 mb-7 text-[#878787] w-[50%] ml-6 h-[100px]">
          {ingredients.map((ingredient, idx) => (
            <li key={idx} className="list-disc">
              {ingredient}
            </li>
          ))}
        </ul>
        <div className="flex gap-x-4">
          <div className="flex items-center gap-x-[10px]">
            <CiClock2></CiClock2>
            <span className="text-[#535353]">{preparing_time} minutes</span>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <FaFire />
            <span className="text-[#535353]">{calories} calories</span>
          </div>
        </div>
        <button className="btn bg-[#0be58a] lg:text-xl text-black rounded-full border-none outline-none lg:w-[190px] lg:h-[55px] mt-6">
          Want to Cook
        </button>
      </div>
    </div>
  );
};

export default CookItem;
