
// Sempre que quisermos trocar de página chamamos a função daqui...

export const IrParaInicio = (history) => {
    history.push("/")
}

export const IrParaDetalhes = (history, id) => {
    history.push(`/poke_detalhes/${id}`)
}

export const IrParaPokedex = (history) => {
    history.push("/pokedex")
}

export const ApenasVoltar = (history) => {
    history.back()
}