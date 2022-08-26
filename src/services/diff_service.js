import { httpUniversity, httpJob, httpZoo } from "./http";
import axios from "axios";

export const getUniversity = async (country) => {
  let universities = await httpZoo.get("animals/rand/10");
  console.log("checking the zoo", universities);
  return universities;
};

export const getJobs = async () => {
  try {
    let jobs = await httpJob.get("/job-board-api");
    return jobs;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};
