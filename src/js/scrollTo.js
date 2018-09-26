$('a').on('click', function() {
  var h = this.getAttribute('href');
  if(/^#/.test(h) === true) {
    $('html,body').animate({
      scrollTop: $(h).offset().top
    }, 1500);
  }
});


$(window).on('scroll', e => {
  $(window).scrollTop() === 0 ? $('.scroll-up').removeClass('is-visible') : $('.scroll-up').addClass('is-visible');
});
