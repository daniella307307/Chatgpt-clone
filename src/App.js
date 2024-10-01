import "./App.css";
import Sidebar from './componets/Sidebar'
import ChatBox from './componets/ChatBox'
function App() {
  return (
    <div className="App">
      <div className="sidebar ">
        <Sidebar />
      </div>
      <div className="chatbox">
        <ChatBox />
      </div>
    </div>
  );
}

export default App;
