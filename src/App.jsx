import { Routes, Route } from 'react-router' 
import Homepage from './components/Pages/Homepage'
import ProductsList from './components/Pages/ProductsList'
import Product from './components/Pages/Product'
import NotFound from './components/Pages/NotFound'
import Checkout from './components/Pages/Checkout'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='overflow-hidden'>
      <Header/>

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/products" element={<ProductsList/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
