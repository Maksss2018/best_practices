import { objectI, partiallyUpdateObjectI } from "../services/objects_rest_api";

interface objectReposotory {
  getAllObjects: () => Promise<{ data: objectI[] }>;
  getObjectByID: (id: string) => Promise<{}>;
  newObject: (data: objectI) => Promise<{}>;
  updateObject: (id: string, data: objectI) => Promise<{}>;
  partiallyUpdateObject: (
    id: string,
    data: partiallyUpdateObjectI
  ) => Promise<{}>;
  deleteObject: (id: string) => Promise<{}>;
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
