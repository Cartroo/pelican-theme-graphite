$(function() {
	
	$("span[class=toctitle]").each(function(){
		var orig_content = $(this).html();
		$(this).html("&#x229E;&#x3000;" + orig_content);
		$(this).css("cursor", "s-resize");
		$(this).next().toggle(false);
		$(this).click(function(){
			let toc_list = $(this).next();
			if (toc_list.is(":visible")) {
				$(this).html("&#x229E;&#x3000;" + orig_content);
				$(this).css("cursor", "s-resize");
			} else {
				$(this).html("&#x229F;&#x3000;" + orig_content);
				$(this).css("cursor", "n-resize");
			}
			toc_list.toggle(200);
		});
	});
});
