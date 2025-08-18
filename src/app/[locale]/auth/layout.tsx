import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={"h-screen flex flex-col items-center justify-center"}>
      {children}
    </div>
  );
};
export default Layout;
