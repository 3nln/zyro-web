import React from "react";
import { ToolkitFooter } from "@/widgets/toolkit-footer/ui";
import { ToolkitNavbar } from "@/widgets/toolkit-navbar/ui";

const Layout = ({ children }) => {
  return (
    <div className={"h-screen"}>
      <ToolkitNavbar />
      salom
      {children}
      <ToolkitFooter />
    </div>
  );
};
export default Layout;
