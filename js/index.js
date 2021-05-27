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