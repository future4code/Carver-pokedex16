import { useState, useEffect } from "react"
import { BASE_URL } from "../constants/url_base"
import GlobalStateContext from "./GlobalStateContext"
import { get_PokemonGeral } from "../API/RequestPokemon"

const GlobalState = (props) => {
    const [pokemonGeral, set_pokemonGeral] = useState([])
    const [urlPokeID, set_urlPokeID] = useState("")
    const [detalhesUrl, set_detalhesUrl] = useState("")
    
    const [pokedex, setPokedex] = useState([])
    const [estaNaPokedex, setEstaNaPokedex] = useState(false)
    
    const url = BASE_URL


    useEffect(() => {
        get_PokemonGeral(url, set_pokemonGeral)
        get_PokemonGeral(detalhesUrl, set_detalhesUrl)
    }, [url])
    
    
    const states = {pokemonGeral, pokedex, detalhesUrl, urlPokeID, estaNaPokedex}
    const setters = {set_pokemonGeral, set_urlPokeID, set_detalhesUrl, setPokedex, setEstaNaPokedex}
    
    return(
        <GlobalStateContext.Provider value={{states, setters}}>
                            {props.children}
                        </GlobalStateContext.Provider>
                    )
    }
    

export default GlobalState;