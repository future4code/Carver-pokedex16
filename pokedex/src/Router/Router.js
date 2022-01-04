import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"

import PaginaDetalhes from "../Pages/PaginaDetalhes";
import PaginaInicio from "../Pages/PaginaInicio";
import PaginaPokedex from "../Pages/PaginaPokedex";
import PaginaErro from "../Pages/PaginaErro";


export default function Router() {
    return (
            <Switch>
                <Route exact path={"/"}>
                    <PaginaInicio/>
                </Route>
                <Route exact path={"/pokedex"}>
                    <PaginaPokedex/>
                </Route>  
                <Route exact path={"/poke_detalhes"}>
                    <PaginaDetalhes/>
                </Route> 
                <Route>
                    <PaginaErro/>
                </Route> 
            </Switch>
    )
}