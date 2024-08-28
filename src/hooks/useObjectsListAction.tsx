import { useContext } from "react";
import { ObjectsListActionsContext } from "../contexts/objectsListContext";

export const useObjectsListActions = () => {
  const objectsListActionsContext = useContext(ObjectsListActionsContext);
  if (!objectsListActionsContext)
    throw new Error("should be used with Provider");
  return objectsListActionsContext;
};
