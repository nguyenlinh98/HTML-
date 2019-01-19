$(function(){
 $("#action").click(function(){
	// 	// // them class(addClass)
	// 	// $("p#text").addClass('action');
	// 	// // #id la duy nhat
	// 	// // tag#id tim den cac tag co cung id
	// 	// $('li').filter('.text').css('color','blue');
	// 	// //filter dung de loc cac truong chung class
	$('.content').fadeTo(1000,0.5);// 1000 la toc do ,0.5 la do mo tu 0->1
	//3000 theo giay hien thi
	// $('.content').toggle(3000);
	// ham toggle dung an hien 
	//**********
	// siledown hien tu duoi len 
	// $('.content').sidedown(1000);
	//  });
 	//hien theo chieu  doc
 	$('.content').slideToggle(1000);
	 });
 // an 
// fade in,fade out an hien hieu ung
 $(".content").click(function(){
 	$('.content').fadeOut(3000);
	});
 });