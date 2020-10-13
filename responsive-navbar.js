
$(document).ready(() => {
  console.log('hello');

  $('#mobile-menu').on('click', () => {
    let $navUl = $('.nav-ul');
    let $mobileMenu = $('#mobile-menu');
    $('.nav-ul').addClass().slideToggle('slow');
  });

  $(window).bind("resize", () => {
    if( $(window).width() > 768) {
      $('.nav-ul').removeAttr("style");
    }
  })
});
