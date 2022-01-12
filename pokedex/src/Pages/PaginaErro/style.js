import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    min-height: 80vh;
    margin-top: 20px;

    .img-text{
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 0;
        color: var(--detalhes);
    }

    .falas-esquerda{
        margin-right: 20px;
    }

    .falas-direita{
        margin-left: 20px;
    }

    .fala1{
        background: var(--branco);
        border-radius: 35px 35px 5px 35px;
        padding: 10px;
        text-align: center;
        border: 1.5px solid var(--detalhes);

        p .jessie{
        color: red;
        }

        p .james{
            color: purple;
        }
    }

    .fala2{
        background: var(--branco);
        border-radius: 35px 35px 35px 5px;
        padding: 10px;
        text-align: center;
        border: 1.5px solid var(--detalhes);
        margin-top: 45px;
    }

    .fala3{
        background: var(--branco);
        border-radius: 35px 5px 35px 35px;
        padding: 10px;
        text-align: center;
        border: 1.5px solid var(--detalhes);
        margin-top: 25px;
    }

    .fala4{
        background: var(--branco);
        border-radius: 5px 35px 35px 55px;
        padding: 10px;
        text-align: center;
        border: 1.5px solid var(--detalhes);
        margin-top: 35px;
    }

    .fala-final{
        background: var(--branco);
        border-radius: 65px 65px 35px 35px;
        padding: 10px;
        text-align: center;
        font-style: italic;
        border: 1.5px solid var(--detalhes);
        margin-top: 10px;
        width: 700px;
    }

    img{
        border-radius: 75px;
        border: 3px solid var(--detalhes);
        width: 250px;
        height: 275px;
    }

    .centro{
        display: flex;
        flex-direction: row;
    }

    button{
        margin-top: 5px;
        width: 150px;
        height: 60px;
        border-radius: 5px 5px 12px 12px;
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

`

