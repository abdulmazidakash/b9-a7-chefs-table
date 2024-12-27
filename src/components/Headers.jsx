import { FaDollarSign } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Headers = () => {
  return (
    <header className="bg-gradient-to-r container mx-auto px-4 from-[#15202F] via-pink-500 to-red-500 p-4 rounded-b-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <h1 className="text-white text-2xl font-bold">Recipe Calories</h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-white font-semibold">
          <a href="#" className="hover:text-gray-200">Home</a>
          <a href="#" className="hover:text-gray-200">Recipes</a>
          <a href="#" className="hover:text-gray-200">About</a>
          <a href="#" className="hover:text-gray-200">Search</a>
        </nav>

        {/* Search and Icon Section */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered bg-gray-100 pl-10 pr-4 py-2 rounded-full focus:outline-none"
            />
            <FiSearch className="absolute top-[16px] left-3 text-gray-500" />
          </div>

          {/* Dollar Icon */}
          <button className="btn btn-circle bg-green-500 hover:bg-green-600 text-white">
            <FaDollarSign />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Headers;
