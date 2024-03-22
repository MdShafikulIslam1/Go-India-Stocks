"use client";
import { useState } from "react";
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { GoCommentDiscussion } from "react-icons/go";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { RiDashboardLine } from "react-icons/ri";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const menuItems = [
    {
      title: "Discussion Forum",
      icon: <GoCommentDiscussion />,
      submenu: true,
      submenuItems: [
        {
          title: "submenu1",
        },
        {
          title: "submenu1",
        },
        {
          title: "submenu1",
        },
      ],
    },
    {
      title: "Market Stories",
      icon: <HiOutlineCurrencyDollar />,
    },
    {
      title: "Sentiment",
    },
    {
      title: "Market",
    },
    {
      title: "Sector",
    },
    {
      title: "Watchlist",
    },
    {
      title: "Events",
    },
    {
      title: "News/Interview",
    },
  ];
  return (
    <div>
      <div
        className={`bg-[#2a2b89] text-white ${
          open ? "w-52 md:w-72" : "w-0"
        } duration-500 p-5 relative h-screen`}
      >
        <BsArrowLeftShort
          className={`bg-[#2a2b89] text-white rounded-full absolute -right-3 top-1/2 text-3xl border border-gray-600 cursor-pointer ${
            !open && "rotate-180"
          } `}
          onClick={() => setOpen(!open)}
        />
        <div className={`${!open && "hidden"}`}>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 justify-center items-center">
              <CiUser size={30} className="text-2xl" />
              <h1 className="text-2xl">Hello ,User</h1>
            </div>
            <IoMdNotifications size={30} className="text-2xl" />
          </div>
          <div className="border-b-2 border-yellow-500 mt-4" />
          <ul className="pt-2">
            {menuItems.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`hover:bg-indigo-300 p-2 rounded cursor-pointer text-sm  flex items-center gap-x-2 mt-2 `}
                >
                  <span className="text-2xl block float-left">
                    {menu.icon ? menu.icon : <RiDashboardLine />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-700 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                  {menu.submenu && open && (
                    <BsChevronDown
                      className={`${submenuOpen && "rotate-180"}`}
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                    />
                  )}
                </li>
                {menu.submenu && open && submenuOpen && (
                  <ul>
                    {menu.submenuItems.map((submenu, index) => (
                      <li
                        key={index}
                        className={`hover:bg-indigo-300 p-2 rounded cursor-pointer text-sm  flex items-center gap-x-2 px-4 mt-2`}
                      >
                        <span>{submenu.title}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
