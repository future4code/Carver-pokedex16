import "./style"
import { get_PokemonGeral } from "../../API/RequestPokemon"
import { useContext, useEffect, useState } from "react"
import CompCard from "../../Components/Card/index"
import { BASE_URL } from "../../constants/url_base"
import { StyledContainer } from "./style"
import { IrParaDetalhes } from "../../Router/RouteGPS"
import { useHistory } from "react-router-dom"
import GlobalStateContext from "../../global/GlobalStateContext"
import pokedexVazia from "../../Components/PokedexVazia"



export default function PaginaPokedex(props) {
    const { states, setters } = useContext(GlobalStateContext)
    const history = useHistory()


    const tryToset_urlID = (history, id) => {
        setters.set_urlPokeID(id)
        IrParaDetalhes(history, id)
    }

    const removerDaPokedex = (pokeRemover) => {
        const pokeIndex = states.pokedex.findIndex(
            (item) => item.name === pokeRemover.name
        )

        let novaPokedex = [...states.pokedex]
        novaPokedex.splice(pokeIndex, 1)
        setters.setPokedex(novaPokedex)
    }

    const cardPokedex = () => {

        if (states.pokedex !== []) {
            return states.pokedex.map((poke) => {
                return (
                    <div key={poke.name} className="area-card">
                        <CompCard poke={poke} />

                        <div className="area-card-button">
                            <button key={poke.name} onClick={()=> removerDaPokedex(poke)} >Remover</button>
                            <button onClick={() => tryToset_urlID(history, poke.name)}>Detalhes</button>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <StyledContainer>

            <div className="area-pokes">
                {states.pokedex !== [] ? cardPokedex() : pokedexVazia() }
            </div>

        </StyledContainer>
    )
}