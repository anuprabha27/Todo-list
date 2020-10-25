$("ul").on("click","li",function(){
	 $(this).toggleClass("completed");
})
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut();
	event.stopPropagation();
})
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$("ul").append("<li><span><i id = 'trash' class='far fa-trash-alt'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
})
$("#fspan").click(function(){
	$("input[type = 'text']").fadeToggle();
})