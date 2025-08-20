"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useReqData } from "@/app/[locale]/workspace/[workspaceId]/_scoped/store/useReqData";
import { REQ_TYPES } from "@/shared/constants/request";
import axios from "axios";

export const SubmitReqSection = () => {
  const { data, changeUrl, changeMethod, setResBody } = useReqData();
  const { url, method } = data;

  const handleSubmit = async () => {
    if (!url) return;

    try {
      const res = await axios({ method, url: `/api/proxy/?url=${url}` });
      setResBody(res.data);
    } catch (err) {}
  };

  return (
    <div className={"flex-none"}>
      <div className={"flex items-center gap-2 w-full"}>
        <DropdownMenu>
          <DropdownMenuTrigger className={"focus:outline-none"}>
            <Button className={"min-w-[100px]"} variant={"outline"}>
              {method}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {REQ_TYPES.map((type) => (
              <DropdownMenuItem key={type} onSelect={() => changeMethod(type)}>
                {type}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Input
          className={"w-full"}
          placeholder={"https://localhost:3000/dashboard"}
          value={url || ""}
          onChange={(e) => changeUrl(e.target.value)}
        />
        <Button onClick={handleSubmit}>Send</Button>
      </div>
    </div>
  );
};
