import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'

const SingleProduct = () => {
  const { id } = useParams()
  const { data, addToCart } = useGlobalContext()
  const product = data.find((product) => product.id === Number(id))
  return (
    <div
      className="container mx-auto"
      style={{
        marginTop: '72px',
        minHeight: `calc(100vh - 272px)`,
        paddingTop: '30px',
      }}
    >
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="row">
              {product ? (
                <>
                  <div className="col-md-6">
                    <div className="images p-3">
                      <div className="text-center p-4">
                        <img
                          id="main-image"
                          src={product.image}
                          alt="product"
                          width="250"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product p-4">
                      <div className="mt-4 mb-3">
                        <h5 className="text-uppercase">{product.title}</h5>
                        <div className="price d-flex flex-row align-items-center">
                          <span className="act-price">${product.price}</span>
                        </div>
                        <span className="text-muted">
                          Rating: {product.rating.rate}
                        </span>
                      </div>
                      <p className="about text-capitalize">
                        {product.description}
                      </p>

                      <div className="cart mt-4 align-items-center">
                        <button
                          className="btn btn-dark text-white btn-floating mr-2 px-4"
                          onClick={() => addToCart(Number(id))}
                        >
                          Add to cart
                        </button>
                        <i className="fa fa-heart text-muted"></i>
                        <i className="fa fa-share-alt text-muted"></i>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div>LOADING.....</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleProduct
