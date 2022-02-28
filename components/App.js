import {title} from './Head.js'
import header from './Header.js'
import main from './Main.js'
import footer from './Footer.js'

function App (){
    this.init = () => {        
        title.innerHTML = 'Hello SPA'
        this.create()
    }
    this.create = () => {
        const app = document.createElement('div')
        app.classList.add('app')
        app.appendChild(header)
        app.appendChild(main)
        app.appendChild(footer)
        document.body.appendChild(app);
    }
}

const app = new App().init()

export default app