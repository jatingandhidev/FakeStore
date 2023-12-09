import './App.css'
import SharedLayout from './SharedLayout'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Employees from './Pages/Employees'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleProduct from './Pages/SingleProduct'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/employees" element={<Employees />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
