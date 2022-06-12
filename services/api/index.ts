import axios from "axios";

const headersList = {
  Accept: "*/*",
};

export const api = axios.create({
  baseURL: "/api",
  headers: headersList,
  // params: {
  //   api_key: process.env.API_KEY || process.env.NEXT_PUBLIC_API_KEY,
  // },
});
