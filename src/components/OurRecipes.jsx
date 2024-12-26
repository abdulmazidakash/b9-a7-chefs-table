import { FaUtensils } from "react-icons/fa";

const OurRecipes = () => {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <div className="container mx-auto">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-purple-100 text-purple-700 rounded-full">
            <FaUtensils size={30} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Our Recipes
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </p>
      </div>
    </section>
  );
};

export default OurRecipes;
