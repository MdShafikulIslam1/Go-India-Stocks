import { IDiscussionForumItem } from "@/types/global";
import Image from "next/image";
import { FaCommentAlt, FaHeart, FaShareAlt } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";

const DiscussionForumCard = ({ item }: { item: IDiscussionForumItem }) => {
  return (
    <div className="flex border h-40 pt-2 shadow-xl shadow-gray-200 rounded">
      <div className="mr-2">
        <Image
          src={item.avatar}
          alt="profile_image"
          width={65}
          height={65}
          className="w-full "
        />
      </div>
      <div className="w-4/5 h-40">
        <div className="flex gap-5 mb-1">
          <h1>{item.name}</h1>
          <p className="bg-blue-400 text-white rounded-md px-4 font-medium">
            {item.designation}
          </p>
        </div>

        <div className="">
          <p>{item.description}</p>
        </div>

        <div className="flex justify-between mt-6">
          <div className="flex items-center gap-2">
            <FaHeart className="icon" />
            <span>{item.loveReact}</span>
          </div>
          <div className="flex items-center gap-2">
            <MdRemoveRedEye className="icon" />
            <span>{item.view}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCommentAlt className="icon" />
            <span>{item.comments} comments</span>
          </div>
          <div className="flex items-center gap-2">
            <FaShareAlt className="icon" />
            <span>Share</span>
          </div>
        </div>
      </div>

      <div className="w-1/5 ">
        <h3 className="text-blue-400">2 minutes ago</h3>
      </div>
    </div>
  );
};

export default DiscussionForumCard;
