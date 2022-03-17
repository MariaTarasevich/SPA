function App (){
    this.app
    this.init = () => {        
        this.create()
        this.getData()
    }
    this.create = () => {
        this.app = document.createElement('div')
        this.app.classList.add('app')
        document.body.appendChild(this.app);
    }
    this.getData = async () => {
        const response = await fetch('../data/data.js')
        const data = await response.text()

        setTimeout(()=>{
            localStorage.setItem('data', data)
            this.getComponentData()
        }, 0)
    }
    this.getComponentData = async () => {
        const headerData = await import('./Header.js')
        this.app.appendChild(headerData.default)
        const mainData = await import('./Main.js')
        this.app.appendChild(mainData.default)
        const footerData = await import('./Footer.js')
        this.app.appendChild(footerData.default)
    }
    this.render = () => {
        
        // import('./Header.js')
        //     .then((headerData)=> {
        //         this.app.appendChild(headerData.default)
        //         import('./Main.js')
        //             .then((mainData)=>{
        //                 this.app.appendChild(mainData.default)
        //                 import('./Footer.js')
        //                     .then((footerData)=>{
        //                         this.app.appendChild(footerData.default)
        //                     })
        //             })
        //     })
        }

    }

const app = new App().init()

export default app