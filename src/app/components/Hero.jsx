import Image from "next/image";
import logo3 from "../../../public/Connect Ville Logo Icon.svg";

const Hero = () => {
  return (
    <div className=" w-full h-screen bg-[rgb(14,14,14)] flex items-center justify-center px-20 py-5 gap-2">
      <div className=" w-[500px] h-[500px] text-white flex flex-col gap-5 justify-center items-start px-10 py-10 ">
        <div className="">
          <p className=" text-3xl font-regular">
            All things <span className="text-3xl font-regular">Events</span>
          </p>
          <p className=" text-3xl font-regular">
            One big <span className="text-3xl font-regular">Community!</span>
          </p>
        </div>
        <div className="">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            blanditiis voluptates rerum tempora, qui exercitationem quisquam
          </p>
        </div>
        <div className=" flex items-center gap-4">
          <button className=" px-3 py-2 rounded-md bg-gradient-to-r from-red-500 to-yellow-500 text-white">
            Explore Events
          </button>
          <button className=" px-3 py-2 rounded-md bg-transparent border-2 border-white text-white">
            Create Your Own Event
          </button>
        </div>
      </div>
      <div className=" w-[500px] h-[500px] py-20 flex items-center justify-center">
        <Image src={logo3} alt="Logo" className=" w-full h-full" />
      </div>
    </div>
  );
};

export default Hero;
