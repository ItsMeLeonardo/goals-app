import type { ReactNode } from "react";

export type FormShare = {
  url: string;
  title: string;
  image?: File;
  tags: string[];
};

export type FormShareContextType = {
  state: FormShare;
  setTitle: (title: string) => void;
  setUrl: (url: string) => void;
  setTags: (tags: string[]) => void;
  setImage: (image: File) => void;
  reset: () => void;
};

export type ProviderProps = {
  //types
  children: ReactNode;
};

export enum ActionKind {
  setUrl = "SET_URL",
  setTitle = "SET_TITLE",
  setTags = "SET_TAGS",
  setImage = "SET_IMAGE",
  reset = "RESET",
}

export type Action = {
  type: Exclude<ActionKind, ActionKind.setImage>;
  payload: string | string[];
};

export type FileAction = {
  type: ActionKind.setImage;
  payload: File;
};
