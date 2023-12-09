import { FaFacebookF } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const buttonStyle = {
  backgroundColor: 'lightblue',
}

const Footer = () => {
  return (
    <div className="container-fluid gx-0">
      <footer className="text-center text-lg-start bg-light">
        <div className="container d-flex justify-content-center py-5">
          <button
            type="button"
            className="btn btn-light btn-lg btn-floating mx-2 rounded-circle"
          >
            <FaFacebookF />
          </button>
          <button
            type="button"
            className="btn btn-light btn-lg btn-floating mx-2 rounded-circle"
          >
            <FaYoutube />
          </button>
          <button
            type="button"
            className="btn btn-light btn-lg btn-floating mx-2 rounded-circle"
          >
            <FaInstagram />
          </button>
          <button
            type="button"
            className="btn btn-light btn-lg btn-floating mx-2 rounded-circle"
          >
            <FaTwitter />
          </button>
        </div>

        <div className="text-center text-white p-3 bg-dark" style={buttonStyle}>
          © 2023 Copyright:
          <a className="text-white" href="https://fakestoreapi.com/">
            fakestoreapi.com
          </a>
        </div>
      </footer>
    </div>
  )
}
export default Footer
