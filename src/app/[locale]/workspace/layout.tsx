import React, { ReactNode } from "react";
import { ToolkitFooter } from "@/widgets/toolkit-footer/ui";
import { ToolkitNavbar } from "@/widgets/toolkit-navbar/ui";
import { WorkspaceSidebar } from "@/widgets/workspace-sidebar/ui";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ToolkitNavbar />
      <div className="flex-1 flex">
        <WorkspaceSidebar>{children}</WorkspaceSidebar>
      </div>
      <ToolkitFooter />
    </div>
  );
};
export default Layout;
