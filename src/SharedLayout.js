import { Link, Outlet } from 'react-router-dom'
import Navbar from './Sections/Navbar'
import Footer from './Sections/Footer'

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
export default SharedLayout
