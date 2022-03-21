import footerNav from "./footerNav.js"

function Footer(){
    this.creeate = () => {
        const footer = document.createElement('footer')
        footer.classList.add('footer')

        footer.innerHTML = `
            <div class="container">
                <div class="wrapper">
                    <div class="footer__logo">
                        <a href="/">
                        <img src="../img/logo.png" class="nav__logo">
                        </a>
                    </div>
                    ${footerNav.outerHTML}
                </div>
            </div>`

            return footer;
    }
    this.init = () => {
        return this.creeate()
    }
}

const footer = new Footer().init()

export default footer