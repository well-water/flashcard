import logo from './logo.svg';
import './App.css';
import Notice from "./components/notice";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Notice text="我是一个消息"/>
      </header>
    </div>
  );
}

export default App;
