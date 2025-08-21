import { TMethod } from "@/shared/types/request";

export const getMethodColor = (method: TMethod): string => {
  return method === "GET"
    ? "text-green-400"
    : method === "DELETE"
      ? "text-red-400"
      : method === "POST"
        ? "text-yellow-400"
        : method === "PUT"
          ? "text-blue-400"
          : method === "PATCH"
            ? "text-pink-400"
            : method === "HEAD"
              ? "text-green-400"
              : "text-pink-700";
};
