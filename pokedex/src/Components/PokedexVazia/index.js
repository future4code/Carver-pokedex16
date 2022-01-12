import pokebola from '../../img/Poke_Ball.png';

export default function pokedexVazia(){
    return(
        <div>
            <p>Sua Pokedex está vazia!</p>
            <p>Volte e pegue seus Pokémons</p>
            <img src={pokebola}/>
        </div>
    )
}