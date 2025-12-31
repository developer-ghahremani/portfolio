import { Outlet } from "react-router";
import Navbar from "./navbar";
import Footer from "./footer";

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
