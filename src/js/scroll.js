$(function () { // wait for document ready
  // var something = (function() {
  //   var executed = false;
  //   return function() {
  //       if (!executed) {
  //           executed = true;
  //           location.reload();
  //           // do something
  //       }
  //       // console.log(executed);
  //     };
  //   });
  
  // something(); // "do something" happens
  // something();
  window.scrollTo(0,document.body.scrollHeight);
  $('html, body').animate({
    scrollTop: $('#section-wipes').offset().top
  }, 'fast');
  // window.scrollTo(0, 0);
  // $("body").scrollTop(0);
  // $("body").scrollTop(100);
  // $(document).scrollTop(0);
  // window.scrollBottom(0);
  // const reload = () => {
  //   let doc = false;
  //   if (!doc){
  //     console.log(doc);
  //   }
  // }

  // init
  $(document).on('scroll', function(){
    // console.log('scrolling');/
  })

  // $('.plans').scrollTop(0)

  var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 1500}});

  var wipeAnimation = new TimelineMax()
    .fromTo(".full-header", 1, {y: 0}, {y: "-100%", ease: Linear.easeAll})
    .fromTo("section.panel.turqoise", 1, {x: "0%"}, {x: "100%", ease: Linear.easeAll})
    .fromTo("section.panel.blue", 1, {x: "0%"}, {x: "100%", ease: Linear.easeAll})
    .fromTo("#screen2", 1, {opacity: 0}, {opacity: 1})
    .fromTo("section.panel.green", 1, {x:  "-100%"}, {x: "-0%", ease: Linear.easeAll})
    .fromTo("section.panel.green", 1, {x:  "0%"}, {x: "-100%", ease: Linear.easeAll})
    .fromTo("section.panel.blue", 1, {x: "100%"}, {x: "0%", ease: Linear.easeAll})
    .fromTo("#screen3", 1, {opacity: 0}, {opacity: 1})
    .fromTo("section.panel.purple", 1, {x: "100%"}, {x: "0%", ease: Linear.easeAll})
    .fromTo(".full-header", 1, {width: "50%"}, {width: "100%", ease: Linear.easeAll})
    .fromTo(".full-header", 1, {backgroundColor: "transparent"}, {backgroundColor: "#3F51B5", ease: Linear.easeAll})
    .fromTo(".full-header", 1, {y: "-100%"}, {y: 0, ease: Linear.easeAll})

  new ScrollMagic.Scene({
      triggerElement: "onLeave",
      triggerHook: 0.06,
      duration: "300%",
    })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  

    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   asNavFor: '.slider-for',
    //   dots: true,
    //   centerMode: true,
    //   focusOnSelect: true
    // })
    
  });

  
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
    // dots: true,
    // centerMode: true,
    // focusOnSelect
  })
  $('.packs-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // arrows: false,
          // centerMode: true,
          // centerPadding: '30px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          // arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  })