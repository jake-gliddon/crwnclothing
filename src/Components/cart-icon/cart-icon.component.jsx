import React, { useContext } from 'react'
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingCart} from '../../Assets/shopping-bag.svg'
import { CartContext } from '../../context/cart.context'


const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)
    const Toggle = () => setIsCartOpen(!isCartOpen)
  return (
    <div className='cart-icon-container' onClick={Toggle}>
        <ShoppingCart className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon