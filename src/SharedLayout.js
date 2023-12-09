import { Link, Outlet } from 'react-router-dom'
import Navbar from './Sections/Navbar'
import Footer from './Sections/Footer'
import Modal from './Sections/Modal'
import Cart from './Sections/Cart'
const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <Modal />
      <Cart />
    </div>
  )
}
export default SharedLayout
