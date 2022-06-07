import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      {/*  */}
      <Router>
        <Routes>
          {/* boshqa varaqqa otish uchun ishlatiladi */}
          <Route exact path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
