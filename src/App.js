import MainMenu from "./components/main-menu";
import './App.css'
import FolderList from "./components/folder-list/FolderList";
import {folders} from "./data/folders";
function App() {
  return (
    <div className="App">
        <MainMenu />
        <FolderList folders={folders} />
    </div>
  );
}

export default App;
