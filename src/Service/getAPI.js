import axios from "axios"

const getAPI = async() => {
const {data} = await axios.get(`https://rickandmortyapi.com/api/location/`)
return data
}

export default getAPI

