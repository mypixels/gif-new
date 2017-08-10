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
      showPhoneModel("iphone-model");
      break;
    case 'samsung':
      showPhoneModel("samsung-model");
      break;
    case 'huawei':
      showPhoneModel("huawei-model");
      break;
    case 'nokia':
      showPhoneModel("nokia-model");
      break;
    default:
      showPhoneModel("default-phone-model");
      break;
  }
});

function showPhoneModel(visiblePhoneModelId){
  var modelIds = ['default-model', 'iphone-model', 'samsung-model', 'huawei-model', 'nokia-model'];
  modelIds .forEach(function(id) {
    var visible = (id === visiblePhoneModelId);
    setElementVisibility($('#' + id), visible);
  });
};
