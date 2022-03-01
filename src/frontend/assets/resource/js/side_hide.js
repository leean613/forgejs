// サイドハイドのテスト
$(function () {
  $("#management .g_nav .toggle").click(function(){
    $("#management .g_nav .main_nav").slideToggle();
    $(".header_wrap").toggleClass("side_hide");
    $(".main_wrap__detail").toggleClass("side_hide");
    $(".data_list_menu__inner table thead").toggleClass("side_hide");
    $(".data_list_menu__inner table tbody").toggleClass("side_hide");
    $("footer").toggleClass("side_hide");
  });
});