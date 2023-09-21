import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ShoppingProvider } from "./context/shoppingContext";

function App() {
  return (
    <ShoppingProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ShoppingProvider>
  );
}

export default App;
