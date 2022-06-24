import type { ReactNode } from "react";
import type { AutocompleteItem } from "components/Pages/Share/AutocompleteTag/types";

export type FormShare = {
  url: string;
  title: string;
  image?: File;
  tags: AutocompleteItem[];
};

export type FormShareContextType = {
  state: FormShare;
  setTitle: (title: string) => void;
  setUrl: (url: string) => void;
  setTags: (tags: AutocompleteItem[]) => void;
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
  payload: string | AutocompleteItem[];
};

export type FileAction = {
  type: ActionKind.setImage;
  payload: File;
};
