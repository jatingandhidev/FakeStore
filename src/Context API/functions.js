import { useCartState } from './states'

export const Functions = () => {
  const { cart, setCart, setCartItemCount } = useCartState()
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

    if (cartItemIDs.length > 0) {
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

  return {
    getCartItemCount,
    getFromCart,
    updateCartItemCount,
    addToCart,
    removeFromCart,
  }
}

// const getCartItemCount = () => {
//   var allCartItemCount = {}
//   for (var i = 0; i < localStorage.length; i++) {
//     if (localStorage.key(i).includes('CartItemCount_')) {
//       var key = localStorage.key(i)
//       var item = localStorage.getItem(key)

//       allCartItemCount[key] = JSON.parse(item)
//     }
//   }
//   return allCartItemCount
// }

// const updateCartItemCount = (count, id) => {
//   localStorage.setItem(
//     `CartItemCount_${id}`,
//     JSON.stringify({
//       id: id,
//       count: count,
//     })
//   )
//   setCartItemCount(getCartItemCount())
// }

// const getFromCart = () => {
//   const cartItemIDs = JSON.parse(localStorage.getItem('cartItemIDs'))
//   if (cartItemIDs) {
//     setCart(cartItemIDs)
//   } else {
//     setCart([])
//   }
// }

// const addToCart = (id) => {
//   if (!cart.includes(id)) {
//     setCart([...cart, id])
//     localStorage.setItem('cartItemIDs', JSON.stringify([...cart, id]))
//     updateCartItemCount(1, id)
//   }
// }
// const removeFromCart = (remove) => {
//   setCart(cart.filter((id) => id !== remove))
//   localStorage.setItem(
//     'cartItemIDs',
//     JSON.stringify(cart.filter((id) => id !== remove))
//   )
//   localStorage.removeItem(`CartItemCount_${remove}`)
//   setCartItemCount(getCartItemCount())
// }
