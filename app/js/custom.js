$(document).ready(function(){
  $('#menu-icon').on('click', function(){
    $('.navbar').toggleClass('expand');
    return false;
  });

  $('img.phone-img').on('click', function() {
    $(this).toggleClass('active-img');
  });
  $('img.phone-img').on('click', function() {
    $('.price-find-wrap').toggleClass('price-active');
  });
});

// Services
$('#phone-type').change(function() {
  var el = $(this);

  if (el.val() === 'iphone') {
    $('#default-phone-model').addClass('hide-select');
    $('#iphone-model').addClass('show-select');
  } else if (el.val() === 'samsung') {
    $('#default-phone-model').addClass('hide-select');
    $('#samsung-model').addClass('show-select');
  } else if (el.val() === 'hauwei') {
    $('#default-phone-model').addClass('hide-select');
    $('#hauwei-model').addClass('show-select');
  } else if (el.val() === 'nokia') {
    $('#default-phone-model').addClass('hide-select');
    $('#nokia-model').addClass('show-select');
  } else {
    $('#default-phone-model').removeClass('hide-select');
  };
});
