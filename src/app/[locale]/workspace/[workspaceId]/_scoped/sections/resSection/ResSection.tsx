"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { Badge } from "@/shared/ui/badge";
import { ResBodyTab } from "@/app/[locale]/workspace/[workspaceId]/_scoped/sections/resSection/tabs/ResBodyTab";
import { ResCookiesTab } from "@/app/[locale]/workspace/[workspaceId]/_scoped/sections/resSection/tabs/ResCookiesTab";
import { ResHeaderTab } from "@/app/[locale]/workspace/[workspaceId]/_scoped/sections/resSection/tabs/ResHeaderTab";

export const ResSection = () => {
  return (
    <div className={"grow-1 w-full flex-1 border-t"}>
      <Tabs
        defaultValue="body"
        className={
          "overflow-x-scroll text-xs w-full wrap-break-word max-h-[40vh]"
        }
      >
        <div className={"w-full flex justify-between items-center"}>
          <TabsList>
            <TabsTrigger value="body">Body</TabsTrigger>
            <TabsTrigger value="cookies">
              Cookies <span className={"text-green-500"}>(2)</span>
            </TabsTrigger>
            <TabsTrigger value="headers">
              Headers <span className={"text-green-500"}>(16)</span>
            </TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Badge
              variant={"secondary"}
              className={"bg-green-500/20 text-green-500"}
            >
              200 OK
            </Badge>
            <Badge
              variant={"default"}
              className={"bg-transparent text-muted-foreground"}
            >
              512 ms
            </Badge>
            <Badge
              variant={"default"}
              className={"bg-transparent text-muted-foreground"}
            >
              122 KB
            </Badge>
          </div>
        </div>
        <TabsContent value="body">
          <ResBodyTab />
        </TabsContent>
        <TabsContent value="cookies">
          <ResCookiesTab />
        </TabsContent>
        <TabsContent value="headers">
          <ResHeaderTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};
