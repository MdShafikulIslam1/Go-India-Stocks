import Sidebar from "@/components/Sidebar";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default SidebarLayout;
