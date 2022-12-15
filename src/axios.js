import  axios from 'axios'



const  instance=axios.create({
    baseURL:'https://timbre-shop.shop/api/'
})

export default instance




