import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RoutLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default RoutLayout;
