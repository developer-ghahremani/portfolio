import { Outlet } from "react-router";
import Navbar from "./navbar";

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
