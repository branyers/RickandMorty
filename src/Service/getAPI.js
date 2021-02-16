import axios from "axios"

const getAPI = async(id) => {
const {data} = await axios.get(`https://rickandmortyapi.com/api/location/${id}`)
return data
}

export default getAPI


