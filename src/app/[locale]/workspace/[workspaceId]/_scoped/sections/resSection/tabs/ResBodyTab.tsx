"use client";
import React from "react";
import { useReqData } from "@/app/[locale]/workspace/[workspaceId]/_scoped/store/useReqData";

export const ResBodyTab = () => {
  const { data } = useReqData();

  const resData = data.res.body;
  console.log(resData, "sssss");
  return (
    <div>
      <code>
        <pre>{JSON.stringify(resData, null, 2)}</pre>
      </code>
    </div>
  );
};
