// JS Document

//Menu a discesa

$(document).ready(function(e) {
    
    //Menu appoggio
   $(".discesa_a").click(function(e) {
       $("#m_appoggio").slideToggle();
       event.preventDefault();
   });
   $(".discesa_a").focusout(function(e) {
       $("#m_appoggio").slideUp();
       event.preventDefault();
   });
    
    // Menu consigli
   $(".discesa_c").click(function(e) {
       $("#m_consigli").slideToggle();
       event.preventDefault();
   });
   $(".discesa_c").focusout(function(e) {
       $("#m_consigli").slideUp();
       event.preventDefault();
   });
    
    // Menu eventi
   $(".discesa_e").click(function(e) {
       $("#m_eventi").slideToggle();
       event.preventDefault();
   });
   $(".discesa_e").focusout(function(e) {
       $("#m_eventi").slideUp();
       event.preventDefault();
   });
    
    // Evidenzia corridore 
    $("#i_corridori a").hover(function () {
        $(this).toggleClass ('evidenziazione');
    });
    
    // FadeIn e FadeOut Maratone
    $(".read_more1").click(function(e) {
        $("#foto_rome").fadeTo('200', '1');
        $(".par_rome").animate({'height': '428', 'overflow': 'hidden'}, 'slow');
        $(".read_more1").hide();
    });
    $(".read_more2").click(function(e) {
        $("#foto_atene").fadeTo('200', '1');
        $(".par_atene").animate({'height': '304px', 'overflow': 'hidden'}, 'slow');
        $(".read_more2").hide();
    });
    $(".read_more3").click(function(e) {
        $("#foto_nyork").fadeTo('200', '1');
        $(".par_nyork").animate({'height': '327px', 'overflow': 'hidden'}, 'slow');
        $(".read_more3").hide();
    });
    $(".read_more4").click(function(e) {
        $("#foto_bigsur").fadeTo('200', '1');
        $(".par_bigsur").animate({'height': '485', 'overflow': 'hidden'}, 'slow');
        $(".read_more4").hide();
    });
    $(".read_more5").click(function(e) {
        $("#foto_cuba").fadeTo('200', '1');
        $(".par_cuba").animate({'height': '282px', 'overflow': 'hidden'}, 'slow');
        $(".read_more5").hide();
    });
    $(".read_more6").click(function(e) {
        $("#foto_marocco").fadeTo('200', '1');
        $(".par_marocco").animate({'height': '334px', 'overflow': 'hidden'}, 'slow');
        $(".read_more6").hide();
    });
    $(".read_more7").click(function(e) {
        $("#foto_hawai").fadeTo('200', '1');
        $(".par_hawai").animate({'height': '439px', 'overflow': 'hidden'}, 'slow');
        $(".read_more7").hide();
    });
    $(".read_more8").click(function(e) {
        $("#foto_israel").fadeTo('200', '1');
        $(".par_israel").animate({'height': '310px', 'overflow': 'hidden'}, 'slow');
        $(".read_more8").hide();
    });
    $(".read_more9").click(function(e) {
        $("#foto_tromso").fadeTo('200', '1');
        $(".par_tromso").animate({'height': '300px', 'overflow': 'hidden'}, 'slow');
        $(".read_more9").hide();
    });
    $(".read_more10").click(function(e) {
        $("#foto_china").fadeTo('200', '1');
        $(".par_china").animate({'height': '275px', 'overflow': 'hidden'}, 'slow');
        $(".read_more10").hide();
    });
    $(".read_more11").click(function(e) {
        $("#foto_venice").fadeTo('200', '1');
        $(".par_venice").animate({'height': '270px', 'overflow': 'hidden'}, 'slow');
        $(".read_more11").hide();
    });
});


/* Scorrimento pagine interne */
$(document).ready(function(e) {
    $('a[href*="#"]:not([href="#"])').click(function(event) { //prende tutte le ancore che iniziano con # non quelle con il solo #
        $('html, body').animate({
            scrollTop: $($(this).attr("href"))
            .offset().top - 36}, 1000);
        event.preventDefault();
    });
});