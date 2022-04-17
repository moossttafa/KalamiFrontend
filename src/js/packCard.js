// import 'muicss/dist/js/mui.min.js'

const cardColors = [
  '#FFCDD2',
  '#F8BBD0',
  '#E1BEE7',
  '#D1C4E9',
  '#C5CAE9',
  '#BBDEFB',
  '#B3E5FC',
  '#DCEDC8',
  '#F0F4C3',
  '#FFF9C4',
  '#FFECB3',
  '#FFCCBC',
  '#FFE0B2',
  '#F5F5F5',
  '#D7CCC8',
  '#CFD8DC',
  '#FFCC80',
  '#FFAB91',
  '#FFF176',
  '#FCE4EC',
]

const cardTitles = [
  'sister', 'brother', ' mother', 'father',
]

export const getRandomColor = () => cardColors[Math.floor(Math.random() * cardColors.length)]
export const getRandomTitle = () => cardTitles[Math.floor(Math.random() * cardTitles.length)]


export const cardTemplate = (card = {}) => $(`<div class='mdl-cell mdl-cell--2-col'>
  <a class='pack-card ${card.type}' href='#' style='color: ${card.color}' data-data='${JSON.stringify(card)}'>
    <img class='pack-card__image' src='${card.image}' alt='image'>
    <p class='pack-card__title  mdl-typography--font-bold'>${card.text}</p>
  </a>
</div>`)

const container = $('#allCards')
if (container.length) {
  for (let i = 0; i <= 6; i++)
    container.append(cardTemplate({
      color: getRandomColor(),
      text: getRandomTitle(),
      image: '/03d4721617f17cd915b3.png',
      type: "pack"
    }))

  for (let i = 0; i <= 6; i++)
    container.append(cardTemplate({
      color: getRandomColor(),
      text: getRandomTitle(),
      image: '/03d4721617f17cd915b3.png',
      type: "topic"
    }))
}