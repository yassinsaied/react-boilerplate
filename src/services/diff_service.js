import { httpUniversity, httpJob, httpFuturama } from "./http";

export const getUniversity = async (country) => {
  let universities = await httpUniversity.get(`search?country=${country}`);
  return universities;
};

export const getFuturama = async (typeFuturama) => {
  let result = await httpFuturama.get(`${typeFuturama}`);

  return result;
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
