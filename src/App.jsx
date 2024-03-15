import { useEffect, useState } from "react";

import "./App.css";
import CookItem from "./CookItem/CookItem";

function App() {
  const [cookItems, setCookItem] = useState([]);
  useEffect(() => {
    fetch("/recipes.json")
      .then((res) => res.json())
      .then((data) => setCookItem(data));
  }, []);
  console.log(cookItems);
  return (
    <>
      <div className="w-[90%] mx-auto lg:mt-12">
        <div className="cooking-item w-[70%] border-2 border-red-500 flex flex-wrap justify-around">
          {cookItems.map((cookItem) => (
            <CookItem key={cookItem.recipe_id} cookItem={cookItem}></CookItem>
          ))}
        </div>
        <div className="cooking-section"></div>
      </div>
    </>
  );
}

export default App;
