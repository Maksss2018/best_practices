import { ObjectsItemsList } from "./components/ObjectsItemsList";
import "./App.css";
import { ObjectsProvider } from "./contexts/objectsListContext";

function App() {
  return (
    <>
      <ObjectsProvider>
        <h1>Number of objects in the list: </h1>
        <div className="card">
          <ObjectsItemsList />
        </div>
      </ObjectsProvider>
    </>
  );
}

export default App;
