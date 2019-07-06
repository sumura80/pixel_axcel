### README
### Application Name: ピクセルアートストア 'http://pixel_axcel.surge.sh/index.html'

## Overview
ピクセル画像の投稿・販売・購入をできるサイト。
主にjQueryの練習のために作ったサイト。


## Function in this app:
## [使用したjQueryの機能]
```
1. 右クリックの禁止 (bind, contextmenu)
2. Topへ戻るボタンの表示 (scrollTop, slideUp, slideDown, hide)
3. Topへ戻る (animate, scrollTop)
4. slideDown表示 (hide, scroll, scrollTop, slideDown)
5. 投稿ページ画像の詳細入力文字限定 (keyup,trim,addClass)
6. 投稿画像の表示 (change,a ttr, readAsDataURL)
7. 販売希望価格計算 (keyup, blur, change, replace, toFixed, text)
8. タグを追加 (click,append)
9. タグを削除 (click,remove)
10. 発送地域の区別（国内と海外）idで判別 (change, prop, hide, show)
11. 注文商品の値段の取得（複数選択可能） (change, each, tolocaleString)
12. 税額の計算(注文商品の合計金額ｘ税額8%)(toFixed)
13. 配送料（国内と海外により変化する） (Number,change, prop)
14. 会員価格の40%割引 (change, is:checked, toFixed)
15. パスワード一致確認 (keyup,text)
16. 確認用パスワードを表示 (change,attr)
17. ギャラリーのタブ (click, index, removeClass, eq, addClass, removeClass)
18. サイドバー固定 (on, scroll, scrollTop, addClass, removeClass)
19. ツールチップ (tooltip)
```



## Note
Bootstrap4
インフラ:Surge (https://surge.sh/)
Fontawesome5
