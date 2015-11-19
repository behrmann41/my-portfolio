$(document).ready(function(){
  $("li.page-scroll a").click(function(e) {
    e.preventDefault();
    scrollToAnchor($(e.target).attr('href'));
})
