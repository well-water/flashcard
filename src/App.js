import MainMenu from './components/main-menu';
import './App.css';
import FolderList from './components/folder-list/FolderList';
import folders from './data/folders';


const App = () => (
  <div className="App">
    <MainMenu />
    <FolderList folders={folders} />
  </div>
);

export default App;
