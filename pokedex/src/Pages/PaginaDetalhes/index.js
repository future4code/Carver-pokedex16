import { StyledDetalhes } from "./style"
import { IrParaInicio } from "../../Router/RouteGPS"
import { useHistory } from "react-router-dom"

export default function PaginaDetalhes() {
    const history = useHistory()

    return(
        <StyledDetalhes>
            <div className="PokeType">
                {/* tipo🐞🌑🐉🌩️✨✊🏼 🔥 */}
                 Eletric 🌩️
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
                    <h3> VENOSSAUR </h3>
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