const emojis = [
  '🍕',
  '🍕',
  '🍣',
  '🍣',
  '🍪',
  '🍪',
  '🍧',
  '🍧',
  '🍖',
  '🍖',
  '🧇',
  '🧇',
  '🥓',
  '🥓',
  '🥚',
  '🥚'
]
let openCards = []

// se random for maior que 0.5 = 2 caso não = -1, dessa forma os itens
// random da numeros entre 0 e 1, quando o numero for acima de 0.5 sera
// jogado para a frente da lista, se for abaixo sera jogado para tras
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1))

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement('div')
  box.className = 'item'
  box.innerHTML = shuffleEmojis[i]
  // note que se fosse escrito handleClick a funcao seria chamada quando os itens fossem criados e nao no clique
  box.onclick = handleClick
  document.querySelector('.game').appendChild(box)
}

function handleClick() {
  if (openCards.length < 2) {
    // this will store the clicked item on openCards,
    this.classList.add('boxOpen')
    openCards.push(this)
  }
  // this will compare the openCard to the new open card

  // se igual itens somem else itens se apagam
  if (openCards.length == 2) {
    setTimeout(creckMatch, 500)
  }
}

function creckMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add('boxMatch')
    openCards[1].classList.add('boxMatch')
  } else {
    openCards[0].classList.remove('boxOpen')
    openCards[1].classList.remove('boxOpen')
  }
  openCards = []
  if (document.querySelectorAll('.boxMatch').length == emojis.length) {
    alert('YOU WIN!')
    document.querySelectorAll.forEach(element => {
      element.querySelector.remove('boxOpen')
    })
    document.querySelectorAll.forEach(element => {
      element.querySelector.remove('boxMatch')
    })
  }
}
