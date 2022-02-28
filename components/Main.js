function Main(){
    this.create = () => {
        const main = document.createElement('main')
        main.classList.add('main')

        main.innerHTML = `<div class="container">
                            <div class="main__wrapper">
                                <h2>Some text</h2>
                                <p>bla bla</p>
                            </div>
                        </div>`

    return main
    }
    this.init = () => {
        return this.create()
    }
}

const main = new Main().init()
export default main