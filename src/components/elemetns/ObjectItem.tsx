import { memo } from "react";

type ObjectItem = {
  name: string;
};

export const ObjectItemName = memo(({ name }: ObjectItem) => {
  //const [] = useObjectsListActions()
  return <li>{name}</li>;
});
