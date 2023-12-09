import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({ children }) => {
  const [data, setData] = useState([])
  const [cart, setCart] = useState([])
  const [cartItemCount, setCartItemCount] = useState({})

  const getCartItemCount = () => {
    var allCartItemCount = {}
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).includes('CartItemCount_')) {
        var key = localStorage.key(i)
        var item = localStorage.getItem(key)

        allCartItemCount[key] = JSON.parse(item)
      }
    }
    return allCartItemCount
  }

  const updateCartItemCount = (count, id) => {
    localStorage.setItem(
      `CartItemCount_${id}`,
      JSON.stringify({
        id: id,
        count: count,
      })
    )
    setCartItemCount(getCartItemCount())
  }

  const getFromCart = () => {
    const cartItemIDs = JSON.parse(localStorage.getItem('cartItemIDs'))
    if (cartItemIDs) {
      setCart(cartItemIDs)
    } else {
      setCart([])
    }
  }

  const addToCart = (id) => {
    if (!cart.includes(id)) {
      setCart([...cart, id])
      localStorage.setItem('cartItemIDs', JSON.stringify([...cart, id]))
      updateCartItemCount(1, id)
    }
  }
  const removeFromCart = (remove) => {
    setCart(cart.filter((id) => id !== remove))
    localStorage.setItem(
      'cartItemIDs',
      JSON.stringify(cart.filter((id) => id !== remove))
    )
    localStorage.removeItem(`CartItemCount_${remove}`)
    setCartItemCount(getCartItemCount())
  }
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
