import PropTypes from "prop-types";
import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import "./CookItem.css";

const CookItem = ({ cookItem, handleWantToCook }) => {
  const {
    recipe_id,
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = cookItem;
  return (
    <div className="cook-item flex flex-col py-6 rounded-lg border-2 border-[#d4d4d4] ">
      <div className="w-[90%] lg:w-[345px] mx-auto ">
        <img
          className="w-full lg:w-full h-[220px] bg-center bg-contain rounded-2xl m"
          src={recipe_image}
          alt=""
        />
        <h1 className="text-xl mt-6">{recipe_name}</h1>
        <p className="text-lg text-[#878787] lg:w-[330px] h-[75px] mt-4 mb-7">
          {short_description}
        </p>
        <p id="ingredient">Ingredient: {ingredients.length}</p>
        <ul className="mt-4 mb-7 text-[#878787] w-[60%] h-[120px] ">
          {ingredients.map((ingredient, idx) => (
            <li key={idx} className="list-disc">
              {ingredient}
            </li>
          ))}
        </ul>
        <div className="flex gap-x-4">
          <div className="flex items-center gap-x-[10px]">
            <CiClock2></CiClock2>
            <span className="text-[#535353] text-lg">{preparing_time} minutes</span>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <FaFire />
            <span className="text-[#535353] text-lg">{calories} calories</span>
          </div>
        </div>
        <button
          onClick={() =>
            handleWantToCook(recipe_name, preparing_time, calories, recipe_id)
          }
          className="btn bg-[#0be58a] lg:text-xl text-black rounded-full border-none outline-none lg:w-[190px] lg:h-[55px] mt-6"
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
};

CookItem.propTypes = {
  cookItem: PropTypes.object,
  handleWantToCook: PropTypes.func,
};

export default CookItem;
