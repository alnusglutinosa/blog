function show_menu() {

  if (window.matchMedia('(max-width: 959px)').matches) {
    $('.main-nav').hide();
    $('.main-nav').removeClass('is-open');
    $('#nav-trigger').removeClass('is-active');
  } else {
    $('.main-nav').show();
  }

}

module.exports = show_menu;
