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
