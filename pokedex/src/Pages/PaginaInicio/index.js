import "./style"
import { get_PokemonGeral } from "../../API/RequestPokemon"
import { useEffect, useState } from "react"
import CompCard from "../../Components/Card/index"
import { BASE_URL } from "../../constants/url_base"
import { StyledContainer } from "./style"

export default function PaginaInicial() {
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
                        <div key={poke} className="area-card">
                            <CompCard poke={poke}/>
                            <div className="area-card-button">
                                <button>Adicionar</button>
                                <button>Detalhes</button>
                            </div>
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
        <StyledContainer>

            <div className="area-pokes">
                {pokemonGeral !== 0 ? cardReturn() : "DEU RUIM"}
            </div>

            <div className="area-button">
                <button onClick={voltar}>Voltar</button>
                <button onClick={proxima}>Proximo</button>
            </div>

        </StyledContainer>
    )
}

        {/* <CardTelaInicial>
            <img src="https://assets.pokemon.com/assets/cms2/img/misc/countries/pt/country_detail_pokemon.png"/>

            <div className="CardButton">
                <button>Adicionar a Pokedex</button>
                <button> Detalhes </button>
            </div>
        </CardTelaInicial> */}