import "./style"
import { get_PokemonGeral } from "../../API/RequestPokemon"
import { useEffect, useState } from "react"
import CompCard from "../../Components/Card/index"
import { BASE_URL } from "../../constants/url_base"


export default function PaginaErro() {
    const [pokemonGeral, set_pokemonGeral] = useState([])
    const [url, set_url] = useState(BASE_URL)


    useEffect(() => {
        get_PokemonGeral(url, set_pokemonGeral)
    }, [url])


    const cardReturn = () => {
        console.log("array", pokemonGeral)
            if(pokemonGeral.results){
                return pokemonGeral.results.map((poke) => {
                    return(
                        <div key={poke}>
                            <CompCard poke={poke}/>
                        </div>
                )
            })
        }
    }
    
    const proxima = () => {
        pokemonGeral !== 0 ? console.log("proxima", pokemonGeral.next) : console.log("DEU RUIM")
        set_url(pokemonGeral.next)
    }

    const voltar = () => {
        pokemonGeral !== 0 ? console.log("proxima", pokemonGeral.previous) : console.log("DEU RUIM")
        set_url(pokemonGeral.previous)
    }

    
    return(
        <div>
            {/* ERRO 404 - Corre que a tela azul vem. */}
            <button onClick={voltar}>Voltar</button>
            <button onClick={proxima}>Proximo</button>
            <div>
                <button onClick={() => get_PokemonGeral(url, set_pokemonGeral)}> INFO </button>
                {pokemonGeral !== 0 ? cardReturn() : "DEU RUIM"}
            </div>
        </div>
    )
}