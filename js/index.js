var btn_menu = document.getElementById('btn_menu');
var menu = document.getElementById('navbar-menu');
var links_menu = document.querySelector('#navbar-menu ul');
var body_pag = document.getElementsByTagName('body')[0]; 

btn_menu.addEventListener('click', () => {
    menu.classList.toggle('mostrar');
    
    if(body_pag.style.overflow != 'hidden')
        body_pag.style.overflow = 'hidden';
    else
        body_pag.style.overflow = 'visible';
})

links_menu.addEventListener('click', () => {
    menu.classList.remove('mostrar');
    body_pag.style.overflow = 'visible';
})

window.addEventListener('scroll', function() {
    animeScroll();
});

function animeScroll(){
    const windowTop = window.pageYOffset;
    const navbar = document.getElementById('navbar');

    if(windowTop > 100){
        navbar.classList.remove('transparente');
    }else{
        navbar.classList.add('transparente');
    }
}

$('a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 70
	}, 500);
});

var botaoMostrar = document.getElementById('btn-carregar');
var botaoEsconder = document.getElementById('btn-carregar-menos');
var maisCursos = document.getElementById('mais-cursos');

botaoMostrar.addEventListener('click', function(){
    maisCursos.classList.remove('invisivel');
    botaoMostrar.classList.add('invisivel');
    botaoEsconder.classList.remove('invisivel');
});

botaoEsconder.addEventListener('click', function(){
    maisCursos.classList.add('invisivel');
    botaoMostrar.classList.remove('invisivel');
    botaoEsconder.classList.add('invisivel');
});