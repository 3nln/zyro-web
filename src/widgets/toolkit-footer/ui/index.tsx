import React from "react";
import { TbCookie, TbInfoCircle, TbTable, TbWifi } from "react-icons/tb";

export const ToolkitFooter = () => {
  return (
    <div
      className={
        "border-t fixed bottom-0 left-0 w-full bg-accent py-1 px-2 flex items-center justify-between"
      }
    >
      <div className={"flex items-center gap-4"}>
        <div className={"flex items-center gap-1 text-sm"}>
          <TbWifi />
          Online
        </div>

        <div className={"flex items-center gap-1 text-sm"}>
          <TbTable />
          Console
        </div>
      </div>

      <div className={"flex items-center gap-4"}>
        <div className={"flex items-center gap-1 text-sm"}>
          <TbCookie />
          Cookies
        </div>
        <div className={"flex items-center gap-1 text-sm"}>
          <TbInfoCircle />
        </div>
      </div>
    </div>
  );
};
