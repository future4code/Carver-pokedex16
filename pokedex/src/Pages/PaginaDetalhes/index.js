import { StyledDetalhes } from "./style"
import { IrParaInicio } from "../../Router/RouteGPS"
import { useHistory } from "react-router-dom"
import GlobalStateContext from "../../global/GlobalStateContext"
import { useContext, useState, useEffect } from "react"
import { get_PokemonGeral } from "../../API/RequestPokemon"
import axios from "axios"


export default function PaginaDetalhes() {
    const {states, setters} = useContext(GlobalStateContext)
    const history = useHistory()

    const [detalhes, set_detalhes] = useState()


    const pokeAtual = states.urlPokeID
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeAtual}`

    useEffect(() => {
        // get_PokemonGeral(url, set_detalhes)

        const get_PokemonDetails = () => {
            axios.get(url)
                .then((resp) => {
                    console.log("detalhes resp", resp.data)
                    set_detalhes(resp.data)

                })
                .catch((error) => {

                })
        }

        get_PokemonDetails()
    }, [])

    const info = () => {
        console.log(pokeAtual)
    }


    return(
        <StyledDetalhes>
            <button onClick={info}>INFO.log</button>

            <div className="PokeName">
                {/* VENOSSAUR_Mock */}
                {pokeAtual}
            </div>
            <div className="PokeDates">
                <div className="PokeImage">

                    <div className="PokeImage_front">
                        <img alt="nomeFront" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" />
                    </div>

                    <div className="PokeImage_back">
                        <img alt="nomeBack" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png" />
                    </div>

                    <div className="ButtonToBack">
                        <button onClick={() => IrParaInicio(history)}> Voltar </button>
                    </div>

                </div>
                <div className="PokeStats">
                    <h3> Plant 🌿 </h3>
                    <p><strong>HP:</strong> tal</p>
                    <p><strong>ATTACK:</strong> tal</p>
                    <p><strong>DEFENSE:</strong> tal</p>
                    <p><strong>SPECIAL-ATTACK:</strong> tal</p>
                    <p><strong>SPECIAL-DEFENSE:</strong> tal</p>
                    <p><strong>SPEED:</strong> tal</p>
                </div>
                <div className="PokeSkills">
                    <h3> Principais Attacks </h3>
                    <p> - Ataques do .map </p>
                </div>
            </div>

        </StyledDetalhes>
    )
}

{/* tipo🐞🌑🐉🌩️✨✊🏼 🔥 */}
// set_urlID(`https://pokeapi.co/api/v2/pokemon/${pokemonGeral.results.name}`)

// {pokemonGeral.results ? set_urlID(`https://pokeapi.co/api/v2/pokemon/${pokemonGeral.results.name}`) : set_urlID("")}