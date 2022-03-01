// マイメニューのテスト
$(function () {

  $(".tit_user").click(function(){
    $("#modal_mycarte_mymenu").slideToggle();
  });

  $("#modal_mycarte_mymenu .close__btn").click(function(){
    $("#modal_mycarte_mymenu").slideToggle();
  });

  $(document).on('click',function(e){
    if (!$(e.target).closest(".tit_user").length){
      $("#modal_mycarte_mymenu").slideUp();
    }
  });

});

