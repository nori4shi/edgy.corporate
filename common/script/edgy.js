$(function(){

  var browser_height = $(window).height();
  var active_article_no = 0;
  var article_count = $("article").length -1;
  var is_touch_device_flg = is_touch_device();

  initialize();

  // スクロールでの移動
  $(window).scroll(function(){
      var target_article_no = Math.ceil(($(window).scrollTop()) / browser_height);
      move_article(target_article_no);
  });

  // ナビゲーションメニューからの移動
  $(".navigation ul li").click(function(){
      var no = $(this).attr("data-article_no");
      $("html body").scrollTop(browser_height * no)
      move_article(no);
  });

  /* スマホ用スワイプ関連イベント */
  /*
  var swipe_start = 0;
  var swipe_end = 0;
  $(window).on("touchstart", function(e){
    swipe_start = e.originalEvent.touches[0].pageY;
  })
  $(window).on("touchmove", function(e){
    swipe_end = e.originalEvent.touches[0].pageY;
  })
  $(window).on("touchend", function(){
    var direction_pos = swipe_start - swipe_end;
    // 下方向スワイプ (次記事)
    if(direction_pos < -50 && active_article_no > 0){
      move_article(active_article_no - 1);
    // 上方向スワイプ (前記事)
    }else if(direction_pos > 50 && active_article_no <= article_count) {
      move_article(active_article_no + 1);
    }
  })
  */
  // ブラウザサイズに応じた初期化
  function initialize(){
    $("article").height(browser_height);
    // スマホは実スクロールさせない
    if(is_touch_device_flg == false){
      $(".articles-wrap").height(browser_height * 4);
    }
  }

  // 記事移動処理
  function move_article(article_no){
    if(active_article_no != article_no && article_count >= article_no){
      $('.articles').animate({top: browser_height * -1 * article_no}, 500, 'swing');
      $('.navigation-position .pointer').animate({top: 38  * article_no}, 200, 'swing');
      $('.navigation .pointer').animate({left: (25  * article_no) + "%"}, 200, 'swing');
      active_article_no = article_no;
    }
  }

  function is_touch_device(){
    var result = false;
    if (window.ontouchstart === null) {
      result = true;
    }
    return result;
  }

});
