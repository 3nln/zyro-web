"use client";
import React, { useCallback } from "react";
import { TbPointFilled } from "react-icons/tb";

export const OnlineStatus = () => {
  const isOnline = useCallback(() => navigator.onLine, []);
  return (
    <div className={"flex items-center text-muted-foreground gap-1 text-xs"}>
      <TbPointFilled className={`${isOnline() ? "text-green-500" : "text-orange-500"}`} />
      {isOnline() ? "Online" : "Offline"}
    </div>
  );
};
