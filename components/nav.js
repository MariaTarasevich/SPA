function Nav () {
    this.create = () => {
        const nav = document.createElement('nav')
        nav.classList.add('header__nav')

        nav.innerHTML = `<ul class="header__nav__items">
                            <li class="header__nav__item"><a href="#">Home</a></li>
                            <li class="header__nav__item"><a href="#">Catalog</a></li>
                            <li class="header__nav__item"><a href="#">About</a></li>
                            <li class="header__nav__item"><a href="#">Contacts</a></li>
                        </ul>`

        return nav
    }
    this.init = () => {
        return this.create()
    }
}

const nav = new Nav().init()

export default nav