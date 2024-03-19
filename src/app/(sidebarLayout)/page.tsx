import story from "@/assests/images/market_story.jpg";
import Image from "next/image";
import { FaCommentAlt, FaHeart, FaShareAlt } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";

export default function Home() {
  return (
    <div className="w-full flex">
      <div className="flex justify-between items-start w-full">
        <div className="flex gap-3">
          <div className="bg-blue-300">
            <Image
              src={"/default_avatar.png"}
              alt="profile image"
              width={60}
              height={60}
            />
          </div>
          {/* info start */}
          <div className="bg-green-400 px-4 space-y-4">
            {/* name and title */}
            <div className="flex gap-10">
              <h1>shofikul Islam</h1>
              <p className="bg-purple-500 text-white rounded-md px-2">
                Sector 2
              </p>
            </div>
            {/* description */}
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                quo inventore eligendi, eaque labore consequuntur!
              </p>
            </div>
            {/* icon */}
            <div className="flex justify-between">
              {/* love react */}
              <div className="flex items-center gap-2">
                <FaHeart />
                <span>2k</span>
              </div>
              {/* eye react */}
              <div className="flex items-center gap-2">
                <MdRemoveRedEye />
                <span>2k</span>
              </div>
              {/* comment react */}
              <div className="flex items-center gap-2">
                <FaCommentAlt />
                <span>2k comments</span>
              </div>
              {/* share react */}
              <div className="flex items-center gap-2">
                <FaShareAlt />
                <span>share</span>
              </div>
            </div>
          </div>
          {/* info end */}
        </div>
        <div className="bg-slate-600">2 min ago</div>
      </div>
      <div>
        <div className="w-full">
          <Image
            src={story}
            alt="market_story photo"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
