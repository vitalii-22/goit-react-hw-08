import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import { AppBar } from "../AppBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
