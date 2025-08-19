import "./Banner.css"
const Banner = () => {
  return (
    <div className="w-full p-10 md:p-[122px] banner overflow-hidden min-h-screen flex lg:justify-between items-center md:items-start lg:items-center flex-col lg:flex-row bg-opacity-25  bg-gradient-to-bl to-[#041b3a] from-[#0B1120]">
      <div className="w-full lg:w-[45%]  flex  justify-start items-start flex-col gap-6 md:gap-3  ">
        <h1 className="text-2xl lg:text-5xl md:text-5xl text-textcolor text-left font-bold">
          Best <span className="text-blue-500 ">Online Learning Platform</span>{" "}
          for <br /> Skill & Career Growth
        </h1>
        <p className=" text-white text-lg">
          <i className="fas fa-map-marker-alt"></i>Expert-led courses for
          flexible, online learning.
        </p>
        <div className=" text-xl md:text-[20px] rounded  text-white  duration-300 mt-2">
          {/* <Button text="Discover More" url="/dashboard/studentDashboard" /> */}
        </div>
      </div>
      <div className="w-full lg:w-1/2   relative ">
        <div
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
        </div>
        <img
          src="https://tutorsheba3.netlify.app/assets/banner1-BOT-BWkG.svg"
          className="bannerAnimation w-full h-[400px]"
          alt="Loading..."
        />
      </div>
    </div>
  );
};

export default Banner;
