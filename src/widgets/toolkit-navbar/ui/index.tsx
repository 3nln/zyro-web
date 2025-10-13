import React from "react";
import { TbBell, TbLock, TbSettings } from "react-icons/tb";
import { Button } from "@/shared/ui/button";
import { ProfileAvatarDropdown } from "@/widgets/toolkit-navbar/ui/profile-avatar/ProfileAvatarDropdown";
import { SearchInput } from "@/widgets/toolkit-navbar/ui/search-input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/shared/ui/navigation-menu";

export const ToolkitNavbar = () => {
  return (
    <div className={"border-b bg-accent py-1 px-2"}>
      <div className={"flex items-center justify-between"}>
        <div>
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href={"/workspace"}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-4 py-2">
                  Workspaces
                </NavigationMenuTrigger>
                <NavigationMenuContent className={"w-full"}>
                  <NavigationMenuLink href={"#"}>
                    <div className={"flex items-center gap-2"}>
                      <TbLock /> Unical
                    </div>
                  </NavigationMenuLink>

                  <NavigationMenuLink href={"#"}>
                    <div className={"flex items-center gap-2"}>
                      <TbLock /> Felix
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink href={"#"}>
                    <div className={"flex items-center gap-2"}>
                      <TbLock /> Fazo
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href={"/about"}>About</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className={"flex items-center gap-4"}>
          <SearchInput />
        </div>
        <div className={"flex items-center gap-2"}>
          <Button variant={"ghost"} size={"icon"}>
            <TbSettings />
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            <TbBell />
          </Button>
          <ProfileAvatarDropdown />
        </div>
      </div>
    </div>
  );
};
