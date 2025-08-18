import React from "react";
import { TbCommand, TbSearch } from "react-icons/tb";

export const SearchInput = () => {
  return (
    <div>
      <div className={"flex items-center gap-4 border p-1 px-3 rounded-md"}>
        <TbSearch />
        <input
          type="text"
          placeholder={"Search..."}
          className={"focus:outline-none placeholder:text-sm focus:border-none"}
        />
        <div className={"flex items-center gap-2"}>
          <TbCommand />
          <span className={"text-sm"}>K</span>
        </div>
      </div>
    </div>
  );
};
