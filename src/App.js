import "./App.css"
import LoginComponent from './componets/LoginComponent'
import HomePage from "./componets/HomePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={<LoginComponent />} />
          <Route path="/home" Component={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

