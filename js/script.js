// Swiper用の設定
const swiper = new Swiper('.swiper', {
  // ページネーションを表示する
  pagination: {
    el: '.swiper-pagination',
  },
  // 最後のスライドまで行ったら最初のスライドに戻る
  loop: true,
  // 自動で次のスライドに移動する
  autoplay: {
    // 移動するまでの時間
    delay: 3000,
    // ユーザー操作でスライドしたあと、自動再生を再開する
    disableOnInteraction: false,
  },
  // スライドの切り替わり方
  effect: 'fade',
  // 次のスライドに切り替わる速度
  speed: 1500,
})

$(document).ready(function () {
  // // ハンバーガーボタンクリック時の処理
  // $('.btnHamburger').on('click', function () {
  //   $('.btnHamburger, .coverlayer, nav').toggleClass('is-active')
  // })
  // // coverlayer上のナビゲーションボタンクリック時処理
  // $('nav ul li a').on('click', function () {
  //   $('.btnHamburger, .coverlayer, nav').removeClass('is-active')
  // })

  // スムーススクロール
  // #で始まる出発地点をクリックした場合に処理を実行
  $('a[href^="#"]').click(function () {
    // 出発地点のhref属性を取得
    const href = $(this).attr('href')
    // 到着地点を取得
    const target = $(href == '#' || href == '' ? 'html' : href)

    // ヘッダーの高さを取得
    const headerHeight = $('header').height()

    // 到着地点を数値で取得、固定ヘッダーの高さを考慮
    const position = target.offset().top - headerHeight
    // スムーススクロールの実行
    $('body,html').animate({ scrollTop: position }, 500, 'swing')

    // トップへ戻るボタンを押した時のボタンちらつき防止
    return false
  })

  // トップへ戻るボタンをスクロールしたら出す
  const totop = $('.to_top')
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      totop.fadeIn()
    } else {
      totop.fadeOut()
    }
  })
})
