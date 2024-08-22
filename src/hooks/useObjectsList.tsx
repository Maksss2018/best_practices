import { useContext } from "react";
import { ObjectsListContext } from "../contexts/objectsListContext";

export const useObjectsList = () => {
  const objectsListContext = useContext(ObjectsListContext);
  if (!objectsListContext) throw new Error("should be used with Provider");
  return objectsListContext;
};
