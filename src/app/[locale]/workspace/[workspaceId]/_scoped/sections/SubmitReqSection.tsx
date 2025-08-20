import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export const SubmitReqSection = () => {
  return (
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
  );
};
