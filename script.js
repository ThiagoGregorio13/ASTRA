const barra = document.querySelector('#barra-progresso')

function atualizarBarra(){
const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
const progresso = (window.scrollY/alturaTotal)*100
barra.style.width = progresso + '%';
}

window.addEventListener('scroll', atualizarBarra);

const titulo = document.querySelector('.texto-principal')
const texto = titulo.textContent;
titulo.textContent = '';

texto.split('').forEach((letra,i) => {
    const span = document.createElement('span');
    span.textContent = letra;
    span.style.opacity = 0;
    span.style.transition = 'opacity 0.5s'
    titulo.appendChild(span);

    setTimeout(() =>
    {
        span.style.opacity = '1';
    
    }, i*50);
});

const sub = document.querySelector('.subtitulo')
const text = sub.textContent;
sub.textContent = '';

text.split('').forEach((letra, i) => {
    const span = document.createElement('span')
    span.textContent = letra
    span.style.display = 'inline-block'; 
    span.style.opacity = 0;
    span.style.transition = 'opacity 0.5s, transform 0.5s'
    span.style.transform = 'translateY(5px)'
    sub.appendChild(span);

    setTimeout(() => {
        span.style.opacity = '1'
        span.style.transform = 'translateY(0)';
          
    }, i*30);
});

document.querySelectorAll('.container-stats').forEach(cards => {
    cards.style.opacity = '0';
    cards.style.transform = 'translateY(40px)'
    cards.style.transition = 'opacity 0.6s, transform 0.6s'
})

const observing = new IntersectionObserver((entries)=> {
entries.forEach(entry => {
    if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observing.unobserve(entry.target);
    }
})
})

document.querySelectorAll('.container-stats').forEach(card => {
  observing.observe(card);
});

document.querySelectorAll('.cards-container').forEach(cards => {
    cards.style.opacity = '0';
    cards.style.transform = 'translateY(40px)'
    cards.style.transition = 'opacity 0.6s, transform 0.6s'
})

const observingcards = new IntersectionObserver((entries)=> {
entries.forEach(entry => {
    if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observingcards.unobserve(entry.target);
    }
})
})

document.querySelectorAll('.cards-container').forEach(card => {
  observingcards.observe(card);
});


document.querySelectorAll('.card-token').forEach(cards => {
    cards.style.opacity = '0';
    cards.style.transform = 'translateY(40px)'
    cards.style.transition = 'opacity 0.6s, transform 0.6s'
})

const observingtoken = new IntersectionObserver((entries)=> {
entries.forEach(entry => {
    if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observingtoken.unobserve(entry.target);
    }
})
})

document.querySelectorAll('.card-token').forEach(card => {
  observingtoken.observe(card);
});

document.querySelectorAll('.social-links').forEach(cards => {
    cards.style.opacity = '0';
    cards.style.transform = 'translateY(40px)'
    cards.style.transition = 'opacity 0.6s, transform 0.6s'
})

const observingcommunity = new IntersectionObserver((entries)=> {
entries.forEach(entry => {
    if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observingcommunity.unobserve(entry.target);
    }
})
})

document.querySelectorAll('.social-links').forEach(card => {
  observingcommunity.observe(card);
});

const foto = document.querySelector('.foto');

foto.animate(
  [
    { offsetDistance: '0%', opacity: 0 },
    { offsetDistance: '55%', opacity: 0.5 },
    { offsetDistance: '100%', opacity: 1 }
  ],
  { duration: 1200, easing: 'ease-out', fill: 'forwards' }
);