import "./Banner.css";
const Banner = () => {
  return (
    <div className="w-full p-6 md:p-16 banner overflow-hidden min-h-screen flex lg:justify-between flex-col items-center justify-center bg-opacity-25  bg-gradient-to-tl to-red-700 from-[#200b0b]">
      <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-20">
        <div className="w-full lg:w-1/2  flex flex-col justify-center items-center lg:items-start gap-6 md:gap-3  ">
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-white text-left font-bold">
            Every Drop Gives <span className="text-yellow-400">Hope</span>,
            <br />
            Every Smile Lives <span className="text-yellow-400">On</span> <br />
            Be Someone’s <span className="text-yellow-400">Hope</span> Today
          </h1>

          <div className="flex gap-2 mt-8">
            <button className="px-4 py-2 md:px-6 md:py-3  bg-white text-red-700 font-semibold rounded-md shadow-md hover:bg-red-100 hover:scale-105 transition-all duration-300">
              Join as a Donor
            </button>
            <button className="px-4 py-2 md:px-6 md:py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-red-700 transition-all duration-300">
              Search Donors
            </button>
          </div>
          <div className=" text-xl md:text-[20px] rounded  text-white  duration-300 mt-2"></div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.ibb.co.com/chXhQ5gv/Blood-Donation-5.png"
            className="bannerAnimation w-96 md:w-[500px] lg:w-[600px]"
            alt="Loading..."
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
