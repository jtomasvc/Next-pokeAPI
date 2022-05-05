import Axios from 'axios'

const pokeApi = Axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

export default pokeApi