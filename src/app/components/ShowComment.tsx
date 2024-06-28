import CommentCard from "./CommentCard";
import image from "../../../public/Screenshot (242).png";

const commentlist = [
  {
    id: 1,
    name: "Sheron werasinghe",
    image: image,

    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores blanditiis voluptates rerum tempora, qui exercitationem quisquam",
  },
  {
    id: 2,
    name: "Sheron werasinghe",
    image: image,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores blanditiis voluptates rerum tempora, qui exercitationem quisquam",
  },
  {
    id: 3,
    name: "Sheron werasinghe",
    image: image,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores blanditiis voluptates rerum tempora, qui exercitationem quisquam",
  },
  {
    id: 4,
    name: "Sheron werasinghe",
    image: image,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores blanditiis voluptates rerum tempora, qui exercitationem quisquam",
  },
];

const ShowComment = () => {
  return (
    <div className="w-full h-screen bg-[rgb(14,14,14)] px-32 py-14">
      <div className="w-full h-full flex gap-4 px-8 py-10">
        {commentlist.map((comment) => (
          <CommentCard commentlist={comment} />
        ))}
      </div>
    </div>
  );
};

export default ShowComment;
