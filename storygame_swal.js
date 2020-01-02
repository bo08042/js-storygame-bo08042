var name;
var mybtn = document.getElementById("btn");
mybtn.addEventListener("click", start);
function gameplay() {
  Swal.fire({
    title: '鬼王征伐戰',
    text: `請問勇者大人的名字是？`,
    input: 'text',
    inputValue: '安倍晴明',
    showLoaderOnConfirm: true,
    confirmButtonText: '確定',
    cancelButtonText: '不可說',
    showCancelButton: true,
    allowOutsideClick: false,
  }).then(function (result) {
    if (result.dismiss === 'cancel') {
      name = "桃太郎";
      Swal.fire({
        title: `大人為人行事真神祕`,
        text: `那就尊稱您為${name}吧，開始冒險吧！`,
        allowOutsideClick: false,
        imageUrl: 'image/2.jpg',
        imageHeight: 300
      }).then(start);
    }
    else {
      name = result.value;
      Swal.fire({
        title: `原來是${name}大人！`,
        text: '請開始您的冒險',
        allowOutsideClick: false,
        confirmButtonText: '好的',
        imageUrl: 'image/3.jpg',
        imageHeight: 300
      }).then(start);
    }
  });
}
function start() {
  let mission;
  Swal.fire({
    title: `你是平安京時代的偉大陰陽師，\n ${name}`,
    text: "這是一個討伐鬼王的旅途，你是否已經做好賭上性命的覺悟？",
    confirmButtonText: '出發吧！',
    cancelButtonText: '再做準備',
    showCancelButton: true,
    allowOutsideClick: false,
    imageUrl: 'image/5.jpg',
    imageHeight: 300,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33'
  }).then((result) => {
    if (result.dismiss === 'cancel') {
      Swal.fire({
        title: `靜候大人的消息`,
        allowOutsideClick: false,
        confirmButtonText: '好的',
        imageUrl: 'image/6.jpg',
        imageHeight: 300
      });
    }
    else {
      Swal.fire({
        title: `不愧是陰陽師大人，請開始闖關吧！`,
        allowOutsideClick: false,
        confirmButtonText: '走吧！',
        imageUrl: 'image/7.gif',
        imageHeight: 300
      }).then(function () {
        Swal.fire({
          title: "我的妹妹最可愛",
          text: "你要出發去鬼王所在的大江山，此時你相依為命的妹妹說要一起去，是否要讓她同行？",
          confirmButtonText: '太危險了！',
          cancelButtonText: '妹妹最高！',
          showCancelButton: true,
          allowOutsideClick: false,
          imageUrl: 'image/8.jpg',
          imageHeight: 300,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33'
        }).then((result) => {
          if (result.dismiss === 'cancel') {
            Swal.fire({
              title: "GAME OVER",
              text: `醒醒吧你沒有妹妹`,
              allowOutsideClick: false,
              confirmButtonText: "重新來過",
              imageUrl: "image/9.jpg",
              imageHeight: 300
            });
          }
          else {
            Swal.fire({
              title: "妹妹不能做危險的事",
              text: "鬼王很危險，妹妹留在家比較安全，你獨自踏上冒險的旅途",
              allowOutsideClick: false,
              confirmButtonText: "繼續上路",
              imageUrl: 'image/10.jpg',
              imageHeight: 300
            }).then(function () {
              Swal.fire({
                title: "森林的妖怪會議",
                text: "出發後來到一座森林，你看見前方有各種妖怪，是否要繞路通行？",
                confirmButtonText: '除掉他們！',
                cancelButtonText: '安靜離開',
                showCancelButton: true,
                allowOutsideClick: false,
                imageUrl: 'image/11.jpg',
                imageHeight: 300,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33'
              }).then((result) => {
                if (result.dismiss !== 'cancel') {
                  Swal.fire({
                    title: "GAME OVER",
                    text: "你強行攻擊妖怪，但妖怪數量太多，你被包圍痛揍了一頓",
                    confirmButtonText: "重新來過",
                    allowOutsideClick: false,
                    imageUrl: "image/12.jpg",
                    imageHeight: 300
                  });
                }
                else {
                  Swal.fire({
                    title: "妖怪們的愉快日常",
                    text: "你發現妖怪們只是在開同樂會，於是悄悄繞路離開",
                    allowOutsideClick: false,
                    confirmButtonText: "繼續上路",
                    imageUrl: 'image/13.jpg',
                    imageHeight: 300
                  }).then(function () {
                    Swal.fire({
                      title: "潛伏的危險海妖",
                      text: "離開森林後，你來到海岸邊，發現海裡有隻巨大的妖怪，是否要去查看？",
                      confirmButtonText: '趕路不去',
                      cancelButtonText: '去看看吧',
                      showCancelButton: true,
                      allowOutsideClick: false,
                      imageUrl: 'image/21.jpg',
                      imageHeight: 300,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33'
                    }).then((result) => {
                      if (result.dismiss !== 'cancel') {
                        Swal.fire({
                          title: "GAME OVER",
                          text: "憤怒的海妖不分青紅皂白的襲擊了你，你被大浪捲到海裡，動彈不得",
                          confirmButtonText: "重新來過",
                          allowOutsideClick: false,
                          imageUrl: "image/22.jpg",
                          imageHeight: 300
                        });
                      }
                      else {
                        Swal.fire({
                          title: "海妖的報恩？",
                          text: "原來海妖受傷了，你幫忙治療後，海妖為了感謝你將你送到海岸對面",
                          allowOutsideClick: false,
                          confirmButtonText: "繼續上路",
                          imageUrl: 'image/23.jpg',
                          imageHeight: 300
                        }).then(function () {
                          Swal.fire({
                            title: "組成鬼王征伐隊？",
                            text: "渡過海岸後到了大江山腳下，你看見前方有個可疑的人影，是否要去查看？",
                            confirmButtonText: '不要管他',
                            cancelButtonText: '向他搭話',
                            showCancelButton: true,
                            allowOutsideClick: false,
                            imageUrl: 'image/19.jpeg',
                            imageHeight: 300,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33'
                          }).then((result) => {
                            if (result.dismiss !== 'cancel') {
                              Swal.fire({
                                title: "GAME OVER",
                                text: "對方發現了你，以為你是敵人，拿刀揮向了你",
                                confirmButtonText: "重新來過",
                                allowOutsideClick: false,
                                imageUrl:
                                  "image/20.jpg",
                                imageHeight: 300
                              });
                            }
                            else {
                              Swal.fire({
                                title: "得到強大戰力",
                                text: "上前搭話後發現是同樣來討伐鬼王的強大妖怪，你說服對方成為你的式神同行",
                                allowOutsideClick: false,
                                confirmButtonText: "繼續上路",
                                imageUrl: 'image/18.jpg',
                                imageHeight: 300
                              }).then(function () {
                                Swal.fire({
                                  title: "決戰鬼王座",
                                  text: "費盡千辛萬苦終於找到了鬼王，但鬼王散發的強大妖立氣場讓你不敢貿然接近，此時你該？",
                                  confirmButtonText: '奮力一擊',
                                  cancelButtonText: '有話好說',
                                  showCancelButton: true,
                                  allowOutsideClick: false,
                                  imageUrl: 'image/17.jpeg',
                                  imageHeight: 300,
                                  confirmButtonColor: '#3085d6',
                                  cancelButtonColor: '#d33'
                                }).then((result) => {
                                  if (result.dismiss === 'cancel') {
                                    Swal.fire(
                                      {
                                        title:"摯友啊...乾杯！",
                                        text:"你和鬼王互相打了招呼，鬼王很欣賞你的勇氣，邀你坐下來一起喝酒",
                                        confirmButtonText: "和平落幕",
                                        allowOutsideClick: false,
                                        imageUrl:"image/15.jpg",
                                        imageHeight: 300
                                      }
                                    ).then(function(){
                                      finish(1);
                                    });
                                  }
                                  else {
                                    Swal.fire({
                                      title: "回歸寧靜的平安京",
                                      text: "你和式神聯手打敗了鬼王，成功拯救平安京",
                                      allowOutsideClick: false,
                                      confirmButtonText: "回到京都",
                                      imageUrl: 'image/16.jpg',
                                      imageHeight: 300
                                    }).then(function () {
                                      finish(1);
                                    });
                                  }
                                });
                              });
                            }
                          });
                        });
                      }
                    });
                  });
                }
              });
            });
          }
        });
      });
    }
  });
}
function finish(re) {
  if (re) {
    document.body.style.backgroundImage = "url('image/bg3.jpg')";
    mybtn.removeEventListener("click", start);
    mybtn.addEventListener("click", function(){
      location.reload();
    });
    mybtn.value = "恭喜過關";
  }
}
gameplay();