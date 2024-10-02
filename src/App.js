import "./App.css";
import Chatbox from './componets/ChatBox'
import LoginComponent from "./componets/LoginComponent";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Sidebar from "./componets/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route 
            path="/home" 
            element={
              <div>
                <Sidebar/>
                <Chatbox/>
              </div>
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
