import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  return (
    <Router>
      <div className="container mx-auto w-full bg-white-500">
        <Header />
        <Routes>
          <Route path="/" element={<Content addToOrder={addToOrder} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
