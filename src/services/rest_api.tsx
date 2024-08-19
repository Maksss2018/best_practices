import axios from "axios";

const defaultApiUrl = import.meta.env.VITE_DEFAULT_API_URL;

export const api = (apiUrl = defaultApiUrl) => {
  axios.create({
    baseURL: apiUrl,
  });
  return {
    getAllObjects: () => axios.get(`/objects`),
    getObjectByID: (id: string) => axios.get(`/objects/${id}`),
  };
};
