import "./style"
import { StyledContainer } from "./style"
import { useHistory } from "react-router-dom"
import { IrParaInicio } from "../../Router/RouteGPS"


export default function PaginaErro() {

    const history = useHistory()

    return(
        <StyledContainer>
            <div className="centro">
                <div className="falas-esquerda">
                    <div className="fala1">
                        <p clasName="jessie"><strong>1.</strong>"Prepara-se para o Erro..."</p>
                        <p clasName="james">"...E erro em dobro!"</p>
                    </div>
                    <div className="fala3">
                        <p clasName="jessie"><strong>3.</strong>"Para denunciar os males dos Loops infinitos do servidor..."</p>
                        <p clasName="james">"...Para estender o nosso código às estelas!"</p>
                    </div>
                </div>

<div>               <h2 className="img-text"> ERROR 404 </h2>
                    <p className="img-text"> Page NOT Found </p>
                <img src="https://c.tenor.com/P--0tEUy1SwAAAAC/team-rocket-meowth.gif" alt="Erro"/>
</div>

                <div className="falas-direita">
                    <div className="fala2">
                        <p clasName="jessie"><strong>2.</strong>"Para proteger o código dos console.log e ação..."</p>
                        <p clasName="james">Para unir as informações neste Objetão!"</p>
                    </div>
                    <div className="fala4">
                        <p clasName="jessie"><strong>4.</strong>"Jessie... "</p>
                        <p clasName="james">"...James"</p>
                    </div>
                </div>
            </div>

            <div className="fala-final">
                <p clasName="jessie"><strong>5.</strong>"EQUIPE ROCKET QUEBRANDO SEU SITE NA VELOCIDADE DA LUZ..."</p>
                <p clasName="james">"...Aperte este botão agora ou se preparar para travar... travar... travar..."</p>
            </div>

            <button onClick={() => {IrParaInicio(history)}}> MIAW, corre clica aqui!!  😼 </button>
        </StyledContainer>
    )
}