import "./style";
import { get_PokemonGeral } from "../../API/RequestPokemon";
import react, { useEffect, useState } from "react";
import CompCard from "../../Components/Card/index";
import { BASE_URL } from "../../constants/url_base";


const GlobalState = (props) => {
    const [pokemonGeral, set_pokemonGeral] = useState([])
    const [url, set_url] = useState(BASE_URL)
    const [pokedex, setPokedex] = useState([])
    const [estaNaPokedex, setEstaNaPokedex] = useState(false)

useEffect(() => {
    get_PokemonGeral(url, set_pokemonGeral)
}, [url])
    
// const adicionarAPokedex =(poke)=>{
//     const novaPokedex =  {...pokedex, poke }
// }
                pokemonGeral.results.map((poke) => {
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
    

export default GlobalState;