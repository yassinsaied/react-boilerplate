import { httpUniversity, httpJob } from "./http";

export const getUniversity = async (country) => {
  try {
    let universities = await httpUniversity.get("?country=", country);
    return universities;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
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
