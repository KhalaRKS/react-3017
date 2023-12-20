import { unstable_renderSubtreeIntoContainer } from "react-dom"

export const addItemToCart = (cartItems, product) => {
    const productInCart = cartItems.find((item) => item.id === product.id)

    // {  
    //     nombre: 'coca cola',
    //     precio: this.quantity * 400
    //     quantity: item.quantity + 1
    // }

    if(productInCart){
        return cartItems.map((item) =>
         item.id === productInCart.id ? {...item, quantity: item.quantity + 1}
         : item
         )
    }

    return [...cartItems, {...product, quantity: 1}]
}

export const removeItemFromCart = (cartItems, id) => {
    const productInCart = cartItems.find((item) => item.id === id)

    // {  
    //     nombre: 'coca cola',
    //     precio: this.quantity * 400
    //     quantity: item.quantity + 1
    // }

    if(productInCart.quantity > 1){
        return cartItems.map((item) =>
         item.id === productInCart.id ? {...item, quantity: item.quantity - 1}
         : item
         )
    }

    return cartItems.filter(item => item.id !== productInCart.id)
}

export const resetShippingCost = (cartItems, shippingCost) => {
    // [
    //        // {  
    // //     nombre: 'coca cola',
    // //     precio: this.quantity * 400
    // //     quantity: 1
    // // } 
    // ]
    if(cartItems.length === 1 && cartItems[0].quantity === 1){
        return 0;
    }
    return shippingCost;
}