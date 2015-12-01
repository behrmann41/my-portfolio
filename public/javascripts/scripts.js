$(document).ready(function(){
  var nav = $('.navbar');

  $(window).on('scroll', function() {
    if ($(".navbar").offset().top > 50) {
      nav.css( 'background-color', 'transparent');
    } else {
      nav.css( 'background-color', '#FFFFFF');
    }
  });

  $("li.page-scroll a[href^='#']").click(function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 1000, function(){
       window.location.hash = hash;
     });
  });

})
// $('.pull-down').each(function() {
//   $(this).css('margin-top', $(this).parent().height()-
// $(this).height())
// });

// var btn = $('#projects')
// $("window").on('scroll', function(){
//   btn.css('background', 'transparent')
// })
// // $('#projects').click(function(e){
// //   var $list = $('#home','#portfolio','#contact');
// //   e.preventDefault();
// //   console.log($list, "LIST")
// //   var i = $(".active").removeClass('.active').next().index();
// //   if(i==-1) i=0;
// //   $list.eq(i).addClass('.active')
// //   // console.log($list)
// // })
