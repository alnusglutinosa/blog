function appear() {

  $('.js-animated').on('appear', function(e, $affected) {
    $(this).addClass('appeared');
  });

  $('.js-animated').appear({force_process: true});

};

module.exports = appear;
