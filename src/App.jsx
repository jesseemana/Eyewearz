import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Male from './pages/Male'
import Kids from './pages/Kids'
import Female from './pages/Female'
import SunGlasses from './pages/SunGlasses'
import EyeGlasses from './pages/EyeGlasses'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/men' element={<Male />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/women' element={<Female />} />
        <Route path='/sunglasses' element={<SunGlasses />} />
        <Route path='/eyeglasses' element={<EyeGlasses />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
