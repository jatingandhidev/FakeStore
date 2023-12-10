import { createContext, useContext, useState, useEffect } from 'react'
import { useCartState } from './states'
import { Functions } from './functions'
import axios from 'axios'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({ children }) => {
  const [data, setData] = useState([])

  const { cart, setCart, cartItemCount, setCartItemCount } = useCartState()
  const {
    getCartItemCount,
    getFromCart,
    updateCartItemCount,
    addToCart,
    removeFromCart,
  } = Functions()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        const data = await response.data

        setData(data)
      } catch (error) {
        console.error(error)
      }
    }

    setCartItemCount(getCartItemCount())
    fetchData()
    getFromCart()
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        cartItemCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default AppContext
