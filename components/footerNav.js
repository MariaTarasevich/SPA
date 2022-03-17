


function FooterNav () {
    this.data = JSON.parse(localStorage.getItem('data'))
    this.create = () => {
        const nav = document.createElement('nav')
        let list = '';
        nav.classList.add('header__nav')

        this.data.forEach(({slug, menuTitle}) =>{
            list += `<li class="header__nav__item"><a href="#${slug}">${menuTitle}</a></li>`
        })


        nav.innerHTML = `<ul class="header__nav__items">
                            ${list}
                        </ul>`

        return nav
    }
    this.init = () => {
        return this.create()
    }
}

const footerNav = new FooterNav().init()

export default footerNav