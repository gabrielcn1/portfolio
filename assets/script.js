function verificar() {
    var chk = document.getElementById('chk')
    var fundo = document.getElementById('sobre')
    var titulo = document.getElementById('sobre__titulo')
    var text = document.getElementById('sobre__txt')

    if (chk.checked) {
        fundo.style.background = '#FCFFFD'
        titulo.style.color = '#000'
        titulo.style.borderColor = '#000'
        titulo.style.textShadow = '4px 4px 1px rgb(189 189 189)'
        text.style.color = '#000'
    } else {
        fundo.style.background = '#1d1e24'
        text.style.color = '#ffffff'
        titulo.style.color = '#ffffff'
        titulo.style.borderColor = '#ffffff'
        titulo.style.textShadow = '4px 4px 1px #000000'
    }
}
