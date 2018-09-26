import { BODY, HEADER, BURGER } from './_global';

$('a').on('click', function() {
  var h = this.getAttribute('href');
  if(/^#/.test(h) === true) {
    BODY.removeClass('is-fixed');
    BURGER.removeClass('is-active');
    HEADER.removeClass('is-open');
    $('html,body').animate({
      scrollTop: $(h).offset().top
    }, 1500);
  }
});


$(window).on('scroll', e => {
  $(window).scrollTop() === 0 ? $('.scroll-up').removeClass('is-visible') : $('.scroll-up').addClass('is-visible');
});
