"use client";
import DiscussionForumCard from "@/components/DiscussionForumCard";
import MarketStoryCard from "@/components/MarketStoryCard";
import { discussionForumData, marketStoryData } from "@/staticData";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("discussion_forum");

  return (
    <>
      <div className="block md:hidden bg-blue-500 mb-7">
        <ul className="flex justify-between items-center gap-1 py-2 px-3 font-bold text-gray-300">
          <li
            className={`cursor-pointer hover:text-white hover:tracking-wide duration-500 ${
              activeTab === "discussion_forum" &&
              "border-b-2 border-blue-400 text-white"
            }`}
            onClick={() => setActiveTab("discussion_forum")}
          >
            Discussion Forum
          </li>
          <li
            className={`cursor-pointer hover:text-white hover:tracking-wide duration-500 ${
              activeTab === "market_story" &&
              "border-b-2 border-blue-400 text-white"
            }`}
            onClick={() => setActiveTab("market_story")}
          >
            Market Story
          </li>
        </ul>
      </div>
      {/* conditional rendering in mobile screen */}
      <div className="block md:hidden">
        {activeTab === "discussion_forum" ? (
          <div>
            <div className="flex flex-col gap-8">
              {discussionForumData.map((item, index) => (
                <div key={index}>
                  {/* dynamic discussion forum card */}
                  <DiscussionForumCard item={item} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {/* market story */}
            <div className="flex flex-col gap-6">
              {marketStoryData.map((item, index) => (
                <div key={index}>
                  <MarketStoryCard item={item} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-[4fr,1fr] gap-4">
        {/* discussion forum */}
        <div className="flex flex-col gap-8">
          <h1 className="uppercase font-semibold text-blue-400 tracking-wider md:tracking-widest md:text-2xl">
            Discussion Forum
          </h1>
          {discussionForumData.map((item, index) => (
            <div key={index}>
              {/* dynamic discussion forum card */}
              <DiscussionForumCard item={item} />
            </div>
          ))}
        </div>

        {/* market story */}
        <div className="flex flex-col gap-6">
          <h1 className="uppercase font-semibold text-blue-400 tracking-wider md:tracking-widest w-full">
            Market Stories
          </h1>
          {marketStoryData.map((item, index) => (
            <div key={index}>
              <MarketStoryCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
