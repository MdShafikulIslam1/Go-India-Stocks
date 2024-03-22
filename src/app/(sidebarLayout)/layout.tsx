import Sidebar from "@/components/Sidebar";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex max-w-[1440px] mx-auto gap-6">
      <div>
        <Sidebar />
      </div>
      <div className="w-full p-2 bg-gray-50">{children}</div>
    </div>
  );
};

export default SidebarLayout;
