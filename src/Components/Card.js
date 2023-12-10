import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Card = ({ data }) => {
  const { title, price, description, image, id } = data

  const { addToCart } = useGlobalContext()
  return (
    <div
      className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 position-relative"
      style={{
        marginTop: '150px',
        marginBottom: '100px',
      }}
    >
      <div
        className="card top-50 start-50 translate-middle bg-dark bg-gradient"
        style={{
          width: '18rem',
          color: 'white',
          position: 'relative',
          boxShadow: '0px 20px 30px -10px rgb(38, 57, 77)',
        }}
      >
        <div
          className="card-img-top"
          style={{
            width: '288px',
            height: '288px',
            margin: 'auto',
            zIndex: '100',
            position: 'absolute',
            // top: '-144px',
            left: '50%',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundPosition: 'center',
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundColor: 'white',
            border: '2px solid white',
          }}
        />
        <div className="card-body" style={{ marginTop: '144px' }}>
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2" style={{ color: 'lightgrey' }}>
            ${price}
          </h6>
          <p className="card-text">
            {description.split(' ').slice(0, 15).join(' ')}...
          </p>
          <div
            href=""
            className="btn m-2 btn-light btn-lg btn-floating fs-6"
            onClick={() => addToCart(id)}
          >
            Add to cart
          </div>
          <Link to={`/products/${id}`}>
            <div className="btn m-2 btn-light btn-lg btn-floating fs-6">
              More info
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Card
