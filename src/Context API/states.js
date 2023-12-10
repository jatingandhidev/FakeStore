import { useState } from 'react'

export const useCartState = () => {
  const [cart, setCart] = useState([])
  const [cartItemCount, setCartItemCount] = useState({})

  return { cart, setCart, cartItemCount, setCartItemCount }
}

// const [cart, setCart] = useState([])
// const [cartItemCount, setCartItemCount] = useState({})
