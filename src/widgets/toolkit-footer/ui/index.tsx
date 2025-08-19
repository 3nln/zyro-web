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
        <div className={"flex items-center text-muted-foreground gap-1 text-xs"}>
          <TbWifi />
          Online
        </div>

        <div className={"flex items-center text-muted-foreground gap-1 text-xs"}>
          <TbTable />
          Console
        </div>
      </div>

      <div className={"flex items-center gap-4"}>
        <div className={"flex items-center text-muted-foreground gap-1 text-xs"}>
          <TbCookie />
          Cookies
        </div>
        <div className={"flex items-center text-muted-foreground gap-1 text-xs"}>
          <TbInfoCircle />
        </div>
      </div>
    </div>
  );
};
