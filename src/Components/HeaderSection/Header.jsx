import "./Header.css";
const Header = () => {
  return (
    <header className="">
      <nav className="flex justify-between mx-auto w-[90%] items-center">
        <div className="">
          <h1 className="text-3xl font-bold">SpiceSavvy</h1>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-12 list-none">
            <li className="text-gray-400 text-lg hover:underline hover:cursor-pointer">
              Home
            </li>
            <li className="text-gray-400 text-lg hover:underline hover:cursor-pointer">
              Recipes
            </li>
            <li className="text-gray-400 text-lg hover:underline hover:cursor-pointer">
              About
            </li>
            <li className="text-gray-400 text-lg hover:underline hover:cursor-pointer">
              About
            </li>
          </ul>
        </div>
        <div className="flex gap-x-4">
          <img className="hidden lg:block" src="search.svg" alt="" />
          <input
            type="text"
            placeholder="Search"
            className="input w-full max-w-xs rounded-full lg:block hidden"
          />
          <img src="profile.svg" alt="" />
        </div>
      </nav>
      <div className="banner mx-auto w-[90%] h-[450px] lg:h-[650px] rounded-3xl mt-5 lg:mt-12 text-white flex flex-col items-center justify-center px-4">
        <h1 className="lg:w-[900px] text-center text-3xl lg:text-[52px] lg:leading-[50px]">
          Discover Culinary Delights: Recipes, Tips, and Inspiration Await!
        </h1>
        <p className="lg:w-[930px] text-center text-lg mt-3 lg:mt-6">
          Embark on a journey of flavors with our handpicked recipes and expert
          advice. Elevate your cooking game today!
        </p>
        <div className="btnn flex gap-x-7 mt-4 lg:mt-10">
          <button className="btn bg-[#0be58a] lg:text-xl text-black rounded-full border-none outline-none lg:w-[190px] lg:h-[55px]">
            Explore Now
          </button>
          <button className="btn lg:text-xl bg-transparent border-white border-2 text-white rounded-full lg:w-[190px] lg:h-[55px]">
            Our Feedback
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
