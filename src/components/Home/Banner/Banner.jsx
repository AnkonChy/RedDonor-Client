import "./Banner.css";
const Banner = () => {
  return (
    <div className="w-full p-6 md:p-16 banner overflow-hidden min-h-screen flex lg:justify-between flex-col items-center justify-center bg-opacity-25  bg-gradient-to-tl to-red-700 from-[#200b0b]">
      <div className="flex lg:justify-between flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2  flex  justify-start items-start flex-col gap-6 md:gap-3  ">
          {/* <h1 className="text-2xl lg:text-5xl md:text-5xl text-textcolor text-left font-bold">
            Best{" "}
            <span className="text-blue-500 ">Online Learning Platform</span> for{" "}
            <br /> Skill & Career Growth
          </h1> */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-white text-left font-bold">
            Every Drop Gives <span className="text-yellow-400">Hope</span>,{" "}
            <br />
            Every Smile Lives <span className="text-yellow-400">On</span> <br />
            Be Someone’s <span className="text-yellow-400">Hope</span> Today
          </h1>

          <div className="flex gap-2">
            <button className="btn">Join as a Donor</button>
            <button className="btn btn-success">Search Donors</button>
          </div>
          <div className=" text-xl md:text-[20px] rounded  text-white  duration-300 mt-2">
            {/* <Button text="Discover More" url="/dashboard/studentDashboard" /> */}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          {/* <div
          className="absolute  top-[-300px]  md:top-[-200px] z-[-1] right-[-300px]   md:right-[-200px]  w-[500px]  h-[500px]    "
          style={{
            transform: "rotate(45deg)",
          }}
        >
          <div className="relative ">
            <div className="shapeone absolute shadow  rounded-[40px] w-[400px] h-[400px] bg-[rgba(0,0,0,0.4)] opacity-40   transition-all duration-500 "></div>

            <div className="shapetwo absolute  rounded-[30px] shadow w-[300px] h-[300px] bg-[rgba(0,0,0,0.2)]  opacity-40  transition-all duration-500"></div>

            <div className="shapethree absolute opacity-55 rounded-[20px] shadow w-[200px] h-[200px] bg-white  transition-all duration-500 "></div>
          </div>
        </div> */}
          <img
            src="https://i.ibb.co.com/chXhQ5gv/Blood-Donation-5.png"
            className="bannerAnimation w-[600px]"
            alt="Loading..."
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
