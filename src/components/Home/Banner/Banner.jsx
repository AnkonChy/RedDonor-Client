import { Link } from "react-router";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="w-full pt-6 banner overflow-hidden min-h-screen flex lg:justify-between flex-col items-center justify-start bg-opacity-25  bg-gradient-to-tl to-red-700 from-[#200b0b]">
      <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-36">
        <div className="w-full lg:w-1/2  flex flex-col justify-center items-center lg:items-start gap-6 md:gap-3 md:pt-20">
          <h1 className="text-3xl md:text-5xl text-white text-center lg:text-left font-bold">
            Every Drop Gives <span className="text-yellow-400">Hope</span>,
            <br />
            Every Smile Lives <span className="text-yellow-400">On</span> <br />
            Be Someone’s <span className="text-yellow-400">Hope</span> Today
          </h1>

          <div className="flex items-center gap-2 ld:mt-8">
            <Link to="/signup">
              <button className="px-4 py-2 md:px-6 md:py-3  bg-white text-red-700 font-semibold rounded-md shadow-md hover:bg-red-100 hover:scale-105 transition-all duration-300 border-2 border-white">
                Join as a Donor
              </button>
            </Link>
            <Link to="/search">
              <button className="px-4 py-2 md:px-6 md:py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-red-700 transition-all duration-300 hover:scale-105">
                Search Donors
              </button>
            </Link>
          </div>
          <div className=" text-xl md:text-[20px] rounded  text-white  duration-300 mt-2"></div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.ibb.co.com/chXhQ5gv/Blood-Donation-5.png"
            className="bannerAnimation w-96 md:w-[500px] lg:w-[580px]"
            alt="Loading..."
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
