import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import { LuShoppingBag } from 'react-icons/lu'
import { useGlobalContext } from '../Context API/context'

const Navbar = () => {
  const { cart } = useGlobalContext()
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  let userLoggedIn = false
  let username

  if (localStorage.getItem('loggedInUser')) {
    let value = localStorage.getItem('loggedInUser')
    value = value.split(',')

    username = value[0]
    userLoggedIn = true
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Fake Store <LuShoppingBag />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a
                  className="nav-link mx-2 active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="/employees">
                  Employees
                </a>
              </li>
              {!userLoggedIn ? (
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-secondary m-1 btn-sm btn-floating"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Login
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <div
                    className="nav-link mx-2"
                    style={{
                      fontSize: '20px',
                      position: 'relative',
                      display: 'inline',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <FaCircleUser />
                    <span
                      style={{
                        display: isHovered ? 'block' : 'none',
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#333',
                        color: '#fff',
                        padding: '5px',
                        borderRadius: '3px',
                      }}
                    >
                      {username}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary m-1 btn-sm btn-floating"
                    onClick={() => {
                      localStorage.removeItem('loggedInUser')
                      window.location.reload()
                    }}
                  >
                    Logout
                  </button>
                </li>
              )}

              <li className="nav-item">
                <button
                  type="button"
                  className="btn m-1  btn-light btn-sm btn-floating position-relative"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasBottom"
                  aria-controls="offcanvasBottom"
                >
                  Cart <FaShoppingCart />
                  {cart.length > 0 ? (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                      {cart.length}
                    </span>
                  ) : (
                    ''
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
