import { objectI, partiallyUpdateObjectI } from "../services/objects_rest_api";

interface objectReposotory {
  getAllObjects: () => void;
  getObjectByID: (id: string) => void;
  newObject: (data: objectI) => void;
  updateObject: (id: string, data: objectI) => void;
  partiallyUpdateObject: (id: string, data: partiallyUpdateObjectI) => void;
  deleteObject: (id: string) => void;
}

export const objectReposotory = (api: objectReposotory) => {
  return {
    getAll: () => api.getAllObjects(),
    getByID: (id: string) => api.getObjectByID(`/${id}`),
    getByIDs: (ids: string[]) => {
      const idsString = ids.reduce((acc, nextId, i) => {
        return i !== ids.length - 1
          ? acc + `id=${nextId}&`
          : acc + `id=${nextId}`;
      }, "");
      return api.getObjectByID(`?${idsString}`);
    },
    newItem: (data: objectI) => api.newObject(data),
    updateItem: (id: string, data: objectI) => api.updateObject(id, data),
    partiallyUpdateItem: (id: string, data: partiallyUpdateObjectI) =>
      api.partiallyUpdateObject(id, data),
    deleteItem: (id: string) => api.deleteObject(id),
  };
};
