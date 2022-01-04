
// Sempre que quisermos trocar de página chamamos a função daqui...

export const IrParaInicio = (history) => {
    history.push("/")
}

export const IrParaDetalhes = (history) => {
    history.push("/poke_detalhes")
}

export const IrParaPokedex = (history) => {
    history.push("/pokedex")
}

export const ApenasVoltar = (history) => {
    history.back()
}