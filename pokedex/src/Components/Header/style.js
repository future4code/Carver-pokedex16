import styled from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    height: 55px;
    background-color: var(--primaria);
    justify-content: space-between;
    h1{
        color: var(--branco);
        margin-left: 115px;
        cursor: pointer;
        transition: 0.5s;

        :hover{
            color: var(--segundaria);
        }
    }

    button{
        background: var(--detalhes);
        margin-right: 50px;
        width: 80px;
        height: 35px;
        border: 2px solid var(--primaria);
        border-radius: 8px;
        font-weight: bold;
        color: var(--branco);
        cursor: pointer;
        transition: 0.7s;

        :hover{
            background-color: var(--segundaria);
            border: 2px solid var(--detalhes);
        }

        :active{
            color: var(--detalhes);
            box-shadow: 0 0 15px var(--segundaria);
        }
    }
`