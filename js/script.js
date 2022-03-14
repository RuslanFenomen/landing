// Меню
document.querySelector('.menu__burger').addEventListener('click', () => {
   document.querySelector('.menu').classList.toggle('active');
});


// Тема
document.querySelector('#color').addEventListener('click', () => {
   document.querySelector('.theme').classList.toggle('active');
});

const root = document.querySelector(':root');
const rootStules = getComputedStyle(root);
const text = rootStules.getPropertyValue('--text');
const bg = rootStules.getPropertyValue('--bg');
const accent = rootStules.getPropertyValue('--accent');
const theme = document.querySelector('.theme');

for (let colorBtn of document.getElementsByClassName('theme__item')) {
   colorBtn.addEventListener('click', (e) => {
      for (let colorBtn of document.getElementsByClassName('theme__item')) {
         colorBtn.classList.remove('active')
      }
      colorBtn.classList.add('active')
   })
}




document.getElementsByClassName('theme__item')[0].addEventListener('click', (e) => {
   root.style.setProperty('--text', '#ffffff');
   root.style.setProperty('--bg', '#4C3D74');
   root.style.setProperty('--accent', '#A387C4');
})
document.getElementsByClassName('theme__item')[1].addEventListener('click', (e) => {
   root.style.setProperty('--text', '#392A3E');
   root.style.setProperty('--bg', '#E75E49');
   root.style.setProperty('--accent', '#ff9260');
})
document.getElementsByClassName('theme__item')[2].addEventListener('click', (e) => {
   root.style.setProperty('--text', '#DCDAD3');
   root.style.setProperty('--bg', '#24487B');
   root.style.setProperty('--accent', '#367cdd');
})
document.getElementsByClassName('theme__item')[3].addEventListener('click', (e) => {
   root.style.setProperty('--text', '#D87647');
   root.style.setProperty('--bg', '#353F49');
   root.style.setProperty('--accent', '#5f7285');
})




// Список занятий
const lessons = document.querySelectorAll('.lesson')

for (const lesson of lessons) {
   lesson.addEventListener('click', () => {
      clearActiveClasses()
      if (lessons !== document.querySelectorAll('.lesson', '.active')) {
         lesson.classList.add('active')
      } else {
         lesson.classList.remove('active')
      }
   })
}

function clearActiveClasses() {
   lessons.forEach((lesson) => {
      lesson.classList.remove('active')
   })
}

// popup
// document.querySelectorAll('.priceBtn').addEventListener('click', () => {
//    document.querySelector('.form').classList.toggle('active');
// });



// var myCard = $('#my-card');

// var cardNumber = myCard.CardJs('cardNumber');
// var cardType = myCard.CardJs('cardType');
// var name = myCard.CardJs('name');
// var expiryMonth = myCard.CardJs('expiryMonth');
// var expiryYear = myCard.CardJs('expiryYear');
// var cvc = myCard.CardJs('cvc');