const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModul = document.querySelector('.cart');
    const cartCloseBtn = cartModul.querySelector('.cart-close');


    const openCart = () => {
        cartModul.style.display = 'flex'
    }

    const closeCart = () => {
        cartModul.style.display = ''
    }

    cartBtn.addEventListener('click', openCart)
    cartCloseBtn.addEventListener('click', closeCart)
}

export default cart
