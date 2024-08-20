import axios from "axios";

const defaultApiUrl = import.meta.env.VITE_DEFAULT_API_URL;

type objectData = {
  year: number;
  price: number;
  "CPU model": string;
  "Hard disk size": string;
};

export interface objectI {
  name: string;
  data: objectData;
}

export interface partiallyUpdateObjectI {
  name?: string;
  data?: {
    year?: number;
    price?: number;
    "CPU model"?: string;
    "Hard disk size"?: string;
  };
}

export const api = (apiUrl = defaultApiUrl) => {
  axios.create({
    baseURL: apiUrl,
  });
  return {
    getAllObjects: () => axios.get(`/objects`),
    getObjectByID: (id: string) => axios.get(`/objects${id}`),
    newObject: (data: objectI) => axios.post("", data),
    updateObject: (id: string, data: objectI) =>
      axios.put(`/objects/${id}`, data),
    partiallyUpdateObject: (id: string, data: partiallyUpdateObjectI) =>
      axios.patch(`/objects/${id}`, data),
    deleteObject: (id: string) => axios.delete(`/objects/${id}`),
  };
};
