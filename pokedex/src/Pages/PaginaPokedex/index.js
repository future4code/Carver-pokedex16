import "./style"
import { get_PokemonGeral } from "../../API/RequestPokemon"
import { useContext, useEffect, useState } from "react"
import CompCard from "../../Components/Card/index"
import { BASE_URL } from "../../constants/url_base"
import { StyledContainer } from "./style"
import { IrParaDetalhes } from "../../Router/RouteGPS"
import { useHistory } from "react-router-dom"
import GlobalStateContext from "../../global/GlobalStateContext"



export default function PaginaPokedex() {
    const { states, setters } = useContext(GlobalStateContext)
    const history = useHistory()
    const tryToset_urlID = (history, id) => {

        setters.set_urlPokeID(id)

        // history.push(`/poke_detalhes/${states.urlPokeID}`)
        IrParaDetalhes(history, id)
    }

    const removerDaPokedex = (poke) => {
        const pokeIndex = states.pokedex.findIndex(
            (item) => item.name === poke.name
        )

        let novaPokedex = [...states.pokedex.splice(pokeIndex, 1)]
        setters.setPokedex(novaPokedex)
        console.log(states.pokedex)
    }

    const cardPokedex = () => {

        if (states.pokedex !== []) {
            return states.pokedex.map((poke) => {
                return (
                    <div key={poke} className="area-card">
                        <CompCard poke={poke} />

                        <div className="area-card-button">
                            <button onClick={() => removerDaPokedex(poke)} >Remover</button>
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
                {states.pokedex !== [] ? cardPokedex() : "DEU RUIM"}
            </div>

            {/* <div className="area-button">
                <button onClick={voltar}>Voltar</button>
                <button onClick={proxima}>Proximo</button>
            </div> */}

        </StyledContainer>
    )
}