    function FooterNav () {
    this.create = () => {
        const footerNav = document.createElement('nav')
        footerNav.classList.add('footerNav')

        footerNav.innerHTML = `
                            <ul class="footer__nav__items">
                            <li class="footer__nav__item"><a href="#">Home</a></li>
                            <li class="footer__nav__item"><a href="#">Catalog</a></li>
                            <li class="footer__nav__item"><a href="#">About</a></li>
                            <li class="footer__nav__item"><a href="#">Contacts</a></li>
                        </ul>`

        return footerNav
    }
    this.init = () => {
        return this.create()
    }
}

const footerNav = new FooterNav().init()

export default footerNav