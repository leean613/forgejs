// 検査アプリ　メニューtoggle
$(function () {
  $("#inspection .g_nav .sub_toggle").click(function(){
    $("#inspection .g_nav .sub_nav").slideToggle();
  });
});


// 閲覧中のURLをコピー
function clipURL() {
  $('body').append('<textarea id="currentURL" style="position:fixed;left:-100%;">'+location.href+'</textarea>');
  $('#currentURL').select();
  document.execCommand('copy');
  $('#currentURL').remove();
  alert("URLをコピーしました。");
}


// 検査アプリ　slide（1枚表示）
$(function () {
  if ( $( '.single_slide' ).length > 0 ) {
    $('.single_slide').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      prevArrow: '<img src="../common/images/slide_prev.png" class="slide_arrow prev_arrow">',
      nextArrow: '<img src="../common/images/slide_next.png" class="slide_arrow next_arrow">'
    });
  }
});


// 検査アプリ　測定　チュートリアルtoggle
$(function () {
  $(".measurement_toggle").click(function(){
    $(this).next(".measurement_box__tutorial__inner").slideToggle();
    $(this).toggleClass("on");
    $('.single_slide').slick('setPosition');
  });
});


// 検査アプリ　モーダル内のチュートリアルslideの処理
$(function () {
  var slider = $('.single_slide');
  $(".modal_tutorial_btn").click(function(){
    slider.css('opacity',0);
    slider.animate({'z-index':1},5,function(){
      slider.slick('setPosition');
      slider.animate({'opacity':1});
    });
  });
});


// サイドナビハイド
$(function () {
  $("#management .g_nav .toggle,#inspection .g_nav .toggle").click(function(){
    $("#management .g_nav .main_nav,#inspection .g_nav .main_nav").slideToggle();
    $(".header_wrap").toggleClass("side_hide");
    $(".main_wrap__detail").toggleClass("side_hide");
    $(".data_list_menu__inner table thead").toggleClass("side_hide");
    $(".data_list_menu__inner table tbody").toggleClass("side_hide");
    $(".reception_list__table thead").toggleClass("side_hide");
    $(".reception_list__table tbody").toggleClass("side_hide");
    $(".notice_list__check").toggleClass("side_hide");
    $("footer").toggleClass("side_hide");
  });
});


// マイカルテアプリ用　サイドナビハイド
$(function () {
	if(window.matchMedia('(min-width:1000px)').matches) {
		$("#mycarte .g_nav label").click(function(){
			$("#mycarte .g_nav ul").slideToggle();
			$(".header_wrap").toggleClass("side_hide");
			$(".main_wrap__detail").toggleClass("side_hide");
			$(".data_list_menu__inner table thead").toggleClass("side_hide");
			$(".data_list_menu__inner table tbody").toggleClass("side_hide");
			$(".notice_list__check").toggleClass("side_hide");
			$("footer").toggleClass("side_hide");
		});
	}
});


// マイメニューのモーダル
$(function () {
  $(".tit_user").click(function(){
    $("#modal_management_mymenu,#modal_inspection_mymenu,#modal_mycarte_mymenu").slideToggle();
  });

  $("#modal_management_mymenu .close__btn,#modal_inspection_mymenu .close__btn,#modal_mycarte_mymenu .close__btn").click(function(){
    $("#modal_management_mymenu,#modal_inspection_mymenu,#modal_mycarte_mymenu").slideToggle();
  });

  $(document).on('click',function(e){
    if (!$(e.target).closest(".tit_user").length){
      $("#modal_management_mymenu,#modal_inspection_mymenu,#modal_mycarte_mymenu").slideUp();
    }
  });
});