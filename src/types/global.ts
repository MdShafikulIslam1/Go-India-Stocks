import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface IDiscussionForumItem {
  avatar: string;
  name: string;
  designation: string;
  description: string;
  loveReact: string;
  view: string;
  comments: string;
}
export interface IMarketStoryItem {
  image: string | StaticImport;
  title: string;
  description: string;
}
