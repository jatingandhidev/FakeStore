import React, { useState } from 'react'

const Modal = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  //flags
  let userFlag = false
  let passwordFlag = false
  //selecting tags
  const usernameField = document.querySelector('#username')
  const passwordField = document.querySelector('#password')
  const usernameErrorMsg = document.querySelector('#usernameError')
  const passwordErrorMsg = document.querySelector('#passwordError')

  const handleLogin = async () => {
    checkModalFields()
    if (userFlag && passwordFlag && checkLogin()) {
      localStorage.setItem('loggedInUser', [username, password])
      var modal = document.getElementById('loginModal')
      modal.querySelector('.btn-close').click()
      window.location.reload()
    }
  }

  const handleSignUp = () => {
    checkModalFields()

    if (userFlag && passwordFlag && checkUsernames()) {
      localStorage.setItem(`${username}.registered`, [username, password])
      localStorage.setItem('loggedInUser', [username, password])
      var modal = document.getElementById('loginModal')
      modal.querySelector('.btn-close').click()
      window.location.reload()
    }
  }

  const checkLogin = () => {
    let totalUsers = localStorage.length

    for (let i = 0; i < totalUsers; i++) {
      let key = localStorage.key(i)
      let value = localStorage.getItem(key)
      value = value.split(',')
      if (`${username}.registered` === key) {
        if (username === value[0] && password === value[1]) {
          return true
        }
      }
    }
    usernameField.style.border = 'solid 2px red'
    passwordField.style.border = 'solid 2px red'
    usernameErrorMsg.style.display = 'block'
    usernameErrorMsg.textContent = 'Invalid username or password'
    return false
  }

  const checkModalFields = () => {
    if (username && password) {
      if (!(username.length > 4)) {
        usernameField.style.border = 'solid 2px red'
        usernameErrorMsg.style.display = 'block'
        usernameErrorMsg.textContent =
          'Please enter a username with more than 4 characters'
        userFlag = false
      } else {
        usernameField.style.border = 'solid 1px black'
        usernameErrorMsg.style.display = 'none'
        userFlag = true
      }
      if (!(password.length > 4)) {
        passwordField.style.border = 'solid 2px red'
        passwordErrorMsg.style.display = 'block'
        passwordErrorMsg.textContent =
          'Please enter a password with more than 4 characters'
        passwordFlag = false
      } else {
        passwordField.style.border = 'solid 1px black'
        passwordErrorMsg.style.display = 'none'
        passwordFlag = true
      }
    }
  }

  const checkUsernames = () => {
    let totalUsers = localStorage.length

    for (let i = 0; i < totalUsers; i++) {
      let key = localStorage.key(i)
      let value = localStorage.getItem(key)
      value = value.split(',')
      if (value[0] === username) {
        usernameField.style.border = 'solid 2px red'
        usernameErrorMsg.style.display = 'block'
        usernameErrorMsg.textContent =
          'username already exist please use a different username'
        return false
      }
    }

    return true
  }

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="loginModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div
          className="modal-content"
          style={{ background: 'lightgrey', border: 'solid 2px black' }}
        >
          <div className="modal-header" style={{ background: 'silver' }}>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="modal-body"
            style={{ textTransform: 'capitalize', fontWeight: 'bold' }}
          >
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username:
                  <span
                    id="usernameError"
                    style={{
                      display: 'none',
                      color: 'red',
                      fontSize: '13px',
                    }}
                  >
                    Error
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ border: 'solid 1px black' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                  <span
                    id="passwordError"
                    style={{
                      display: 'none',
                      color: 'red',
                      fontSize: '13px',
                    }}
                  >
                    Error
                  </span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ border: 'solid 1px black' }}
                />
              </div>
              <button
                type="button"
                className="btn m-2 btn-light btn-lg btn-floating fs-6"
                onClick={handleLogin}
                style={{ fontWeight: 'bold', border: 'solid 1px black' }}
              >
                Login
              </button>
              <button
                type="button"
                className="btn m-2 btn-light btn-lg btn-floating fs-6"
                onClick={handleSignUp}
                style={{ fontWeight: 'bold', border: 'solid 1px black' }}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal
