import React from "react";
import { ResSection } from "@/app/[locale]/workspace/[workspaceId]/_scoped/sections/resSection/ResSection";
import { ReqSection } from "@/app/[locale]/workspace/[workspaceId]/_scoped/sections/reqSection/ReqSection";
import { SubmitReqSection } from "@/app/[locale]/workspace/[workspaceId]/_scoped/sections/SubmitReqSection";

const Page = () => {
  return (
    <div className={"w-full flex flex-col h-[calc(100vh-10rem)]"}>
      <SubmitReqSection />
      <ReqSection />
      <ResSection />
    </div>
  );
};
export default Page;
