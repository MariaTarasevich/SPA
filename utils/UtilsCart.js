function UtilsCart () {
  this.cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') ) : [];
  this.dataLocalStorageCatalog = JSON.parse(localStorage.getItem('catalogData'))
  
  this.addEventAddBtn = () => {
      const addCartButtons = document.querySelectorAll('.catalog__item__button-add')
      addCartButtons.forEach(addButton =>{
          addButton.addEventListener('click', (e) => {                            
               this.addToCart(e.target.id)
          })
      })
  } 

  this.checkedCart = (idProduct) => {
      return this.cart.findIndex(({id}) => id == idProduct)
  }

  this.addToCart = (idProduct) => {
      const productToCart = this.dataLocalStorageCatalog.find(({id}) => id == idProduct)
      
      if(this.checkedCart(idProduct) != -1) {
          this.cart[this.checkedCart(idProduct)].count +=1
      } else {
          productToCart.count = 1
          this.cart.push(productToCart)
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  this.addEventDelBtn = () => {
    const delFromCartBtn = document.querySelectorAll('.cart__btn-delete')
    delFromCartBtn.forEach(delBtn => {
        delBtn.addEventListener('click', (e)=>{
            console.log('aaaaaaaaaaaaaaaa')
            this.delToCart(e.target.id)
            
        })
    })
  }

  this.delToCart = (idProduct) => {
    const productFromCart = this.dataLocalStorageCatalog.find(({id}) => id == idProduct)

    this.cart.splice(this.cart.indexOf(productFromCart),1);
    localStorage.setItem('cart', JSON.stringify(this.cart))
}


    

  this.init = ()=>{
      this.addEventAddBtn()
      this.addEventDelBtn()
  }
}

const utilsCart = new UtilsCart()
export default utilsCart