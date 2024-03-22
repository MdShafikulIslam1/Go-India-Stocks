import DiscussionForumCard from "@/components/DiscussionForumCard";
import MarketStoryCard from "@/components/MarketStoryCard";
import { discussionForumData, marketStoryData } from "@/staticData";

export default function Home() {
  return (
    <div className="grid grid-cols-[4fr,1fr] gap-4">
      {/* discussion forum */}
      <div className="flex flex-col gap-10">
        {discussionForumData.map((item, index) => (
          <div key={index}>
            {/* dynamic discussion forum card */}
            <DiscussionForumCard item={item} />
          </div>
        ))}
      </div>

      {/* market story */}
      <div className="flex flex-col gap-6">
        {marketStoryData.map((item, index) => (
          <div key={index}>
            <MarketStoryCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
