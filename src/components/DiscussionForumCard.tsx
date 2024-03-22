import { IDiscussionForumItem } from "@/types/global";
import Image from "next/image";
import { FaCommentAlt, FaHeart, FaShareAlt } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";

const DiscussionForumCard = ({ item }: { item: IDiscussionForumItem }) => {
  return (
    <div className="flex border pt-2 shadow-xl shadow-gray-200 rounded w-full">
      <div className="mr-1 md:mr-2">
        <Image
          src={item.avatar}
          alt="profile_image"
          width={65}
          height={65}
          className="w-full"
        />
      </div>
      <div className="w-4/5 h-full">
        <div className="flex gap-5 mb-1">
          <h1>{item.name}</h1>
          <p className="bg-blue-400 text-white rounded-md px-4 font-medium">
            {item.designation}
          </p>
        </div>

        <div className="">
          <p>{item.description}</p>
        </div>

        <div className="flex justify-between my-2 md:my-5 w-full">
          <div className="flex items-center gap-1 md:gap-2">
            <FaHeart className="" />
            <span>{item.loveReact}</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <MdRemoveRedEye className="" />
            <span>{item.view}</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <FaCommentAlt className="" />
            <span>{item.comments} comments</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <FaShareAlt className="" />
            <span>Share</span>
          </div>
        </div>
      </div>

      <div className="w-1/5">
        <h3 className="text-blue-400 w-full p-2">2 minutes ago</h3>
      </div>
    </div>
  );
};

export default DiscussionForumCard;
