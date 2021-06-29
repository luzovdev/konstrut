function ibg() {

   $.each($('.ibg'), function (index, val) {
      if ($(this).find('img').length > 0) {
         $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
      }
   });
}

ibg();

//goto
$('.goto').click(function () {
   var el = $(this).attr('href').replace('#', '');
   var offset = 0;
   $('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

   return false;
});














