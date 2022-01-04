import styled from "styled-components";

export const CardTelaInicial = styled.div `
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border: solid 1px black;
    width: 250px;
    height:350px;
    margin: 40px;

    img {
       
        width: 100%;
        height: auto;
    }

    .CardButton{
        display: flex;
        justify-content:space-between;
        /* background-color: red; */
        align-items: center;
        flex-direction: row;
        


        button {
            width:100%;
            height:80px;

            :hover {
                background-color: #2e618a;
            }
        }
    }

`
