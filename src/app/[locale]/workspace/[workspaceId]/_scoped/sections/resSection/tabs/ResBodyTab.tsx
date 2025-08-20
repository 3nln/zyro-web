"use client";
import React from "react";
import { useReqData } from "@/app/[locale]/workspace/[workspaceId]/_scoped/store/useReqData";

export const ResBodyTab = () => {
  const { data } = useReqData();

  const resData = data.res.body;

  return (
    <div className="w-full">
      <code>
        <pre className="max-h-[37vh] overflow-x-auto whitespace-pre-wrap break-words">
          {JSON.stringify(resData, null, 2)}
        </pre>
      </code>
    </div>
  );
};
