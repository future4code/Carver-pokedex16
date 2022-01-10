import "./style"
import { get_PokemonGeral } from "../../API/RequestPokemon"
import { useContext, useEffect, useState } from "react"
import CompCard from "../../Components/Card/index"
import { BASE_URL } from "../../constants/url_base"
import { StyledContainer } from "./style"
import { IrParaDetalhes } from "../../Router/RouteGPS"
import { useHistory } from "react-router-dom"
import GlobalStateContext from "../../global/GlobalStateContext"

export default function PaginaInicial() {
    const [pokemonGeral, set_pokemonGeral] = useState([])
    const { states, setters } = useContext(GlobalStateContext)

    const [url, set_url] = useState(BASE_URL)

    const history = useHistory()

    useEffect(() => {
        get_PokemonGeral(url, set_pokemonGeral)
    }, [url])


    const tryToset_urlID = (history, id) => {
        setters.set_urlPokeID(id)
        setters.set_detalhesUrl(`https://pokeapi.co/api/v2/pokemon/${id}`)
        IrParaDetalhes(history, id)
    }

    const adicionarAPokedex = (pokeAdicionar) => {
        const pokeIndex = states.pokedex.findIndex((item)=> item.name === pokeAdicionar.name)
        const novaPokedex = [...states.pokedex]
        if(pokeIndex===-1) {
            const naPokedex = {...pokeAdicionar, amount: 1}
            novaPokedex.push(naPokedex)
        }else{
            alert(`${pokeAdicionar.name} já está na sua Pokedex!`)
        }
        setters.setPokedex(novaPokedex)
    }

    const cardReturn = () => {
        console.log("array PageInicio antes do .map", pokemonGeral)
        if (pokemonGeral.results) {
            return pokemonGeral.results.map((poke) => {
                return (
                    <div key={poke.name} className="area-card"
                    estaNaPokedex={false}
                    >
                        <CompCard poke={poke} />


                        <div className="area-card-button">
                            <button key={poke.name} onClick={() => adicionarAPokedex(poke)} >Adicionar</button>
                            <button onClick={() => tryToset_urlID(history, poke.name)}>Detalhes</button>

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


    return (
        <StyledContainer>
            <div className="area-button">
                <button className="button-previous" onClick={voltar}>Voltar Página</button>
                <button className="button-next" onClick={proxima}>Proxima Página</button>
            </div>

            <div className="area-pokes">
                {pokemonGeral !== 0 ? cardReturn() : "DEU RUIM"}
            </div>

            <div className="area-button">
                <button className="button-previous" onClick={voltar}>Voltar Página</button>
                <button className="button-next" onClick={proxima}>Proxima Página</button>
            </div>

        </StyledContainer>
    )
}