import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import { LuShoppingBag } from 'react-icons/lu'
import { useGlobalContext } from '../context'

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
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3 fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Fake Store <LuShoppingBag />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item">
                <a class="nav-link mx-2 active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2" href="/products">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2" href="/employees">
                  Employees
                </a>
              </li>
              {!userLoggedIn ? (
                <li class="nav-item">
                  <button
                    type="button"
                    class="btn btn-secondary m-1 btn-sm btn-floating"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Login
                  </button>
                </li>
              ) : (
                <li class="nav-item">
                  <div
                    class="nav-link mx-2"
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
                    class="btn btn-secondary m-1 btn-sm btn-floating"
                    onClick={() => {
                      localStorage.removeItem('loggedInUser')
                      window.location.reload()
                    }}
                  >
                    Logout
                  </button>
                </li>
              )}

              <li class="nav-item">
                <button
                  type="button"
                  class="btn m-1  btn-light btn-sm btn-floating position-relative"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasBottom"
                  aria-controls="offcanvasBottom"
                >
                  Cart <FaShoppingCart />
                  {cart.length > 0 ? (
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
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
