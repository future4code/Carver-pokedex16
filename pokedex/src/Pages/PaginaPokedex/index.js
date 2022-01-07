import "./style"
import { useContext, useState } from "react"
import { useEffect } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"


export default function PaginaPokedex() {
    const {states, setters} = useContext(GlobalStateContext)

    useEffect(() => {
        // console.log(states.pokemonGeral)
    },[])

    const info = () => {
        console.log(states.pokemonGeral)
        console.log(states.urlPokeID)
    }

    return(
        <div>
            Pokedex

            <button onClick={info}>INFO</button>
        </div>
    )
}