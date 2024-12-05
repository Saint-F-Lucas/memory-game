const emojis = [
    "🍕",
    "🍕",
    "🍣",
    "🍣",
    "🍪",
    "🍪",
    "🍧",
    "🍧",
    "🍖",
    "🍖",
    "🧇",
    "🧇",
    "🥓",
    "🥓",
    "🥚",
    "🥚"
]
let openCards = []


// se random for maior que 0.5 = 2 caso não = -1, dessa forma os itens
// random da numeros entre 0 e 1, quando o numero for acima de 0.5 sera
// jogado para a frente da lista, se for abaixo sera jogado para tras
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1))

for(let i=0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item"
    box.innerHTML = shuffleEmojis[i]
    box.onclick = handleClick()
    document.querySelector(".game").appendChild(box)
}


function handleClick () {
    
}