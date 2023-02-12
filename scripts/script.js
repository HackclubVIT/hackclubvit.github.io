const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-content");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

hamburger.querySelector(".nav-tags").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


// Card Carousel
$(document).ready(function () {
    var singleSliderObj = [
        { index: 1, titlecard: "Coringa", imgsrc: "https://images.unsplash.com/photo-1676136358547-39565087f582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60", desctext: "Na cidade de Gotham, Arthur Fleck é um comediante com problemas mentais que é maltratado pela sociedade. Então ele cai em uma espiral de revolução e crime que o leva cara a cara com seu alter ego: o Coringa.", date: "2019", place: "Crime | Drama | Suspense" },
        { index: 2, titlecard: "It: Capítulo Dois", imgsrc: "https://images.unsplash.com/photo-1676136358547-39565087f582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60", desctext: "Depois de 27 anos de seu primeiro encontro com o terrível Pennywise, os membros do Clube dos Otários já são adultos e moram longe de sua cidade, até que uma chamada devastadora os traz de volta", date: "2019", place: "Drama | Fantasia | Terror" },
        { index: 3, titlecard: "Malévola: Dona do Mal", imgsrc: "https://www.cinemaqualidade.to/wp-content/uploads/2020/01/maleficent-mistress-of-evil.jpg", desctext: "Malévola e sua afilhada Aurora começam a questionar os complexos laços familiares que as unem quando são levadas em diferentes direções por um casamento iminente, aliados inesperados y novas forças das trevas em ação.", date: "2019", place: "Ação | Suspense" },
        { index: 4, titlecard: "Esquadrão 6", imgsrc: "https://www.cinemaqualidade.to/wp-content/uploads/2019/12/esquadrao-6.jpg", desctext: "Seis indivíduos de todo o mundo, cada um o melhor no que faz, foram escolhidos não apenas por suas habilidades, mas por seu desejo único de apagar seus passados para mudar o futuro.", date: "1st Jan,2019", place: "Aventura | Familiar | Fantasia" },
        { index: 5, titlecard: "Rambo: Até o Fim", imgsrc: "https://img2.sfilm.hu/original/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg", desctext: "Rambo deve enfrentar seu passado e desenterrar suas implacáveis habilidades de combate para se vingar em uma missão final. Uma viagem mortal de vingança.", date: "2019", place: "Ação | Aventura | Suspense" }
    ];

    function outputIt() {
        for (var i = 0; i < singleSliderObj.length; i++) {
            // console.log(outputs);
            var outputs = '<div id="' + singleSliderObj[i].index + '">' +
                '<div class="singlecard">' +
                '<div class="singlecard-header">' +
                '<img data-lazy="' + singleSliderObj[i].imgsrc + '">' +
                '</div>' +
                '<div class="singlecard-body">' +
                '<div class="singlecard-content">' +
                '<div class="singlecard-title"><strong>' + singleSliderObj[i].titlecard + '</strong></div>' +
                '<div class="singlecard-text">' +
                '<p style="font-size: 1rem;">' + singleSliderObj[i].desctext + '</p>' +
                '<p>' +
                '<span class="singlecard-index"><em>Experience ' + singleSliderObj[i].index + '</em></span>' +
                '<span class="singlecard-date"><em>' + singleSliderObj[i].date + '</em></span>' +
                '<span class="singlecard-place"><em>' + singleSliderObj[i].place + '</em></span>' +
                '</p>' +
                '</div>' +
                '</div>' +
                '</div>';
            $('.slide-sec').append(outputs);
        }
    }
    outputIt();

    $('.slide-sec').slick({
        lazyLoad: 'ondemand',
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true
    });
});