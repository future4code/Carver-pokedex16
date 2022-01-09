import { StyledHeader } from "./style"
import { IrParaInicio, IrParaPokedex } from "../../Router/RouteGPS"
import { useHistory } from "react-router-dom"
import { useEffect } from "react"

export default function CompHeader() {
    const history = useHistory()

    // useEffect(()=> {
    //     console.log("history", history)

    // }, [history])

    return(
        <StyledHeader>
            <h1 onClick={() => {IrParaInicio(history)}}>LABEPOKE</h1>

            <button onClick={() => {IrParaPokedex(history)}}> Pokedex </button>
        </StyledHeader>
    )
}