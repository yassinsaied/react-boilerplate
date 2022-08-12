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
    "Access-Control-Allow-Origin": "*",
  },
});

export default http;

// Accept: application/json
// Content-Type: application/json
// User-Agent: PostmanRuntime/7.29.2
// Postman-Token: 0de3684b-5e0c-46df-8691-f85f19d9bc3d
// Host: restapi.adequateshop.com

// Content-Length: 117
