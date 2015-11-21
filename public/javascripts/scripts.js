$(document).ready(function(){
  var nav = $('.navbar');
  $(window).on('scroll', function() {
    if ($(".navbar").offset().top > 50) {
      nav.css( 'background-color', 'transparent');
    } else {
      nav.css( 'background-color', '#FFFFFF');
    }
  });

  function scrollToAnchor(id){
      var $el = $(id);
      $('html,body').animate({scrollTop: $el.offset().top},1000);
  }

  $("li.page-scroll a").click(function(e) {
    e.preventDefault();
    scrollToAnchor($(e.target).attr('href'));
  });

  $('.pull-down').each(function() {
    $(this).css('margin-top', $(this).parent().height()-
  $(this).height())
  });
})

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
