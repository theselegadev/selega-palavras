let name_user = localStorage.getItem("name")
let h1 = document.getElementById('welcome')
let choice = localStorage.getItem("choice")
let div = document.getElementById('div')
let show_choice = document.getElementById('choice')
let word
let aux
let winner
let arrComp = []
let btn_back = document.getElementById('back')  
let inputs = document.getElementsByTagName('input')
const box_winner = document.querySelector('.box-winner') 
const box_loser = document.querySelector('.box-loser')
const background = document.getElementById('main')
background.style.filter = "blur(0px)"
const objects = ["cadeira", "mesa", "sofa", "estante", "televisao", "computador", "lampada", "armario", "cama", "criado-mudo", "mesa-de-centro", "cesto-de-roupa", "tapete", "guarda-roupa", "cadeira-de-escritorio", "ventilador", "micro-ondas", "geladeira", "fogao", "maquina-de-lavar", "secadora", "escova-de-dentes", "sabonete", "desodorante", "shampoo", "condicionador", "toalha", "fronha", "lencol", "cobertor", "travesseiro", "jogo-de-panelas", "prato", "copo", "garfo", "faca", "colher", "panela", "assadeira", "tabua-de-corte", "liquidificador", "batedeira", "cafeteira", "sanduicheira", "fogao-eletrico", "carrinho-de-compras", "trocador-de-fraldas", "cadeirao", "berco", "jogo-de-xicaras", "jogo-de-talheres", "concha", "espátula", "ragu", "bandeja", "jarra", "garrafa-termica", "caixa-organizadora", "cesta-de-frutas", "sacola-reutilizavel", "extensao", "cabos", "carregador", "suporte-para-celular", "power-bank", "notebook", "tablet", "smartphone", "relogio", "moveis-de-jardim", "parasol", "grill", "cadeiras-dobraveis", "mesa-de-picnic", "brinquedo", "jogo-de-tabuleiro", "puzzle", "bicicleta", "skate", "patinete", "prancha-de-surf", "equipamento-de-ginastica", "halteres", "tapete-de-yoga", "banco-de-madeira", "painel-decorativo", "espelho", "porta-retrato", "relogio-de-parede", "plantas", "vaso", "decoracao", "luminaria-de-mesa", "caixa-de-som", "instrumento-musical", "piano", "violao", "guitarra"]
const colors = ["vermelho", "azul", "verde", "amarelo", "preto", "branco", "cinza", "laranja", "roxo", "rosa"]
const foods = ["banana", "maça", "laranja", "abacate", "manga", "uva", "morango", "kiwi", "pera", "cereja", "tomate", "cenoura", "beterraba", "alface", "espinafre", "brocolis", "batata", "cebola", "alho", "pimentao", "milho", "arroz", "feijao", "massa", "pao", "queijo", "iogurte", "manteiga", "ovo", "carne", "frango", "peixe", "sopa", "salada", "hamburguer", "pizza", "torta", "biscoito", "chocolate", "gelatina", "sorvete", "suco", "refrigerante", "agua", "cafe", "cha", "tempero", "sal", "pimenta", "açucar", "mel", "marmelada", "geleia", "noz", "castanha", "amendoim", "coco", "tapioca", "panqueca", "crepe", "sushi", "taco", "quibe", "feijoada", "moqueca"]
const animals = ["gato", "cachorro", "papagaio", "elefante", "tigre", "leao", "girafa", "zebra", "urso", "rato", "cavalo", "ovelha", "pato", "galo", "peixe", "tubarao", "sapo", "lagarto", "tatu", "coelho", "porquinho", "pavao", "cobra", "sardinha", "gaivota", "foca", "lobo", "pantera", "jacare", "morcego", "canguru", "raposa", "doninha", "esquilo", "baleia", "golfinho", "arara", "cavalo-marinho", "corvo", "falcao", "lince", "iguana", "quati", "tamandua", "ouriço", "cangamba", "fossa", "tucano", "rendeiro", "suricata", "cacatua"]
const states_brazil = ["acre", "alagoas", "amapa", "amazonas", "bahia", "ceara", "distrito-federal", "espirito-santo", "goias", "maranhao", "mato-grosso", "mato-grosso-do-sul", "minas-gerais", "parana", "paraiba", "pernambuco", "piaui", "rio-de-janeiro", "rio-grande-do-norte", "rio-grande-do-sul", "rondonia", "roraima", "sao-paulo", "sergipe", "tocantins"]
const countries = ["afeganistao", "alemanha", "alemanha", "argelia", "argentina", "australia", "austria", "bahamas", "bangladesh", "barbados", "brasil", "canada", "chile", "china", "colombia", "costa-rica", "dinamarca", "egito", "espanha", "estados-unidos", "franca", "grecia", "holanda", "india", "indonesia", "italia", "jamaica", "japao", "mexico", "niger", "nigeria", "noruega", "nova-zelandia", "peru", "portugal", "reino-unido", "russia", "siria", "suecia", "sul-africa", "turquia", "ucrania", "venezuela", "vietna"]
const cars = ["ferrari", "lamborghini", "porsche", "mercedes-benz", "bmw", "audi", "toyota", "honda", "ford", "chevrolet", "nissan", "volkswagen", "fiat", "renault", "jeep", "subaru", "kia", "hyundai", "volvo", "maserati", "bugatti", "jaguar", "tesla", "land-rover", "peugeot", "mitsubishi","byd","alfa-romeo"]
const markups = ["nike", "adidas", "puma", "coca-cola", "pepsi", "apple", "samsung", "sony", "microsoft", "google", "facebook", "amazon", "bmw", "mercedes-benz", "audi", "toyota", "ford", "chevrolet", "honda", "volkswagen", "lg", "nokia", "lenovo", "dell", "hp", "panasonic", "asus", "xiaomi"]
const general = ["cadeira", "mesa", "sofa", "estante", "televisao", "computador", "lampada", "armario", "cama", "criado-mudo", "mesa-de-centro", "cesto-de-roupa", "tapete", "guarda-roupa", "cadeira-de-escritorio", "ventilador", "micro-ondas", "geladeira", "fogao", "maquina-de-lavar", "secadora", "escova-de-dentes", "sabonete", "desodorante", "shampoo", "condicionador", "toalha", "fronha", "lencol", "cobertor", "travesseiro", "jogo-de-panelas", "prato", "copo", "garfo", "faca", "colher", "panela", "assadeira", "tabua-de-corte", "liquidificador", "batedeira", "cafeteira", "sanduicheira", "fogao-eletrico", "carrinho-de-compras", "trocador-de-fraldas", "cadeirao", "berco", "jogo-de-xicaras", "jogo-de-talheres", "concha", "espátula", "ragu", "bandeja", "jarra", "garrafa-termica", "caixa-organizadora", "cesta-de-frutas", "sacola-reutilizavel", "extensao", "cabos", "carregador", "suporte-para-celular", "power-bank", "notebook", "tablet", "smartphone", "relogio", "moveis-de-jardim", "parasol", "grill", "cadeiras-dobraveis", "mesa-de-picnic", "brinquedo", "jogo-de-tabuleiro", "puzzle", "bicicleta", "skate", "patinete", "prancha-de-surf", "equipamento-de-ginastica", "halteres", "tapete-de-yoga", "banco-de-madeira", "painel-decorativo", "espelho", "porta-retrato", "relogio-de-parede", "plantas", "vaso", "decoracao", "luminaria-de-mesa", "caixa-de-som", "instrumento-musical", "piano", "violao", "guitarra","vermelho", "azul", "verde", "amarelo", "preto", "branco", "cinza", "laranja", "roxo", "rosa","banana", "maça", "laranja", "abacate", "manga", "uva", "morango", "kiwi", "pera", "cereja", "tomate", "cenoura", "beterraba", "alface", "espinafre", "brocolis", "batata", "cebola", "alho", "pimentao", "milho", "arroz", "feijao", "massa", "pao", "queijo", "iogurte", "manteiga", "ovo", "carne", "frango", "peixe", "sopa", "salada", "hamburguer", "pizza", "torta", "biscoito", "chocolate", "gelatina", "sorvete", "suco", "refrigerante", "agua", "cafe", "cha", "tempero", "sal", "pimenta", "açucar", "mel", "marmelada", "geleia", "noz", "castanha", "amendoim", "coco", "tapioca", "panqueca", "crepe", "sushi", "taco", "quibe", "feijoada", "moqueca","gato", "cachorro", "papagaio", "elefante", "tigre", "leao", "girafa", "zebra", "urso", "rato", "cavalo","acre", "alagoas", "amapa", "amazonas", "bahia", "ceara", "distrito-federal", "espirito-santo", "goias", "maranhao", "mato-grosso", "mato-grosso-do-sul", "minas-gerais", "parana", "paraiba", "pernambuco", "piaui", "rio-de-janeiro"]
let arrWord = []
let show_cont = 7
let show_chances = document.getElementById('show-chance')

function randomchoice(arr){
    let index = Math.floor(Math.random()*arr.length)
    word = arr[index]
}

function choiceThemeWord(c){
    if(c == 'objects'){
        randomchoice(objects)
        show_choice.innerHTML = "Objeto"
    }else if(c == 'colors'){
        randomchoice(colors)
        show_choice.innerHTML = "Cor"
    }else if(c == 'foods'){
        randomchoice(foods)
        show_choice.innerHTML = "Alimento"
    }else if(c == 'animals'){
        randomchoice(animals)
        show_choice.innerHTML = "Animal"
    }else if(c == 'states-brazil'){
        randomchoice(states_brazil)
        show_choice.innerHTML = "Estados do brasil"
    }else if(c == 'countries'){
        randomchoice(countries)
        show_choice.innerHTML = "País"
    }else if(c == 'cars'){
        randomchoice(cars)
        show_choice.innerHTML = "Carros"
    }else if(c == 'markups'){
        randomchoice(markups)
        show_choice.innerHTML = "Marcas"
    }else{
        randomchoice(general)
        show_choice.innerHTML = "Geral"
    }
    console.log(word)
}

function createInputs (arr){
    for(let i = 0; i<arr.length;i++){
        let input = document.createElement('input')
        input.type = 'text'
        input.disabled = true
        div.appendChild(input)
        if(arr[i] == '-'){
            inputs[i].style.borderBottom = 'none'
            arrComp.push('-')
        }
    }  
}


function verify(l,arr,e){
    let cont = 0
    for(let i = 0;i<arr.length;i++){
        if(arr[i] == l && winner != 'acabou'){
            inputs[i].value = l
            aux = true
            arrComp.push('')    
        }else{
            cont++
        }
    }
    console.log(arr,arrComp)
    if(cont == arr.length){
        aux = false
        cont = 0
    }
    if(aux == true && winner != 'acabou'){
        e.style.backgroundColor = 'rgb(161, 233, 133)'
        e.style.boxShadow = '0 5px 0 0 green'
        e.style.border = 'none'
        e.removeAttribute('onclick')
    }else{
        if(winner != 'acabou'){
            e.style.border = 'none'
            e.style.backgroundColor = 'rgb(233, 133, 133)'
            e.style.boxShadow = '0 5px 0 0 red'
            e.removeAttribute('onclick')
            show_cont--
            show_chances.innerHTML = show_cont
        }
    }
    if(show_cont == 0){
        box_loser.style.display = 'flex'
        background.style.filter = "blur(20px)"
        winner = 'acabou'
    }
    if(arr.length == arrComp.length){
        box_winner.style.display = 'flex'
        winner = 'acabou'
        background.style.filter = "blur(20px)"
    } 
}

h1.innerHTML = `Seja bem vindo ${name_user}`

document.addEventListener('DOMContentLoaded',function(){
    choiceThemeWord(choice)
    arrWord = word.split('')
    createInputs(arrWord)
    show_chances.innerHTML = show_cont
    winner = ''
})
