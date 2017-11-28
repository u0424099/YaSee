//open overlay
$("img.menu").click(function(){
	$("div.overlay").slideDown();
})

//close overlay
$("img.cancel").click(function(){
	$("div.overlay").slideUp();
})