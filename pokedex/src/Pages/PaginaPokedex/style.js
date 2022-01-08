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
        border: 1px solid var(--primaria);



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
    }
`


