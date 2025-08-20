"use client";
import React, { ReactNode, useState } from "react";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";
import { FolderIcon, ListIcon, Globe2Icon, ChevronLeft, ChevronRight } from "lucide-react";

type TabKey = "items" | "collections" | "environments";

const tabs: { key: TabKey; label: string; icon: React.ElementType }[] = [
  { key: "items", label: "Items", icon: ListIcon },
  { key: "collections", label: "Collections", icon: FolderIcon },
  { key: "environments", label: "Environments", icon: Globe2Icon },
];

export const WorkspaceSidebar = ({ children }: { children?: ReactNode }) => {
  const [active, setActive] = useState<TabKey>("items");
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="flex w-full min-h-[calc(100vh-3.5rem-3rem)]">{/* account for navbar/footer heights if any */}
      {/* Left sidebar */}
      <aside className={cn(collapsed ? "w-16" : "w-72", "shrink-0 border-r bg-accent")}>
        <div className={cn("p-3 border-b flex items-center", collapsed ? "justify-center" : "justify-between")}> 
          {!collapsed && (
            <div>
              <div className="text-sm font-semibold">Workspace</div>
              <div className="text-xs text-muted-foreground">API Client</div>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={() => setCollapsed((v) => !v)}
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
        <nav className="p-2 space-y-1">
          {tabs.map(({ key, label, icon: Icon }) => (
            <Button
              key={key}
              variant={active === key ? "secondary" : "ghost"}
              className={cn(
                "w-full",
                collapsed ? "justify-center px-0" : "justify-start",
                active === key && "font-semibold"
              )}
              onClick={() => setActive(key)}
              aria-label={label}
              title={collapsed ? label : undefined}
            >
              <Icon className={cn(collapsed ? "" : "mr-2")} />
              <span className={cn(collapsed && "sr-only")}>{label}</span>
            </Button>
          ))}
        </nav>
      </aside>

      {/* Right content area */}
      <section className="flex-1 min-w-0">
        <header className="px-4 py-3 border-b flex items-center gap-3 bg-accent">
          {(() => {
            const t = tabs.find((t) => t.key === active)!;
            const Icon = t.icon;
            return (
              <>
                <Icon />
                <h2 className="text-sm font-medium">{t.label}</h2>
              </>
            );
          })()}
        </header>
        <div className="flex min-h-[calc(100vh-6rem)] space-y-6">
          <div className={"p-4 shrink-0 border-r w-[300px] bg-accent"}>
            {active === "items" && (
              <div>
                <h3 className="text-sm font-semibold mb-2">Recent Items</h3>
                <p className="text-sm text-muted-foreground">Manage individual API requests or resources here.</p>
              </div>
            )}
            {active === "collections" && (
              <div>
                <h3 className="text-sm font-semibold mb-2">Collections</h3>
                <p className="text-sm text-muted-foreground">Group related requests into collections.</p>
              </div>
            )}
            {active === "environments" && (
              <div>
                <h3 className="text-sm font-semibold mb-2">Environments</h3>
                <p className="text-sm text-muted-foreground">Configure variables for different environments.</p>
              </div>
            )}
          </div>
          <div className={"p-4 w-full"}>
            {children}
          </div>
        </div>
      </section>
    </div>
  );
};
