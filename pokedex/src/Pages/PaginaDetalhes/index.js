import { StyledDetalhes } from "./style"
import { IrParaInicio } from "../../Router/RouteGPS"
import { useHistory } from "react-router-dom"
import GlobalStateContext from "../../global/GlobalStateContext"
import { useContext, useState, useEffect } from "react"
import { get_PokemonGeral } from "../../API/RequestPokemon"
import { useParams } from "react-router-dom"


export default function PaginaDetalhes() {
    const {states, setters} = useContext(GlobalStateContext)
    const [detalhes, set_detalhes] = useState()

    const history = useHistory()
    const params = useParams()

    

    useEffect(() => {
        setters.set_urlPokeID(params.id)
        setters.set_detalhesUrl(`https://pokeapi.co/api/v2/pokemon/${states.urlPokeID}`)

        get_PokemonGeral(states.detalhesUrl, set_detalhes)
    }, [])


    // O useEffect abaixo atualiza os detalhes do pokemon da Pokedex porém causa Looping, para usar ele comentar o de cima.
    
    // useEffect(() => {
    //     setters.set_urlPokeID(params.id)
    //     setters.set_detalhesUrl(`https://pokeapi.co/api/v2/pokemon/${states.urlPokeID}`)

    //     get_PokemonGeral(states.detalhesUrl, set_detalhes)
    // }, [detalhes])



    

    return(
        <StyledDetalhes>
            <div className="PokeName">
                {detalhes && detalhes.name}
            </div>
            <div className="PokeDates">
                <div className="PokeImage">

                    <div className="PokeImage_front"> 
                        <img alt={detalhes && detalhes.name} src={detalhes && detalhes.sprites.front_default} />
                    </div>

                    <div className="PokeImage_back">
                        <img alt={detalhes && detalhes.name} src={detalhes && detalhes.sprites.back_default} />  
                    </div>

                    <div className="ButtonToBack">
                        <button onClick={() => IrParaInicio(history)}> Voltar </button>
                    </div>

                </div>
                <div className="PokeStats">
                    {detalhes && detalhes.types.map((type) => {
                            return <h5 key={type.type.name}> Type: {type.type.name} </h5>
                    })}

                    {detalhes && detalhes.stats.map((stat) => {
                        return <p key={stat.stat.name}><strong>{stat.stat.name}: </strong> {stat.base_stat}</p>
                    })}
                </div>
                <div className="PokeSkills">
                    <h5> Principais Skills </h5>

                    {detalhes && detalhes.moves.map((move, index) => {
                        return index < 6 && <p key={move.move.name}><strong>-)</strong> {move.move.name}</p>
                    })}

                </div>
            </div>

        </StyledDetalhes>
    )
}

{/* tipo🐞🌑🐉🌩️✨✊🏼 🔥🌿 */}