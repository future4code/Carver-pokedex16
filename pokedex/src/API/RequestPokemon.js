import axios from "axios"
import { BASE_URL } from "../constants/url_base"

// ?limit=20
export const get_PokemonGeral = (url, set_data) => {
    // console.log("url:", url)
    axios.get(url)
        .then((resp) => {
            // console.log("resp:", resp.data)
            set_data(resp.data)
        })
        .catch((error) => {
            // console.log("erro:", error)
        })
}