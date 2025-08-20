import React from "react";
import { TbCookie, TbInfoCircle, TbTable, TbWifi } from "react-icons/tb";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";
import { OnlineStatus } from "@/widgets/toolkit-footer/ui/OnlineStatus";

export const ToolkitFooter = () => {
  return (
    <div
      className={
        "border-t fixed bottom-0 left-0 w-full bg-accent py-1 px-2 flex items-center justify-between"
      }
    >
      <div className={"flex items-center gap-4"}>
        <OnlineStatus/>

        <div
          className={"flex items-center text-muted-foreground gap-1 text-xs"}
        >
          <TbTable />
          Console
        </div>
      </div>

      <div className={"flex items-center gap-4"}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center text-muted-foreground gap-1 text-xs cursor-default">
              <TbCookie className="size-4" />
              Cookies
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>This site uses cookies to enhance your experience.</p>
          </TooltipContent>
        </Tooltip>
        <div
          className={"flex items-center text-muted-foreground gap-1 text-xs"}
        >
          <TbInfoCircle />
        </div>
      </div>
    </div>
  );
};
