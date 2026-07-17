function carregar(){
    setInterval(function carregar() {
    let msg = window.document.getElementById("msg")
    let relo = window.document.getElementById("relo")
    let tempo = new Date()
    let hora = tempo.getHours()
    let minuto = tempo.getMinutes()
    let segundo = tempo.getSeconds()
    
    function converter(x){
        return x < 10 ? '0' + x : '' + x
    }

    msg.innerHTML = `${hora}:${converter(minuto)}:${converter(segundo)} <p>${tempo.toLocaleString('pt-BR', {dateStyle : 'short'})}</p>`

    if (hora >= 0 && hora <12) {
            document.body.style.background = "#94962be8"
            relo.style.color = "black" 

    }else if (hora >= 12 && hora <18) {
            
        document.body.style.background = "#944607ff"
    }else {
        document.body.style.background = "#38312bff"
    }
}
, 1000)
}



