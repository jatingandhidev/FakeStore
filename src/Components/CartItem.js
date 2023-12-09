import { MdDelete } from 'react-icons/md'
import { IoIosArrowDropleft } from 'react-icons/io'
import { IoIosArrowDropright } from 'react-icons/io'
import { useEffect, useState } from 'react'

const CartItem = ({
  data,
  removeFromCart,
  id,
  updateCartItemCount,
  cartItemCount,
}) => {
  const [count, setCount] = useState(1)
  useEffect(() => {
    const itemCount = Object.keys(cartItemCount)
      .filter((key) => cartItemCount[key].id === id)
      .map((key) => cartItemCount[key].count)

    // Update count state with the new value
    setCount(Number(itemCount) || 1)
  }, [cartItemCount, id])
  return (
    <div className="card rounded-3 mb-4">
      <div className="card-body p-4">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-6 col-lg-3 col-xl-2">
            <img
              src={data.find((item) => item.id === id).image}
              className="img-fluid rounded-3"
              alt="Cotton T-shirt"
            />
          </div>
          <div className="col-md-4 col-lg-4 col-xl-2">
            <p className="lead fw-normal mb-2">
              {data.find((item) => item.id === id).title}
            </p>
            <p>
              <span className="text-muted">Rating: </span>
              {data.find((item) => item.id === id).rating.rate}
            </p>
          </div>
          <div className="col-md-12 col-lg-4 col-xl-2 d-flex m-2 d-flex justify-content-center align-items-center ">
            <button
              className="btn px-2"
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1)
                  updateCartItemCount(count - 1, id)
                } else {
                  removeFromCart(id)
                }
              }}
            >
              <IoIosArrowDropleft />
            </button>
            <div>{count}</div>
            <button
              className="btn px-2"
              onClick={() => {
                setCount(count + 1)
                updateCartItemCount(count + 1, id)
              }}
            >
              <IoIosArrowDropright />
            </button>
          </div>
          <div className="col-md-3 col-lg-4 col-xl-2 offset-lg-1 m-2">
            <h6 className="mb-0">
              <span className="text-muted">Item price: </span>$
              {data.find((item) => item.id === id).price}
            </h6>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 offset-lg-1 m-2">
            <h6 className="mb-0">
              <span className="text-muted">Price: </span>$
              {data.find((item) => item.id === id).price * count}
            </h6>
          </div>
          <div className="col-md-3 col-lg-4 col-xl-1 text-end">
            <a
              href="#!"
              className="text-danger fs-4"
              onClick={() => removeFromCart(id)}
            >
              <MdDelete />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartItem
