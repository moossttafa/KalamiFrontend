// import 'muicss/dist/js/mui.min.js'
const getHeaderTemplate = (card) => $(`
  <div class='expand-header' style='background-color: ${card.bgColor}'>

    <button class="mdl-button mdl-js-button mdl-button--icon arrow">
      <i class="material-icons">arrow_back</i>
    </button>
    
    <img src='${card.img}' alt='card image' />
    <div class='expand-header__description'>
      <div class='expand-header__title'>${card.title}</div>

      <button class="mdl-button mdl-js-button mdl-button--icon sound">
        <i class="material-icons ">volume_up</i>
      </button>
      
    </div>
  </div>`)

const subHeader = $('#sub-header')


$(document)
  .on('click', '.pack', function() {
    console.log('clicked')
    let self = $(this)
    let card = {
      img: self.find('img').attr('src'),
      bgColor: self.css('color'),
      title: self.find('.pack-card__title').text()
    }
    console.log(self.css('color'))
    // $("#header").after('<div>').addClass("expand-header");
    subHeader.empty()
    subHeader.append(getHeaderTemplate(card))
    
    // color of text
    $('.mdl-navigation__link').css({color:'#000'})

    // click on topic element not pack element
    $('#right-sidebar').css({display: "block"})
    $('#overlay').addClass('is-visible')
    
    let headerColor = card.bgColor
    $('.header-change-color').css({backgroundColor:headerColor , boxShadow: 'none' })

  })
  .on('click', '.arrow', function() {
    subHeader.empty()
    // #3f51b5
    $('.header-change-color').css({backgroundColor:'#3f51b5' })
    $('.mdl-navigation__link').css({color:'#fff'})

  })

  .on('click','#overlay' , function(){
    $('#overlay').removeClass('is-visible')
    $('#right-sidebar').css({display: "none"})
  })

  .on('click', '.right-sidebar__arrow', function() {
    $('#overlay').removeClass('is-visible')
    $('#right-sidebar').css({display: "none"})
  })


