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

    h5{
        margin: 0;
        margin-top: 7px;
    }


    .PokeName{
        display: flex;
        background-color: var(--primaria);
        width: 200px;
        min-height: 20px;
        margin-left: 175px;
        place-items: center;
        padding: 5px;
        justify-content: center;
        border-radius: 12px 12px 5px 5px;
        border: 2px solid var(--detalhes);
        color: var(--branco);
        font-weight: bolder;
        text-transform: uppercase;
    }

    .PokeDates{
        display: flex;
        flex-direction: row;
    }

    .PokeImage{
        margin-top: 25px;
        margin-right: 5px;

        .PokeImage_front{
            min-width: 125px;
            height: 115px;
            margin-top: 5px;
            border-radius: 12px 0 0 0;
            border: 2px solid var(--detalhes);
            background-image: url("https://i.pinimg.com/originals/7c/67/8b/7c678bffd31dc92dc80d95d471b0e83d.png");
            background-size: cover;
                img{
                    height: 125px;
                    overflow: hidden;
                    transition: 0.8s;
                    animation: pokeEffect 5s linear infinite;
                    }
                @keyframes pokeEffect {
                    from{ transform: translateY(1px)}
                    to{transform: translateY(-1px), transform: translateY(-0.25px)}
                }
            }
        }

        .PokeImage_back{
            min-width: 125px;
            min-height: 100px;
            margin-top: 5px;
            border-radius: 0 0 0 12px;
            border: 2px solid var(--detalhes);
            background-image: url("https://i.pinimg.com/originals/7c/67/8b/7c678bffd31dc92dc80d95d471b0e83d.png");
            background-size: cover;
                img{
                    transform: translateX(10px);
                }
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