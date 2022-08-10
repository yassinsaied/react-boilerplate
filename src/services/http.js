import axios from "axios";
import { API_DATABASE_URL } from "./base_url";
// import { API_DATABASE_URL } from "./api_database";
//import { getToken } from "./get-token";

const http = axios.create({
  baseURL: API_DATABASE_URL.API_TEST,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default http;
