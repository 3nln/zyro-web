import { create } from "zustand";
import { TMethod } from "@/shared/types/request";

interface ReqData {
  method: TMethod;
  url: string | null;
  startedAt: number | null;
  finishedAt: number | null;
  duration: number | null;
  res: {
    body: any;
  };
}

interface ReqStore {
  data: ReqData;
  changeMethod: (method: TMethod) => void;
  changeUrl: (url: string) => void;
  setResBody: (resBody: any) => void;
  startRequest: () => void;
  finishRequest: () => void;
}

export const useReqData = create<ReqStore>((set) => ({
  data: {
    method: "GET",
    url: null,
    startedAt: null,
    finishedAt: null,
    duration: null,
    params: {},
    headers: {},
    body: {
      type: "",
    },
    auth: {
      type: "",
      value: "",
    },
    res: {
      body: {},
    },
  },
  changeMethod: (method: TMethod) =>
    set((state) => ({
      data: { ...state.data, method },
    })),
  changeUrl: (url) =>
    set((state) => ({
      data: { ...state.data, url },
    })),
  startRequest: () =>
    set((state) => ({
      data: {
        ...state.data,
        startedAt: Date.now(),
        finishedAt: null,
        duration: null,
      },
    })),
  finishRequest: () =>
    set((state) => ({
      data: {
        ...state.data,
        finishedAt: Date.now(),
        duration: state.data.startedAt
          ? Date.now() - state.data.startedAt
          : null,
      },
    })),
  setResBody: (resBody) =>
    set((state) => ({
      data: {
        ...state.data,
        res: {
          body: resBody,
        },
      },
    })),
}));
