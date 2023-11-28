import Sidebar from "./Sidebar.tsx";
import Navigation from "./Navigation";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-background-secondary flex">
      <Sidebar />
      <div className="flex-1">
        <Navigation />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
