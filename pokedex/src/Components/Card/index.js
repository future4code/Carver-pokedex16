import axios from "axios"
import { useEffect, useState } from "react"
import { get_PokemonGeral } from "../../API/RequestPokemon"


export default function CompCard(props) {
    const [pokemon, set_pokemon] = useState("")

    useEffect(() => {
        // console.log("props card:", props.poke.url)


        get_PokemonGeral(props.poke.url, set_pokemon)
        // console.log("effectCard:", pokemon)

    }, [props.poke])



    return(
        <div>
            <img src={pokemon !== "" ? pokemon.sprites.front_default : ''} />

        </div>
    )
}