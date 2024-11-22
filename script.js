// CRIACAO DE UMA TIMELINE DO GSAP COM ANIMACOES SINCRONIZADAS COM O SCROLL

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.two',
        start: '0% 95%' ,
        end: '50% 50%' ,
        scrub: true,
        markers: false, //depuracao
    }
});

tl.to(
    '#fanta',
    {
        top: '120%', //Move o elemento com id fanta oara 120% do topo
        left: '3%', //Move o elemento para 0% da esquerda
    },
    'orange'
); // nomeando este trecho de animacao como 'orange' para sincronizacao

tl.to(
    '#laranja-cortada',
    {
        top: '158%',
        left: '25%', 
    },
    'orange'
); // nomeando este trecho de animacao como 'orange' para sincronizacao

tl.to(
    '#laranja',
    {
        widht: '15%',
        top: '158%',
        left: '80%',

    },
    'orange'
); 

tl.to(
    '#folha',
    {
        rotate: '500deg',
        top: '100%',
        left: '70%', 
    },
    'orange'
); 

tl.to(
    '#folha2',
    {
        rotate: '210deg',
        top: '100%',
        left: '6%', 
    },
    'orange'
); 

// CRIANDO OUTRA TIMELINE

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.three',
        start: '10% 95%' ,
        end: '25% 50%' ,  // Fim da animacao (topo da tela atinge 50% de altura quando estiver 20% da secao ,three)
        scrub: true,
        markers: false, //depuracao
    }
});

// Definindo a animacao dos elementos com a timeline 'tl2'
tl2.from (
    '.lemon1',
    {
        rotate: '-98deg', 
        left: '-100deg',
        top: '110',
    },
    'ca'
); // Nomeando esse trecho como "ca" para sincronizacao

tl2.from (
    '#cocacola',
    {
        rotate: '-98deg', 
        left: '-100deg',
        top: '110',
    },
    'ca'
); // Nomeando esse trecho como "ca" para sincronizacao

tl2.from (
    '.lemon2',
    {
        rotate: '98deg', 
        left: '-100deg',
        top: '110',
    },
    'ca'
); 

tl2.from (
    '#pepsi',
    {
        rotate: '98deg', 
        left: '-100deg',
        top: '110',
    },
    'ca'
); // Nomeando esse trecho como "ca" para sincronizacao

tl2.to(
    '#laranja-cortada',
    {
        width: '19%', // Aumenta a largura do elemento
        left: '41%',  // Move o elemento para a esquerda
        top: '204%',  // Move o elemento para o topo
    },
    'ca'
); // Nomeando esse trecho como "ca" para sincronizacao

tl2.to(
    '#fanta',
    {
        width: '35%', // Aumenta a largura do elemento
        left: '33%',  // Move o elemento para a esquerda
        top: '213%',  // Move o elemento para o topo
    },
    'ca'
); // Nomeando esse trecho como "ca" para sincronizacao