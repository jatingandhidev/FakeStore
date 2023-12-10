import { useGlobalContext } from '../context'
import CartItem from '../Components/CartItem'
import { useEffect, useState } from 'react'

const Cart = () => {
  const [subTotal, setSubTotal] = useState(0)
  const { data, cart, removeFromCart, updateCartItemCount, cartItemCount } =
    useGlobalContext()

  useEffect(() => {
    const getSubTotal = () => {
      let result = 0

      if (data && data.length > 0) {
        Object.keys(cartItemCount)?.map((key, index) => {
          const itemCount = cartItemCount[key]
          const foundItem = data.find((item) => item.id === itemCount.id)

          if (foundItem) {
            result += foundItem.price * Number(itemCount.count)
          }
          return null
        })
      }
      return result
    }
    setSubTotal(getSubTotal().toFixed(2))
  }, [cartItemCount, data, cart])

  return (
    <div
      className="offcanvas offcanvas-bottom"
      tabIndex="-1"
      id="offcanvasBottom"
      aria-labelledby="offcanvasBottomLabel"
      style={{ height: '100vh' }}
    >
      <div className="offcanvas-header" style={{ background: 'silver' }}>
        <h5 className="offcanvas-title" id="offcanvasBottomLabel">
          Cart
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body small" style={{ background: 'lightgrey' }}>
        <section
          className="h-auto"
          style={{ backgroundColor: '#eee', minHeight: '90vh' }}
        >
          <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center  h-100">
              <div className="col-10">
                {cart.length > 0 && data.length > 0 ? (
                  cart.map((id) => {
                    return (
                      <CartItem
                        key={id}
                        data={data}
                        removeFromCart={removeFromCart}
                        id={id}
                        updateCartItemCount={updateCartItemCount}
                        cartItemCount={cartItemCount}
                      />
                    )
                  })
                ) : (
                  <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                      <div className="row d-flex justify-center align-items-center">
                        NO ITEMS
                      </div>
                    </div>
                  </div>
                )}

                {/* Proceed to Pay button */}
                {cart.length > 0 && data.length > 0 ? (
                  <div className="card">
                    <div className="card-body">
                      <span className="m-3 font-weight-bold fs-4">
                        Sub Total : ${subTotal}
                      </span>
                      <button
                        type="button"
                        className="btn btn-dark text-white btn-block"
                      >
                        Proceed to Pay
                      </button>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
export default Cart
