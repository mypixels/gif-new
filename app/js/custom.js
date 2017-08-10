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
  var element = $(this),
      elementValue = element.val();

  switch(elementValue ){
    case 'iphone':
      setElementVisibility($('#default-phone-model'), false);
      setElementVisibility($('#iphone-phone-model'), true);
      setElementVisibility($('#samsung-phone-model'), false);
      setElementVisibility($('#huawei-phone-model'), false);
      setElementVisibility($('#nokia-phone-model'), false);

      // $('#default-phone-model').addClass('hide-select');
      // $('#iphone-model').removeClass('hide-select');
      // $('#samsung-model').addClass('hide-select');
      // $('#huawei-model').addClass('hide-select');
      // $('#nokia-model').addClass('hide-select');
      break;
    case 'samsung':
      setElementVisibility($('#default-phone-model'), false);
      setElementVisibility($('#iphone-phone-model'), false);
      setElementVisibility($('#samsung-phone-model'), true);
      setElementVisibility($('#huawei-phone-model'), false);
      setElementVisibility($('#nokia-phone-model'), false);

      // $('#default-phone-model').addClass('hide-select');
      // $('#iphone-model').addClass('hide-select');
      // $('#samsung-model').removeClass('hide-select');
      // $('#huawei-model').addClass('hide-select');
      // $('#nokia-model').addClass('hide-select');
      break;
    case 'huawei':
      setElementVisibility($('#default-phone-model'), false);
      setElementVisibility($('#iphone-phone-model'), false);
      setElementVisibility($('#samsung-phone-model'), false);
      setElementVisibility($('#huawei-phone-model'), true);
      setElementVisibility($('#nokia-phone-model'), false);

      // $('#default-phone-model').addClass('hide-select');
      // $('#iphone-model').addClass('hide-select');
      // $('#samsung-model').addClass('hide-select');
      // $('#huawei-model').removeClass('hide-select');
      // $('#nokia-model').addClass('hide-select');
      break;
    case 'nokia':
      setElementVisibility($('#default-phone-model'), false);
      setElementVisibility($('#iphone-phone-model'), false);
      setElementVisibility($('#samsung-phone-model'), false);
      setElementVisibility($('#huawei-phone-model'), false);
      setElementVisibility($('#nokia-phone-model'), true);
      // $('#default-phone-model').addClass('hide-select');
      // $('#iphone-model').addClass('hide-select');
      // $('#samsung-model').addClass('hide-select');
      // $('#huawei-model').addClass('hide-select');
      // $('#nokia-model').removeClass('hide-select');
      break;
    default:
      setElementVisibility($('#default-phone-model'), true);
      setElementVisibility($('#iphone-phone-model'), false);
      setElementVisibility($('#samsung-phone-model'), false);
      setElementVisibility($('#huawei-phone-model'), false);
      setElementVisibility($('#nokia-phone-model'), false);

      // $('#default-phone-model').removeClass('hide-select');
      // $('#iphone-model').addClass('hide-select');
      // $('#samsung-model').addClass('hide-select');
      // $('#huawei-model').addClass('hide-select');
      // $('#nokia-model').addClass('hide-select');
      break;
  }
});

function setElementVisibility(element, visible){
  if(visible)){
    element.removeClass('hide-select');
    element.addClass('show-select');
  }
  else{
    element.addClass('hide-select');
    element.removeClass('show-select');
  }
}
