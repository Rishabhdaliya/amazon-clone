import "./App.css";
import { Header } from "./Layout/Header";
import Home from "./Layout/Home";
import { Router, Routes, Route } from "react-router-dom";
import { Checkout } from "./Components/Checkout/Checkout";
import { Login } from "./Components/Login/Login";

function App() {
  return (
    <>
      {/* <Router> */}
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
