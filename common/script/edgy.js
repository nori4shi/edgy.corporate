$(function(){

  var browser_height = $(window).height();
  var active_article_no = 0;
  var article_count = $("article").length -1;

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

  initialize();

  // ブラウザサイズに応じた初期化
  function initialize(){
    $("article").height(browser_height);
    $(".articles-wrap").height(browser_height * 4);
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

});
