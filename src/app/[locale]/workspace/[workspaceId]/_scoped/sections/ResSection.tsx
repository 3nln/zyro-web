import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { Badge } from "@/shared/ui/badge";

export const ResSection = () => {
  return (
    <div className={"grow-1 border-t"}>
      <Tabs defaultValue="params">
        <div className={"w-full flex justify-between items-center"}>
          <TabsList>
            <TabsTrigger value="params">Body</TabsTrigger>
            <TabsTrigger value="authorization">Cookies <span className={"text-green-500"}>(2)</span></TabsTrigger>
            <TabsTrigger value="headers">Headers <span className={"text-green-500"}>(16)</span></TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Badge variant={"secondary"} className={"bg-green-500/20 text-green-500"}>200 OK</Badge>
            <Badge variant={"default"} className={"bg-transparent text-muted-foreground"}>512 ms</Badge>
            <Badge variant={"default"} className={"bg-transparent text-muted-foreground"}>122 KB</Badge>
          </div>
        </div>
        <TabsContent value="params">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="authorization">
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  );
};
