import Image from "next/image";
import { FaCommentAlt, FaHeart, FaShareAlt } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";

import logo from "@/assests/images/market_story.jpg";
export default function Home() {
  const discussionForumData = [
    {
      avatar: "/default_avatar.png",
      name: "Shofikul ",
      designation: "Sector-2",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo architecto beatae, quaerat tenetur laudantium unde necessitatibus, tempora soluta perspiciatis.",
      loveReact: "2k",
      view: "3k",
      comments: "2k",
    },
    {
      avatar: "/default_avatar.png",
      name: "Rasel",
      designation: "Sector-3",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo architecto beatae, quaerat tenetur laudantium unde necessitatibus, tempora soluta perspiciatis.",
      loveReact: "4k",
      view: "5k",
      comments: "5k",
    },
  ];

  const marketStoryData = [
    {
      image: logo,
      title: "The coldest sunset",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas      pariatur, expedita quas quidem iure",
    },
    {
      image: logo,
      title: "The coldest sunset",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas      pariatur, expedita quas quidem iure",
    },
    {
      image: logo,
      title: "The coldest sunset",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas      pariatur, expedita quas quidem iure",
    },
    {
      image: logo,
      title: "The coldest sunset",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas      pariatur, expedita quas quidem iure",
    },
    {
      image: logo,
      title: "The coldest sunset",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas      pariatur, expedita quas quidem iure",
    },
    {
      image: logo,
      title: "The coldest sunset",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas      pariatur, expedita quas quidem iure",
    },
    {
      image: logo,
      title: "The coldest sunset",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas      pariatur, expedita quas quidem iure",
    },
    {
      image: logo,
      title: "The coldest sunset",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas      pariatur, expedita quas quidem iure",
    },
  ];
  return (
    <div className="grid grid-cols-[4fr,1fr] gap-4">
      <div className="flex flex-col gap-10">
        {discussionForumData.map((item, index) => (
          <div
            key={index}
            className="flex border h-40 pt-2 shadow-xl shadow-gray-200 rounded"
          >
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

            <div className="w-1/5">
              <h3>2 minutes ago</h3>
            </div>
          </div>
        ))}
      </div>

      {/* market story */}
      <div className="flex flex-col gap-6">
        {marketStoryData.map((data, index) => (
          <div key={index} className="overflow-hidden border h-64 ">
            <div className="image w-full">
              <Image
                className="w-full object-cover rounded"
                src={data.image}
                alt="market story"
                width={100}
                height={100}
              />
            </div>
            <div className="px-2 py-3">
              <h1 className="text-base font-medium my-1">{data.title}</h1>
              <p className="text-sm font-light">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
