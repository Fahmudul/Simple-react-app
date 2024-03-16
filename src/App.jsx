import { useEffect, useState } from "react";
import "./App.css";
import CookItem from "./Components/CookItem/CookItem";
import CookingItem from "./Components/CookingItem/CookingItem";
import AlreadyCokking from "./Components/AlreadyCokking/AlreadyCokking";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/HeaderSection/Header";
import OurRecipe from "./Components/OurRecipe/OurRecipe";

function App() {
  const [cookItems, setCookItem] = useState([]);
  const [wantToCooks, setWantToCook] = useState([]);
  const [alreadyCooking, setAlreadyCooking] = useState([]);
  const [timeCaloris, setTimeCaloris] = useState({ time: 0, calories: 0 });
  useEffect(() => {
    fetch("/recipes.json")
      .then((res) => res.json())
      .then((data) => setCookItem(data));
  }, []);

  const handleWantToCook = (name, time, calories, id) => {
    const isExist = wantToCooks.find((item) => item.id == id);
    if (!isExist) {
      setWantToCook([
        ...wantToCooks,
        { name: name, time: time, calories: calories, id: id },
      ]);
    } else {
      toast("You cannot add same item twice");
    }
  };
  const handlePreparing = (name, time, calories, id) => {
    const availableCookItem = wantToCooks.filter((item) => item.id !== id);
    setWantToCook(availableCookItem);
    setAlreadyCooking([
      ...alreadyCooking,
      { name: name, time: time, calories: calories, id: id },
    ]);
    setTimeCaloris({
      time: timeCaloris.time + time,
      calories: timeCaloris.calories + calories,
    });
  };

  return (
    <>
      <div className="font-lexend">
        <Header></Header>
        <OurRecipe></OurRecipe>
        <div className="w-[90%] mx-auto lg:mt-12 lg:flex justify-between ">
          <div className="cooking-item lg:w-[67%] grid md:grid-cols-2 lg:grid-cols-3 justify-around gap-y-6">
            {cookItems.map((cookItem) => (
              <CookItem
                key={cookItem.recipe_id}
                cookItem={cookItem}
                handleWantToCook={handleWantToCook}
              ></CookItem>
            ))}
          </div>
          <div className="cooking-section border-2 rounded-lg lg:w-[32%] max-h-[800px]">
            <div className="w-full ">
              <h1 className="text-2xl text-center mt-8">
                Want to cook : {wantToCooks.length}
              </h1>
              <hr className="w-[350px] mx-auto mt-4 mb-6" />
              <table className="w-full ">
                <thead>
                  <tr className="text-[#878787] text-left h-[60px] border-transparent">
                    <th className="w-[40px]"></th>
                    <th className="text-lg">Name</th>
                    <th className="text-lg">Time</th>
                    <th className="text-lg">Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {wantToCooks.map((wantToCook, idx) => (
                    <CookingItem
                      wantToCook={wantToCook}
                      key={idx}
                      idx={idx}
                      handlePreparing={handlePreparing}
                    ></CookingItem>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="w-full">
              <h1 className="text-2xl text-center mt-8">
                Currently cooking : {alreadyCooking.length}
              </h1>
              <hr className="w-[350px] mx-auto mt-4 mb-6" />
              <table className=" w-full ">
                <thead>
                  <tr className="text-[#878787] text-left h-[60px] border-b-[10px] border-transparent">
                    <th></th>
                    <th className="text-lg">Name</th>
                    <th className="text-lg">Time</th>
                    <th className="text-lg">Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {alreadyCooking.map((alreadyCookings, idx) => (
                    <AlreadyCokking
                      alreadyCookings={alreadyCookings}
                      key={idx}
                      idx={idx}
                    ></AlreadyCokking>
                  ))}
                  <tr className="text-[#535353] lg:text-lg border-b-[10px] border-transparent">
                    <td className=""></td>
                    <td className=""></td>
                    <td
                      className={
                        !alreadyCooking.length > 0
                          ? "lg:w-[200px] font-bold"
                          : "lg:w-[100px] font-bold"
                      }
                    >
                      Total Time = <br /> {timeCaloris.time} minitues
                    </td>
                    <td
                      className={
                        !alreadyCooking.length > 0
                          ? "lg:w-[200px] font-bold"
                          : "lg:w-[100px] font-bold"
                      }
                    >
                      Total Calories = <br /> {timeCaloris.calories} calories
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
