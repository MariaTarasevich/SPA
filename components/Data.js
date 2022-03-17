function Data() {
    this.getData = async () => {
        const response = await fetch('../data/data.js')
        const data = await response.text()
        localStorage.setItem('data', data)
    }
    this.init = () => {
        this.getData();
    }
}

const data = new Data()
export default data