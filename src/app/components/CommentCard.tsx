import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { HiOutlineShare } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";

const CommentCard = ({ commentlist }: any) => {
  return (
    <div
      style={{
        borderImage: "linear-gradient(to right, #e53e3e, #f6ad55)",
        borderImageSlice: "1",
        borderRadius: "100px",
      }}
      className="h-full w-[250px] bg-transparent flex flex-col gap-4 rounded-lg items-start border-2 px-5 py-5"
    >
      <div className="w-full bg-white h-[250px] rounded-md flex items-center justify-center">
        <Image
          src={commentlist.image}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-[150px] flex items-center justify-between gap-2">
        <div className="w-[80%] h-full flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full">
              <Image
                src={commentlist?.userimage}
                alt="Profile"
                className="w-[90%] h-[90%] object-cover"
              />
            </div>
            <p className="text-white text-md font-[8px]">{commentlist.name}</p>
          </div>
          <div>
            <p className="text-white text-[10px] font-regular">
              {commentlist.comment}
            </p>
          </div>
        </div>
        <div className="w-[20%] h-full flex justify-end items-center">
          <div>
            <button className="p-2 rounded-full scale-[70%] border-2 flex items-center justify-center border-white">
              <AiOutlineLike className="text-white text-md" />
            </button>
            <button className="p-2 rounded-full border-2 scale-[70%] flex items-center justify-center border-white">
              <CiHeart className="text-white text-md" />
            </button>
            <button className="p-2 rounded-full border-2 scale-[70%] flex items-center justify-center border-white">
              <AiOutlineDislike className="text-white text-md" />
            </button>
            <button className="p-2 rounded-full border-2 scale-[70%] flex items-center justify-center border-white">
              <HiOutlineShare className="text-white text-md" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
