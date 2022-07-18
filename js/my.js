

$(document).ready(function () {
  $('.invested_listed').css("display", "none");
  $('.investlisting_item_one').click(function(){
  $('.investlisting_item_one').addClass('active'); 
  $('.investlisting_item_two').removeClass('active');
  $('.investlisting_box_parent').css("display", "grid");
  $('.invested_listed').css("display", "none");
});

$('.investlisting_item_two').click(function(){
  $('.investlisting_item_two').addClass('active'); 
  $('.investlisting_item_one').removeClass('active');
  $('.invested_listed').css("display", "block");
  $('.investlisting_box_parent').css("display", "none");
});
});

