"use client";
import React, { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  FileText,
  Folder as FolderIcon,
} from "lucide-react";
import { useReqData } from "@/app/[locale]/workspace/[workspaceId]/_scoped/store/useReqData";
import { TMethod } from "@/shared/types/request";
import { getMethodColor } from "@/shared/lib/getMethodColor";
import { TbDots } from "react-icons/tb";

type RequestNode = {
  id: string;
  type: "request";
  name: string;
  method: TMethod;
  url: string;
};

type FolderNode = {
  id: string;
  type: "folder";
  name: string;
  children: TreeNode[];
};

type TreeNode = FolderNode | RequestNode;

// Demo data to visualize the folder tree. In a real app, this can come from a store or backend.
const demoTree: FolderNode = {
  id: "root",
  type: "folder",
  name: "My Collections",
  children: [
    {
      id: "c1",
      type: "folder",
      name: "JSONPlaceholder",
      children: [
        {
          id: "r1",
          type: "request",
          name: "List Users",
          method: "GET",
          url: "https://jsonplaceholder.typicode.com/users",
        },
        {
          id: "r2",
          type: "request",
          name: "Get User 1",
          method: "GET",
          url: "https://jsonplaceholder.typicode.com/users/1",
        },
      ],
    },
    {
      id: "c2",
      type: "folder",
      name: "Auth",
      children: [
        {
          id: "r3",
          type: "request",
          name: "Login (Demo)",
          method: "POST",
          url: "https://httpbin.org/post",
        },
      ],
    },
  ],
};

function TreeItem({
  node,
  level,
  toggle,
  expanded,
  onSelectRequest,
}: {
  node: TreeNode;
  level: number;
  expanded: Set<string>;
  toggle: (id: string) => void;
  onSelectRequest: (req: RequestNode) => void;
}) {
  const paddingLeft = 8 + level * 16; // base + indent per level

  if (node.type === "folder") {
    const isOpen = expanded.has(node.id);
    return (
      <div>
        <button
          className="w-full flex items-center gap-2 py-1 px-1 rounded hover:bg-gray-500/10"
          style={{ paddingLeft }}
          onClick={() => toggle(node.id)}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          )}
          <FolderIcon className="h-4 w-4" />
          <span className="text-sm font-medium">{node.name}</span>
          <TbDots className={"ms-auto me-2"} />
        </button>
        {isOpen && (
          <div>
            {node.children.map((child) => (
              <TreeItem
                key={child.id}
                node={child}
                level={level + 1}
                toggle={toggle}
                expanded={expanded}
                onSelectRequest={onSelectRequest}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // request node
  return (
    <button
      className="w-full flex items-center gap-2 py-1 px-1 rounded hover:bg-gray-500/10"
      style={{ paddingLeft }}
      onClick={() => onSelectRequest(node)}
    >
      <span
        className={`text-xs px-1 py-0.5 rounded bg-secondary/60 border text-foreground/80 ${getMethodColor(node.method)}`}
      >
        {node.method}
      </span>
      <span className="text-sm truncate" title={`${node.method} ${node.url}`}>
        {node.name}
      </span>
    </button>
  );
}

export const CollectionsTab = () => {
  const { changeMethod, changeUrl } = useReqData();

  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(["root", "c1"]),
  );
  const tree = useMemo(() => demoTree, []);

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSelectRequest = (req: RequestNode) => {
    changeMethod(req.method);
    changeUrl(req.url);
  };

  return (
    <div>
      <div className="py-1">
        <TreeItem
          node={tree}
          level={0}
          expanded={expanded}
          toggle={toggle}
          onSelectRequest={handleSelectRequest}
        />
      </div>
    </div>
  );
};
