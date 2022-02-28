import nav from './Nav.js'

function Header(){
    this.creeate = () => {
        const header = document.createElement('header')
        header.classList.add('header')

        header.innerHTML = `
            <div class="container">
                <div class="wrapper">
                    <div class="header__logo">
                        <a href="/">
                            <img src="https://via.placeholder.com/100x50">
                        </a>
                    </div>
                    ${nav.outerHTML}
                </div>
            </div>`

            return header;
    }
    this.init = () => {
        return this.creeate()
    }
}

const header = new Header().init()

export default header