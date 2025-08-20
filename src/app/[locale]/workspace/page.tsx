import React from "react";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { Link } from "@/shared/config/i18n/navigation";
import { Badge } from "@/shared/ui/badge";

const Page = () => {
  return (
    <div className={"w-full flex flex-col h-[calc(100vh-10rem)]"}>
      <div className={"flex-none"}>
        <div className={"flex items-center gap-2 w-full"}>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant={"outline"} contentEditable={true}>
                POST
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>GET</DropdownMenuItem>
              <DropdownMenuItem>POST</DropdownMenuItem>
              <DropdownMenuItem>PUT</DropdownMenuItem>
              <DropdownMenuItem>PATCH</DropdownMenuItem>
              <DropdownMenuItem>DELETE</DropdownMenuItem>
              <DropdownMenuItem>HEAD</DropdownMenuItem>
              <DropdownMenuItem>OPTIONS</DropdownMenuItem>
              {/*<DropdownMenuLabel>GET</DropdownMenuLabel>*/}
            </DropdownMenuContent>
          </DropdownMenu>
          <Input
            className={"w-full"}
            placeholder={"https://localhost:3000/dashboard"}
          />
          <Button>Send</Button>
        </div>
      </div>

      <div className={"flex-1 grow"}>
        <Tabs defaultValue="params" className="mt-4">
          <div className={"w-full flex justify-between items-center"}>
            <TabsList>
              <TabsTrigger value="params">Params <span className={"text-green-500"}>(2)</span></TabsTrigger>
              <TabsTrigger value="authorization">Authorization</TabsTrigger>
              <TabsTrigger value="headers">Headers <span className={"text-green-500"}>(12)</span></TabsTrigger>
              <TabsTrigger value="body">Body</TabsTrigger>
              <TabsTrigger value="scripts">Scripts</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <Link href={"/cookies"} className={"text-primary text-xs"}>
              Cookies
            </Link>
          </div>
          <TabsContent value="params">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="authorization">
            Change your password here.
          </TabsContent>
        </Tabs>
      </div>
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
    </div>
  );
};
export default Page;
