function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}
ibg();

//goto
$('.goto').click(function () {
   var el = $(this).attr('href').replace('#', '');
   var offset = 0;
   $('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

   return false;
});












