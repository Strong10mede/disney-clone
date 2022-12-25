import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/">
            <Login />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
