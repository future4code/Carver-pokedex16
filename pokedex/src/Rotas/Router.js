import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import ListaPokemons from "../Components/ListaPokemons/ListaPokemons"
import Pokedex from "../Components/Pokedex/Pokedex"
import DetalhesPoke from "../Components/DetalhesPokemon/DetalhesPoke"
import ErroPoke from "../Components/ErroPokedex/ErroPokedex"
const Router = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/lista_poke"}>
                    <ListaPokemons/>
                </Route>
                <Route exact path={"/pokedex"}>
                    <Pokedex/>
                </Route>  
                <Route exact path={"/detalhes_poke"}>
                    <DetalhesPoke/>
                </Route> 
                <Route>
                    <ErroPokedex/>
                </Route> 
            </Switch>
        </BrowserRouter>


    )
}