import axios from "axios";
import { API_DATABASE_URL } from "./base_url";

const http = axios.create({
  baseURL: API_DATABASE_URL.API_TEST,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
    "X-CSRF-TOKEN": "rEhGfZhMW5eGdI2EffF0g5kgYUwUItrjfUIDx73n",
  },
});

export default http;
