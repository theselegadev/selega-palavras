let input = document.querySelector('#inputname')
let btn_play = document.getElementById('play')

window.onload = function(){
    localStorage.removeItem('choice')
    input.value = localStorage.getItem('name')
}

function savechoice (value){
    localStorage.removeItem('choice')
    localStorage.setItem("choice",value)
}

function savename(n){
    if(!n != ''){
        alert("[ERRO] Informe seu nome")
    }else{
        localStorage.setItem('name',n)
    }
}

function alertchoice(c){
    alert(`Você escolheu a partida de ${c}. Clique em JOGAR!`)
}

function redirection(){
    if(!input.value == ''){
        let a = document.getElementById('a')
        a.href = 'play.html'
    }
}

btn_play.addEventListener('click',()=>{
    let choice = localStorage.getItem('choice')
    if(choice == null){
        alert("Informe sua escolha.")
    }else{
        redirection()
    }
})