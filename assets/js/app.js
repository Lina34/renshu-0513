// 作成の流れ
// 1. 追加ボタンにclickのイベントを登録する
// 2. 追加ボタンがクリックされた時の処理を書く
  // 2.1 画面の入力欄、入力値を取得する
  // 2.2 新しくdivを作成する
  // 2.3 divの背景色に画面の「2.1」で取得した入力値を設定する
  // 2.4 新しく作成したdivにCSSのクラスを追加する
  // 2.5 div[id=box]を取得する
  // 2.6 作成したdivを追加する




let addBtn = document.getElementById("addBtn");
  // クリックイベント
addBtn.addEventListener("click",function(){
  // 2.1 画面の入力欄、入力値を取得する
  let inputcolor = document.getElementById("inputColor");
  // 入力するやつの取得
  let panel = document.getElementsByClassName("panel");

  // boxの作成
  let Div = document.createElement("div");

  // divの背景色に画面の「2.1」で取得した入力値を設定する
  Div.style.backgroundColor = inputcolor.value;

  // 2.4 新しく作成したdivにCSSのクラスを追加する
  Div.classList.add("panel");

  console.log(Div);
  
  
  // 2.5 div[id=box]を取得する
  let Box = document.getElementById("box");
 


  // 2.6 作成したdivを追加する
  Box.insertBefore(Div,Box.firstChild);








});






















