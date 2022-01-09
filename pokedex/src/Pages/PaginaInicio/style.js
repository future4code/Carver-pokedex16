import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    p{
            text-align: center;
            font-weight: bold;
            color: var(--detalhes);
            transition: 0.9s;

            :hover{
                color: var(--segundaria);
            }
        }
        
    .area-card{
        display: flex;
        flex-direction: column;
        place-items: center;
        justify-content: center;
        background: var(--branco);
        margin: 5px;
        margin-top: 10px;
        width: 170px;
        height: 170px;
        border-radius: 5px;
        border: 2px solid var(--primaria);
        text-transform: uppercase;

        img{
            width: 100%;
            overflow: hidden;
            transition: 1s;
            border-radius: 25%;

            :hover{
                background-color: rgba(200, 200, 200, 0.4);
                border-radius: 35%;
                transform: translateY(-6px);
                box-shadow: 0 0 5px var(--segundaria);
            }
        }



        .area-card-button{
            display: flex;
            button{ 
                    margin: 2px;
                    width: 75px;
                    height: 30px;
                    border-radius: 5px 5px 5px 5px;
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
        margin: 6px;

        .button-previous{
                    margin-right: 15px;
                    width: 125px;
                    height: 30px;
                    border-radius: 25px 5px 25px 25px;
                    color: var(--branco);
                    font-weight: bold;
                    background-color: var(--detalhes);
                    border: 2px solid var(--detalhes);
                    transition: 0.3s;
                    cursor: pointer;

                    :hover{
                        background-color: var(--primaria);
                        border: 2px solid var(--detalhes);
                        color: var(--segundaria);
                    }

                    :active{
                        background-color: var(--segundaria);
                        border: 2px solid var(--detalhes);
                        color: var(--branco);
                        box-shadow: 0 0 15px var(--detalhes);
                    }
                
            }

            .button-next{
                    margin-left: 15px;
                    width: 125px;
                    height: 30px;
                    border-radius: 5px 25px 25px 25px;
                    color: var(--branco);
                    font-weight: bold;
                    background-color: var(--detalhes);
                    border: 2px solid var(--detalhes);
                    transition: 0.3s;
                    cursor: pointer;

                    :hover{
                        background-color: var(--primaria);
                        border: 2px solid var(--detalhes);
                        color: var(--segundaria);
                    }

                    :active{
                        background-color: var(--segundaria);
                        border: 2px solid var(--detalhes);
                        color: var(--branco);
                        box-shadow: 0 0 15px var(--detalhes);
                    }
                
            }
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
