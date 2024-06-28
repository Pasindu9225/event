import { FaBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import logo from "../../../public/Connect Ville Logo-01.svg";

const navlist = [
  {
    id: 1,
    name: "Explore",
    link: "/explore",
  },
  {
    id: 2,
    name: "MyEvent",
    link: "/myevent",
  },
  {
    id: 3,
    name: "Podcast",
    link: "/podcast",
  },
  {
    id: 4,
    name: "Journal",
    link: "/journal",
  },
  {
    id: 5,
    name: "Marketing",
    link: "/marketing",
  },
  {
    id: 6,
    name: "Support",
    link: "/support",
  },
];

const Navbar = () => {
  return (
    <div className="w-full py-4 px-16 flex items-center justify-between bg-[rgb(18,18,18)]">
      <Image src={logo} alt="Logo" className=" w-44 h-10" />
      {/* <div className=" w-20 h-10 flex items-center justify-center bg-white">
        <Image src={logo2} alt="Logo" className="h-16" />
      </div> */}
      <div className="flex items-center space-x-5">
        {navlist.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="text-white text-md hover:text-gray-300 transition-colors duration-200"
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-white px-3 py-1 rounded bg-gradient-to-r from-red-500 to-yellow-500">
          Create Event
        </button>
        <button>
          <IoSearch className="text-white text-2xl" />
        </button>
        <button>
          <FaBell className="text-white text-2xl" />
        </button>
        <div className="w-8 h-8 rounded-md bg-white"></div>
      </div>
    </div>
  );
};

export default Navbar;
