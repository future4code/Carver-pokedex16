import axios from "axios"
import { useEffect, useState } from "react"
import { get_PokemonGeral } from "../../API/RequestPokemon"


export default function CompCard(props) {
    const [pokemon, set_pokemon] = useState("")

    useEffect(() => {
        get_PokemonGeral(props.poke.url, set_pokemon)
    }, [props.poke])



    return(
        <div>
            <p>{pokemon !== "" ? pokemon.name : ''}</p>
            <img src={pokemon !== "" ? pokemon.sprites.front_default : ''} />

        </div>
    )
}