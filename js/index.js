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