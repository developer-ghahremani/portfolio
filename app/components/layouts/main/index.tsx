import React from "react";
import { Outlet } from "react-router";

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <p>Main Layout</p>
      <Outlet />
    </div>
  );
};

export default MainLayout;
