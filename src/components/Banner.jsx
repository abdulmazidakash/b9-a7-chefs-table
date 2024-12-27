import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
	return (
	  <section className="relative container mx-auto my-8 bg-cover bg-center h-[450px] flex items-center justify-center text-center rounded-lg overflow-hidden" 
		style={{
		  backgroundImage: `url('https://media.istockphoto.com/id/1158191308/photo/teamwork-in-the-kitchen.jpg?s=612x612&w=0&k=20&c=jt4ZeHJGLsMD4EoBX9PMIIWc7jmi5SJbhWF0hrDxRio=')`,
		}}>
		{/* Overlay */}
		<div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
		{/* Content */}
		<div className="relative z-10 text-white px-6">
		  <div className="w-7/12 mx-auto">
		  <h1 className="text-3xl md:text-4xl font-bold mb-4">
			<Typewriter
			words={['Discover an exceptional cooking class tailored for you!']}
			typeSpeed={70}
			delaySpeed={1000}
			deleteSpeed={50}
			loop={Infinity}
			cursorStyle={'|'}
			cursor
			
			>

			</Typewriter>
		  </h1>
		  <p className="mb-6 text-sm md:text-lg">
			Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
		  </p>
		  </div>
		  <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4">
			<button className="btn btn-primary bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full">
			  Explore Now
			</button>
			<button className="btn btn-outline bg-white hover:bg-gray-200 text-black px-6 py-2 rounded-full">
			  Our Feedback
			</button>
		  </div>
		</div>
	  </section>
	);
  };
  
  export default Banner;
  