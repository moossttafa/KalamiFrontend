import { cardTemplate, getRandomColor, getRandomTitle } from '@/js/packCard'

const subHeader = $('#sub-header')

const updateSentence = () => {
  subHeader.empty()
  sentence.forEach(item => {
    delete item.type
    subHeader.append($(`<a class='pack-card ${item.type}' href='#' style='color: ${item.color}' data-data='${JSON.stringify(item)}'>
      <img class='pack-card__image' src='${item.image}' alt='image'>
      <p class='pack-card__title  mdl-typography--font-bold'>${item.text}</p>
      <span class="material-icons sentence-close ">
        close
      </span>
    </a>`))
    subHeader.scrollLeft()
  })
}


let sentence = []
const proxy = new Proxy(sentence, {
  apply: function(target, thisArg, argumentsList) {
    return thisArg[target].apply(this, argumentsList)
  },
  deleteProperty: function(target, property) {
    console.log('Deleted %s', property)
    return true
  },
  set: function(target, property, value, receiver) {
    target[property] = value
    updateSentence()
    return true
  }
})

const container = $('#sentence-composition')
if (container.length) {
  for (let i = 0; i <= 20; i++) {
    container.append(cardTemplate({
      color: getRandomColor(),
      text: getRandomTitle(),
      image: '/03d4721617f17cd915b3.png',
      type: 'composition',
    }))
  }
}

$(document)
  .on('click', '.composition', function(e) {
    e.preventDefault()
    let word = $(this),
      wordData = word.data('data')
    proxy.push(wordData)
  })


