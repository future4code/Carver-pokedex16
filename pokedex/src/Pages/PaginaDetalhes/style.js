import styled from "styled-components";

export const StyledDetalhes = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    /* background-color: blue; */
    width: 500px;
    margin-top: 10vh;
    height: 350px;
    padding: 10px;


    .PokeName{
        display: flex;
        background-color: var(--primaria);
        width: 200px;
        height: 50px;
        margin-left: 175px;
        place-items: center;
        padding: 5px;
        justify-content: center;
        border-radius: 12px 12px 5px 5px;
        border: 2px solid var(--detalhes);
        color: var(--branco);
        font-weight: bolder;
    }

    .PokeDates{
        display: flex;
        flex-direction: row;
    }

    .PokeImage{
        margin-top: 25px;
        margin-right: 5px;

        .PokeImage_front{
            margin-top: 5px;
            border-radius: 12px 0 0 0;
            border: 2px solid var(--detalhes);
            background-image: url("https://i.pinimg.com/originals/7c/67/8b/7c678bffd31dc92dc80d95d471b0e83d.png");
            background-size: cover;
                img{
                    height: 125px;
                }
        }

        .PokeImage_back{
            margin-top: 5px;
            border-radius: 0 0 0 12px;
            border: 2px solid var(--detalhes);
            background-image: url("https://i.pinimg.com/originals/7c/67/8b/7c678bffd31dc92dc80d95d471b0e83d.png");
            background-size: cover;
            /* background: pink; */
        }

        .ButtonToBack{
            margin-top: 5px;
            text-align: end;
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

    .PokeStats{
        background-color: var(--branco);
        width: 200px;
        height: 300px;
        padding: 8px;
        border-radius: 4px 0 0 4px;
        border-top: 2px solid var(--detalhes);
        border-bottom: 2px solid var(--detalhes);
        border-left: 2px solid var(--detalhes);
        color: var(--preto)
    }

    .PokeSkills{
        width: 175px;
        background-color: var(--branco);
        padding: 8px;
        border-radius: 0 12px 12px 0;
        border-top: 2px solid var(--detalhes);
        border-bottom: 2px solid var(--detalhes);
        border-right: 2px solid var(--detalhes);
        border-left: 1px solid var(--detalhes);
        color: var(--preto)
    }
`