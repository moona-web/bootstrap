let _menu = document.getElementsByClassName('menulist')[0]
console.log(_menu);
let _subMenu = document.getElementsByClassName('submenu')[0]
console.log(_subMenu);
let _close = document.getElementsByClassName('close')[0]

let flag = 0
_menu.addEventListener('click', ()=>{

  flag++
  if(flag%2){
    _subMenu.className= 'd-flex row bg-light shadow position-absolute top-0 start-0 w-50 '
    console.log('add', _subMenu);
  } 
})
_close.addEventListener('click', ()=>{
   _subMenu.className = 'd-sm-none row bg-light shadow position-absolute top-0 start-0 w-50 ' 
})



$(".comments").owlCarousel({
  items: 3,
  nav: true,
  loop: true,
  dots: true,
  mouseDrag: true,
  margin: 20,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 1,
    },
    767: {
      items: 2,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 3,
    },
    1400: {
      items: 3,
    },
  },
});


$(".comment").owlCarousel({
  items: 3,
  nav: false,
  loop: true,
  dots: true,
  mouseDrag: true,
  margin: 30,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 1,
    },
    767: {
      items: 2,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 3,
    },
    1400: {
      items: 3,
    },
  },
});

$('.trend').owlCarousel({
  loop: true,
  dots: false,
  items: 4,
  margin: 30,
  stagePadding: 2,
  autoplay: true,
  mouseDrag: true,
  responsiveClass: true,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    300: {
      items: 1
    },
    600: {
      items: 1
    },
    800: {
      items: 2
    },
    1200: {
      items: 4
    }

  }
})


let _icon = document.querySelectorAll('.finish>div:nth-of-type(1)>div>div>div>i')
console.log(_icon);

let _ul = document.querySelectorAll('.finish>div:nth-of-type(1)>div>div>ul')
console.log(_ul);

_icon.forEach((val, i) => {

  let flag = 1;
  val.addEventListener('click', () => {
    if (flag % 2) {
      _ul[i].className = 'd-flex list-unstyled row fs-4'
    } else {
      _ul[i].className = 'd-none'
    }
    flag++
  })
})







