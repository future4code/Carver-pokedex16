import axios from "axios"
import { BASE_URL } from "../constants/url_base"


export const get_PokemonGeral = (url, set_data) => {
    axios.get(url)
        .then((resp) => {
            set_data(resp.data)
        })
        .catch((error) => {
        })
}