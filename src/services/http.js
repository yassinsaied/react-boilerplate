import axios from "axios";
import { API_DATABASE_URL } from "./base_url";

export const httpLogin = axios.create({
  baseURL: API_DATABASE_URL.API_EXPRESS,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
  },
});

export const httpUniversity = axios.create({
  baseURL: API_DATABASE_URL.API_FUTURAMA,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, HEAD",
    "Access-Control-Allow-Headers":
      "Authorization, Origin, X-Requested-With, Content-Type, Accept",
  },
});

export const httpFuturama = axios.create({
  baseURL: API_DATABASE_URL.API_FUTURAMA,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, HEAD",
    "Access-Control-Allow-Headers":
      "Authorization, Origin, X-Requested-With, Content-Type, Accept",
  },
});

export const httpJob = axios.create({
  baseURL: API_DATABASE_URL.API_JOB,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
  },
});

export const httpZoo = axios.create({
  baseURL: API_DATABASE_URL.API_ZOO,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
  },
});
