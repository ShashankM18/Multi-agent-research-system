import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const runResearch = async (topic) => {
  const response = await api.post("/research", {
    topic,
  });

  return response.data;
};