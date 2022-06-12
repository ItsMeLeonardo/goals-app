import type { AxiosResponse } from "axios";

export type RequestCall<RESPONSE> = {
  controller: AbortController;
  data: AxiosResponse<RESPONSE>;
};
