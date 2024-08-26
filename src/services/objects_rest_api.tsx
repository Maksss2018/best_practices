import axios from "axios";

const defaultApiUrl = import.meta.env.VITE_DEFAULT_API_URL;

type objectData = {
  year: number;
  price: number;
  "CPU model": string;
  "Hard disk size": string;
};

export interface objectI {
  id: string | number;
  name: string;
  data: objectData;
}

export interface partiallyUpdateObjectI {
  id?: string | number;
  name?: string;
  data?: {
    year?: number;
    price?: number;
    "CPU model"?: string;
    "Hard disk size"?: string;
  };
}

export const api = (apiUrl = defaultApiUrl) => {
  const axiosConfigured = axios.create({
    baseURL: apiUrl,
  });
  return {
    getAllObjects: () => axiosConfigured.get(`/objects`),
    getObjectByID: (id: string) => axiosConfigured.get(`/objects${id}`),
    newObject: (data: objectI) => axiosConfigured.post("", data),
    updateObject: (id: string, data: objectI) =>
      axiosConfigured.put(`/objects/${id}`, data),
    partiallyUpdateObject: (id: string, data: partiallyUpdateObjectI) =>
      axiosConfigured.patch(`/objects/${id}`, data),
    deleteObject: (id: string) => axios.delete(`/objects/${id}`),
  };
};
