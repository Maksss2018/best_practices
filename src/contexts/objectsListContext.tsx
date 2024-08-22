import {
  createContext,
  PropsWithChildren,
  FC,
  useState,
  useMemo,
  useCallback,
} from "react";
import { objectReposotory } from "../repository/object_repository";
import { api } from "../services/objects_rest_api";
import { objectI } from "../services/objects_rest_api";

export const ObjectsListContext = createContext({});
export const ObjectsListActionsContext = createContext({});

const apiForRepository = api();
const repository = objectReposotory(apiForRepository);

export const ObjectsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [objectsList, setObjectsList] = useState([]);
  const numberOfObjects = objectsList.length;
  const getAll = useCallback(() => {
    repository.getAll().then((data) => {
      console.log("repository.getAll().then((data) =>");
      console.dir(data);
    });
  }, []);
  const getObjectById = useCallback((id: string) => {
    repository.getByID(id).then((data) => {
      console.log("repository.getByID(id).then((data)=>");
      console.dir(data);
    });
  }, []);
  const deleteObjectFromList = useCallback((id: string) => {
    repository.deleteItem(id).then((data) => {
      console.log("repository.deleteItem(id).then((data)=>");
      console.dir(data);
    });
  }, []);
  const updateObjectItem = useCallback((id: string, obj: objectI) => {
    repository.updateItem(id, obj).then((data) => {
      console.log("repository.deleteItem(id).then((data)=>");
      console.dir(data);
    });
  }, []);
  const objectsActions = useMemo(
    () => ({ getAll, getObjectById, deleteObjectFromList, updateObjectItem }),
    [getAll, getObjectById, deleteObjectFromList, updateObjectItem]
  );
  const objectsValues = useMemo(
    () => ({ objectsList, numberOfObjects }),
    [objectsList, numberOfObjects]
  );
  return (
    <ObjectsListContext.Provider value={objectsValues}>
      <ObjectsListActionsContext.Provider value={objectsActions}>
        {children}
      </ObjectsListActionsContext.Provider>
    </ObjectsListContext.Provider>
  );
};
