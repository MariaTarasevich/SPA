function Catalog() {

    this.getCatalogData = async () => {
        let data = [];

        if (localStorage.getItem('catalogData')) {
            data = JSON.parse(localStorage.getItem('catalogData'))
        } else {
            const response = await fetch('https://fakestoreapi.com/products')
            data = await response.json()
            localStorage.setItem('catalogData', JSON.stringify(data))
        }
        return data
    }

    this.create = (data) => {
        const catalog = document.createElement('div')
        catalog.classList.add('catalog')

        let listItem = '';

        data.forEach(({ title, id, image, price }) => {
            listItem += `<li class="catalog__item"><a href="#catalog/${id}">
                        <div class="catalog__item__image">
                            <img src="${image}">
                        </div>
                        <div class="catalog__item__description">
                            <div class="catalog__item__title"><a href="#catalog/${id}">${title}</a></div>
                            <div class="catalog__item__option">
                                <div class="catalog__item__price">${price} BYN.</div>
                                <button id="${id}" class="catalog__item__button-add">В корзину</button>
                            </div>
                        </div></a>
                    </li>`

        });

        catalog.innerHTML = `<div class="container">
                                <div class="catalog__wrapper">
                                    <ul class="catalog__items">
                                        ${listItem}
                                    </ul>
                                </div>
                            </div>`
        return catalog
    },

        this.createProduct = ({ title, description, image, id, price, category }) => {
            const product = document.createElement('div')
            product.classList.add('product')

            product.innerHTML = `
            <div class="product__wraper">
                <div class="product__wrap-title">
                    <h1>${title}</h1>
                    <h2>${category}</h2>
                    <img src="${image}">
                </div>
                <div class="product__description-wrap">
                    <p>${description}</p>
                    <div class="product__add-wrap">
                        <p>${price} BYN</p>
                        <button id="${id}" class="catalog__item__button-add">add to cart</button>
                    </div>
                </div>
            </div>
        `
            return product
        }

    this.getProductData = (data) => {
        const idProduct = location.hash.split('/')[1]
        const productData = data.filter(({ id }) => id == idProduct)
        return productData[0]
    }

    this.init = async () => {
        const data = await this.getCatalogData();
        if (location.hash.includes('/')) {
            const productData = this.getProductData(data)
            return this.createProduct(productData)
        } else {
            return this.create(data)
        }
    }
}

const catalog = new Catalog()

export default catalog