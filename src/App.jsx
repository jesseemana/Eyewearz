import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom"
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  )
}

export default App
