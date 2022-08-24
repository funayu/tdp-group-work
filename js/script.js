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
  },
  // スライドの切り替わり方
  effect: 'fade',
  // 次のスライドに切り替わる速度
  speed: 1500,
})
