import { ObjectItemName } from "./elemetns/ObjectItemName";
import { useObjectsList } from "../hooks/useObjectsList";

export const ObjectsItemsList = () => {
  const { objectsList } = useObjectsList();
  return (
    <ul>
      {objectsList.map(({ name, id }) => (
        <ObjectItemName key={`itemsa-in-the-list${id}`} name={name} />
      ))}
    </ul>
  );
};
