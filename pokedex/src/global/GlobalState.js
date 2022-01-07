// import { get_PokemonGeral } from "../../API/RequestPokemon";
// import react, { useEffect, useState } from "react";
// import CompCard from "../../Components/Card/index";
// import { BASE_URL } from "../../constants/url_base";

import { useState, useEffect } from "react"
import { BASE_URL } from "../constants/url_base"
import GlobalStateContext from "./GlobalStateContext"
import { get_PokemonGeral } from "../API/RequestPokemon"


const GlobalState = (props) => {
    const [pokemonGeral, set_pokemonGeral] = useState([])
    const [urlPokeID, set_urlPokeID] = useState("")
    
    const [pokedex, setPokedex] = useState([])
    const [estaNaPokedex, setEstaNaPokedex] = useState(false)
    
    const [url, set_url] = useState(BASE_URL)

    useEffect(() => {
        get_PokemonGeral(url, set_pokemonGeral)
    }, [url])
    
    
    const states = {pokemonGeral, pokedex, urlPokeID}
    const setters = {set_pokemonGeral,setPokedex, set_urlPokeID}
    
    return(
        <GlobalStateContext.Provider value={{states, setters}}>
                            {props.children}
                        </GlobalStateContext.Provider>
                    )
    }

                    // const adicionarAPokedex =(poke)=>{
                    //     const novaPokedex =  {...pokedex, poke }
                    // }
                    
                // pokemonGeral.results.map((poke) => {

                        // <div key={poke} className="area-card">
                        //     <CompCard poke={poke}/>
                        //     <div className="area-card-button">
                        //         <button>Adicionar</button>
                        //         <button>Detalhes</button>
                        //     </div>
                        // </div>
            // })
    

export default GlobalState;