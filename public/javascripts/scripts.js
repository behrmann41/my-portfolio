$(document).ready(function(){
    $("li.page-scroll a").click(function(e) {
      e.preventDefault();
      scrollToAnchor($(e.target).attr('href'));
    })
    $('.pull-down').each(function() {
      $(this).css('margin-top', $(this).parent().height()-
    $(this).height())
    });
    $('#projects').click(function (e) {
      e.preventDefault()
      var next = $('.active').next().length > 0 ? $('.active').next() : $('.nav li').first();
      console.log(next)
      scrollToAnchor($(next).attr('href'));
    });
})
