"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { Link } from "@/shared/config/i18n/navigation";
import { ReqParamsTab } from "@/app/[locale]/workspace/[workspaceId]/_scoped/sections/reqSection/tabs/ReqParamsTab";
import { ReqAuthorizationTab } from "@/app/[locale]/workspace/[workspaceId]/_scoped/sections/reqSection/tabs/ReqAuthorizationTab";
import { ReqHeadersTab } from "@/app/[locale]/workspace/[workspaceId]/_scoped/sections/reqSection/tabs/ReqHeadersTab";
import { ReqBodyTab } from "@/app/[locale]/workspace/[workspaceId]/_scoped/sections/reqSection/tabs/ReqBodyTab";
export const ReqSection = () => {
  return (
    <div className={"flex-1 grow"}>
      <Tabs defaultValue="params" className="mt-4">
        <div className={"w-full flex justify-between items-center"}>
          <TabsList>
            <TabsTrigger value="params">
              Params <span className={"text-green-500 text-xs"}>(2)</span>
            </TabsTrigger>
            <TabsTrigger value="authorization">Authorization</TabsTrigger>
            <TabsTrigger value="headers">
              Headers <span className={"text-green-500 text-xs"}>(12)</span>
            </TabsTrigger>
            <TabsTrigger value="body">Body</TabsTrigger>
            {/* <TabsTrigger value="scripts">Scripts</TabsTrigger> */}
            {/* <TabsTrigger value="settings">Settings</TabsTrigger> */}
          </TabsList>
          <Link href={"/cookies"} className={"text-primary text-xs"}>
            Cookies
          </Link>
        </div>
        <TabsContent value="params">
          <ReqParamsTab />
        </TabsContent>
        <TabsContent value="authorization">
          <ReqAuthorizationTab />
        </TabsContent>
        <TabsContent value="headers">
          <ReqHeadersTab />
        </TabsContent>
        <TabsContent value="body">
          <ReqBodyTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};
