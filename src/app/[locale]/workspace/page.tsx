import React from "react";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs"
import { Link } from "@/shared/config/i18n/navigation";

const Page = () => {
  return (
    <div className={"w-full flex flex-col h-[calc(100vh-10rem)]"}>
      <div className={"flex-none"}>
        <div className={"flex items-center gap-2 w-full"}>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant={"outline"} contentEditable={true}>POST</Button>
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
          <Input className={"w-full"} placeholder={"https://localhost:3000/dashboard"}/>
          <Button>Send</Button>
        </div>
      </div>

      <div className={"flex-1 grow"}>
        <Tabs defaultValue="account" className="mt-4">
          <div className={"w-full flex justify-between items-center"}>
            <TabsList>
              <TabsTrigger value="params">Params</TabsTrigger>
              <TabsTrigger value="authorization">Authorization</TabsTrigger>
              <TabsTrigger value="headers">Headers</TabsTrigger>
              <TabsTrigger value="body">Body</TabsTrigger>
              <TabsTrigger value="scripts">Scripts</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <Link href={"/cookies"} className={"text-primary text-xs"}>Cookies</Link>
          </div>
          <TabsContent value="params">Make changes to your account here.</TabsContent>
          <TabsContent value="authorization">Change your password here.</TabsContent>
        </Tabs>
      </div>
      <div className={"grow border-t py-4"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque dignissimos ea eligendi excepturi exercitationem harum incidunt maxime molestias mollitia neque optio pariatur perspiciatis quam qui quibusdam, recusandae reprehenderit sed, sint voluptas. Corporis distinctio doloribus praesentium rem repudiandae ullam? Animi culpa expedita facere hic, illo, illum ipsa ipsam iste maxime natus nesciunt obcaecati ratione recusandae totam voluptatem? Animi aspernatur dolorum, eaque eum expedita fugiat illo in ipsa ipsam, maiores maxime numquam obcaecati possimus quae quasi sapiente veritatis? Adipisci amet, architecto cum deserunt dolor eum fugiat, harum hic inventore laudantium maiores minus molestias porro, possimus quae quas quia quod temporibus ullam.
      </div>
    </div>
  );
};
export default Page;
