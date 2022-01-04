import React from "react"
import { CardTelaInicial } from "./style"


export default function PaginaInicial() {
    return(
        <CardTelaInicial>
            <img src="https://assets.pokemon.com/assets/cms2/img/misc/countries/pt/country_detail_pokemon.png"/>

            <div className="CardButton">
                <button>Adicionar a Pokedex</button>
                <button> Detalhes </button>
            </div>
        </CardTelaInicial>
    )
}