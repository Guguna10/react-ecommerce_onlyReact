import React, {useContext} from 'react'
import { CartContext } from '../../../../context/cart-context'

import Layout from "../../../shared/layout"
import CartItem from "./CartItem"
import "./CartPage.styles.scss"
import Total from "./Total"

const CartPage = () => {
    const { cartItems, itemCount, total, increase, decrease } = useContext(CartContext)
    const funcs = { increase, decrease }

    return (
        <Layout>
            <>
                <h1>cart</h1>
                {
                    cartItems.length === 0
                    ? <div className="empty-cart">Your Cart is empty</div>
                    :
                    <>
                        <div className="cart-page">
                            <div className="cart-item-container">
                                {
                                    cartItems.map(item => <CartItem{ ...item } key={item.id} {...funcs}/>)
                                }
                            </div>
                            <Total itemCount={itemCount} total={total} />
                        </div>  
                    </>
                }
            </>
        </Layout>
    )
}

export default CartPage
