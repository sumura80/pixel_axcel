$(document).ready(function(){
  
//右クリックの禁止
$('img.no-copy').bind("contextmenu",function(e){
  return false;
    });

//Topへ戻るボタンの表示
var $pagetop = $('#pagetop')
$pagetop.hide();
$(window).on('scroll',function(){
	if( $(this).scrollTop() < 250 ){
		$pagetop.slideUp('slow');
	}else {
		$pagetop.slideDown('slow');
	}
});

	//Topへ戻る
$pagetop.click(function(){
 $('body, html').animate({
	scrollTop:0
 }, 500);
 return false;
});


//Pixel Axcelの特徴 slideDown表示
var $pageIntro = $('.page-intro')
$pageIntro.hide();
$(window).on('scroll',function(){
	if( $(this).scrollTop() < 500 ){
		$pageIntro.slideDown(1200);
	}
});

//投稿ページ画像の詳細入力文字限定
var postCommentMax = 30;
$('#post-comment').keyup(function(){
var comlength = postCommentMax - $(this).val().trim().length;
$('#comment_nums').text(comlength);
console.log(comlength);
if(comlength < 30){
	$('#comment_nums').addClass('over30letters');
}
if(comlength < 20){
	$('#comment_nums').addClass('over20letters');
}
if(comlength < 10){
	$('#comment_nums').addClass('over10letters');
}
});


//投稿画像の表示
$('#postImage').change(function(event){
	var file = event.target.files[0];
	var reader = new FileReader();
	reader.onload = (function(file){
		return function(e){
			$('#dafaultImg').attr('src',e.target.result);
			$('#dafaultImg').attr('title',file.name);
		}
	})(file);
  reader.readAsDataURL(file);
});


//販売希望価格計算　入力金額の85％分(15%手数料)を控除
$('form').on('keyup blur change','#inputPrice',function(){
	var inputPrice = $('#inputPrice').val();
	var inputPriceCheck = inputPrice.replace(/[^0-9]/g, '');
	var percent = (85 / 100).toFixed(2);
	var afterCal = inputPriceCheck * percent;
	$('#profitResult').text(afterCal.toFixed(0));
});


//タグを追加
$('#addclick').click(function(){
var incontent = $('#typedin').val() 
console.log(incontent);
$('#tags').append('<div class="col-sm-4 tagself"><p id="tagarea">'+incontent+'</p></div>');
$('#typedin').val('');
});

//タグを削除
$('body').on('click', '.tagself',function(){
	$(this).remove();
});


//発送地域の区別（国内と海外）idで判別
$('[name="shipping_address"]:radio').change(function(){
		if($('[id="domestic_shipping"]').prop('checked')){
		$('.address').hide();
		$('.address_domestic').show();
	}else if($('[id="international_shipping"]').prop('checked')){
		$('.address').hide();
		$('.address_international').show();
	}
});



//注文商品の値段の取得（複数選択可能）
$('#itemselection').change(function(){
	var totalPrice = 0;
	var taxrate= 0.08
	$('option:selected').each(function(){
		//data-priceが取得できるかの確認
		var result = $(this).data('price');
		totalPrice += $(this).data('price');
		var numstotalPrice = totalPrice.toLocaleString();
		console.log(numstotalPrice);
		$('#sub_total').val(numstotalPrice);
	})

	//税額の計算　上記の注文商品の合計金額ｘ税額8%
	var actualTax = totalPrice * taxrate
	var actualTaxRound= actualTax.toFixed(0);
	console.log(actualTaxRound);
	$('#taxprice').val(actualTaxRound);



//配送料（国内と海外）
separatedPrice = 980
var numtotalPrice = Number(totalPrice);
var numactualTaxRound = Number(actualTaxRound);
$('#total_price').val(numtotalPrice + numactualTaxRound + separatedPrice);

	
$('[name="shippingFeeRadio"]:radio').change(function(){
	if($('[id="kokunai"]').prop('checked')){
		$('#shipping_price').val('980');
		 separatedPrice = 980;
	}else if($('[id="kaigai"]').prop('checked')){
		$('#shipping_price').val('2980');
		 separatedPrice = 2980;
	}
$('#total_price').val(numtotalPrice + numactualTaxRound + separatedPrice);
	});
});


//会員価格の40%割引
$('#memberDiscount').change(function(){
	var isChecked = $(this).is(':checked');
	if(isChecked){
		var beforePrice = $('#total_price').val();
		var memberPrice = (beforePrice * 0.6).toFixed(0);
		$('#memberPrice').val(memberPrice);
		console.log(memberPrice);
	}else{
		var beforePrice = $('#total_price').val();
		$('#memberPrice').val('');
	}
});


//パスワード一致確認
$('#conpassword').keyup(function(){
	var pass = $('#password').val();
	var conpass = $('#conpassword').val();
	console.log(pass + ':' +conpass);
	if(pass != conpass){
		$('#resultPassCheck').text('パスワードが一致しません。パスワードが一致しないと会員価格は適用されません。').addClass('confirmPassword');
	}else{
		$('#resultPassCheck').text('');
	}
});



//確認用パスワードを表示
$('#checkpw').change(function(){
	var isChecked = $(this).is(':checked');
	if(isChecked){
		$('#conpassword').attr('type','text');
	}else{
		$('#conpassword').attr('type','password');
	}
});


//ギャラリーのタブ
$('.tabs li').click(function(){
	var number = $('.tabs li').index(this);
	$('.tabitem').removeClass('active');
	$('.tabitem').eq(number).addClass('active');
	$('.tabs li').removeClass('active');
	$(this).addClass('active');

});


//サイドバー固定
var $fixedsidebar = $('.fixed-side-bar')
$(window).on('scroll',function(){
	if( $(this).scrollTop() > 480 ){
		$fixedsidebar.addClass('sidebar_fixed');
	}else {
		$fixedsidebar.removeClass('sidebar_fixed');
	}
});

//Tooltip
$('.custom-control-label').tooltip();











});