//(現在位置を取得)をクリックすると位置情報を取得して近くのレストランを検索
function test() {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback); //位置情報の取得


// ユーザーの現在の位置情報を取得、成功したらそのまま店舗検索に入る
function successCallback(position) {

//緯度と経度を取得し変数に格納、これを後ろでapiのパラメータとして渡す

  var gl_lati = position.coords.latitude;
      gl_long = position.coords.longitude;


//結果を表示する
  var showResult = result => {
    result.rest.map( item => {

//カード形式で表示できるようにhtmlを生成している
      $("#shopcard").append(`
        <center>
        <img class="card-img"  src="${item.image_url.shop_image1}">
        </center>
         <div class="card-content"><h1 class="card-title">${item.name}</h1>
           <p class="card-text">アクセス:${item.access.station}から${item.access.walk}分</p>
         </div>
         <div class="card-link">
           <a href="${item.url}" target="_blank">About</a>
         </div><br>
        `)
    })
  }

  $( function () {
    const url = "https://api.gnavi.co.jp/RestSearchAPI/v3/"
    const params = {
      keyid: "",
      latitude:  "",
      longitude: "",
      range: "",
      hit_per_page: "",
    }


      params.latitude = gl_lati   //緯度をgeolocationで取得してその値を入れる
      params.longitude = gl_long  //経度をgeolocationで取得してその値を入れる
      params.range = $("#distance").val()   //検索範囲は選択されたものがここに代入される
      params.hit_per_page = 100   //1ページあたりの表示件数
      $.getJSON( url, params, result => {
          showResult( result )
        })


  })
}

//位置情報が取得できない場合
function errorCallback(error) {
  var err_msg = "";
  switch(error.code)
  {
    case 1:
      err_msg = "位置情報の利用が許可されていません";
      break;
    case 2:
      err_msg = "デバイスの位置が判定できません";
      break;
    case 3:
      err_msg = "タイムアウトしました";
      break;
  }
  document.getElementById("show_result").innerHTML = err_msg;
  //デバッグ用→　document.getElementById("show_result").innerHTML = error.message;


  }
}
