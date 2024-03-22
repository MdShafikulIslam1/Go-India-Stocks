import { IMarketStoryItem } from "@/types/global";
import Image from "next/image";

const MarketStoryCard = ({ item }: { item: IMarketStoryItem }) => {
  return (
    <div className="overflow-hidden border h-64 ">
      <div className="image w-full h-36 overflow-hidden">
        <Image
          className="w-full h-full object-cover rounded hover:scale-110 overflow-hidden duration-700"
          src={item.image}
          alt="market story"
          width={100}
          height={100}
        />
      </div>
      <div className="px-2 py-3">
        <h1 className="text-base font-medium my-1">{item.title}</h1>
        <p className="text-sm font-light">{item.description}</p>
      </div>
    </div>
  );
};

export default MarketStoryCard;
