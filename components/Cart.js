function Cart () {
    
  this.create = (cartData) => {
      const cart = document.createElement('div')
      cart.classList.add('cart')
      if(cartData.length == 0) {
          cart.innerHTML=`<div class="container">
                              <div class="cart__wrapper">
                                  <h2>Нет товаров</h2>
                              </div>
                          </div>`
      } else {
          let list="";
          cartData.forEach(({title, price, count, image}) => {
              list += `
                <div class="cart__item-wrap">
                    <p>${title}</p> <img class="cart__img" src="${image}"> quantity: ${count} price ${price*count}
                </div>
              `
              cart.innerHTML = `<div class="container">
              <div class="cart__wrapper">
                  ${list}
              </div>
          </div>`
          });
      }

      return cart
  }
  
  this.init = () => {
      const cartLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) :  []

      return this.create(cartLocalStorage)
  }
}

const cart = new Cart()
export default cart 