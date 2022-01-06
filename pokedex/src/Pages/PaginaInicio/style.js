import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .area-card{
        display: flex;
        flex-direction: column;
        place-items: center;
        justify-content: center;
        background: var(--branco);
        margin: 5px;
        width: 150px;
        height: 150px;
        border-radius: 5px;

        .area-card-button{
            button{ 
                    width: 100px;
                    height: 30px;
                    border-radius: 5px 5px 5px 12px;
                    color: var(--branco);
                    font-weight: bold;
                    background-color: var(--primaria);
                    border: 2px solid var(--primaria);
                    transition: 0.3s;
                    cursor: pointer;

                    :hover{
                        background-color: var(--segundaria);
                        border: 2px solid var(--detalhes);
                        color: var(--detalhes);
                    }

                    :active{
                        background-color: var(--segundaria);
                        border: 2px solid var(--detalhes);
                        color: var(--branco);
                        box-shadow: 0 0 15px var(--segundaria);
                    }
                }
        }

    }

    .area-pokes{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .area-button{
        display: flex;
        justify-content: center;
    }
`

// export const CardTelaInicial = styled.div `
//     display: flex;
//     justify-content: space-between;
//     flex-direction: column;
//     border: solid 1px black;
//     width: 250px;
//     height:350px;
//     margin: 40px;

//     img {
       
//         width: 100%;
//         height: auto;
//     }

//     .CardButton{
//         display: flex;
//         justify-content:space-between;
//         /* background-color: red; */
//         align-items: center;
//         flex-direction: row;
        


//         button {
//             width:100%;
//             height:80px;

//             :hover {
//                 background-color: #2e618a;
//             }
//         }
//     }
