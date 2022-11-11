console.log("Hey! This is my portfolio")
$(document).ready(function(){
  $(".navigation").click(function(){
  console.log("Clicked")
  console.log($(window).width())
  if($(window).width() < 642) {
    $(".mobile-menu").toggle();
  }
  })
});
