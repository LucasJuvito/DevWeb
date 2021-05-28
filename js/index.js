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