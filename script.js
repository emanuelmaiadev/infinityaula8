document.addEventListener('DOMContentLoaded', ()=>{
    const converterButton = document.getElementById('converter')
    const metrosInput = document.getElementById('metros')
    const unidadeDestinoSelect = document.getElementById('unidadeDestino')
    const resultadoP = document.getElementById('resultado')

    const conversao = {
        jarda: 1.094,
        pe: 3.281,
        polegada: 39.37,
        milha: 0.000621
    }

    const converter = (metros, unidade) => {
        return metros * conversao[unidade]
    }
    const exibirResultado = (valorConvertido)=> {
        resultadoP.textContent = `Resultado: ${valorConvertido.toFixed(2)}`
    }
    converterButton.addEventListener('click',()=>{
        const metros = Number(metrosInput.value)
        const unidadeDestino = unidadeDestinoSelect.value

        const valorConvertido = converter(metros, unidadeDestino)
        exibirResultado(valorConvertido)

    })
})