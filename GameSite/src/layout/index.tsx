import { Outlet } from "react-router-dom";
import "../index.css";

const Layout: React.FC = () => {
  return (
    <div>
      <div className="w-full h-24 bg-slate-700 text-white">
        <p>GMAING</p>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
