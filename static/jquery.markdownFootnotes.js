$(function() {
	$("a[class=footnote-ref]").each(function(){
		let link = $(this);
		let token = link.attr('href').substr(1);
		let footnoteContent = $("#" + token).html();
		
		$('body').append('<div id="overlay-fn-' + token + '" class="footnoteContent">' + footnoteContent + '</div>');
		
		link.click(function(){
			let currentFootnote = $("#overlay-fn-" + token);
			// If the footnote is already displayed, hide it instead
			if (currentFootnote.is(':visible')) {
				currentFootnote.slideUp(200);
				//currentFootnote.hide();
			} else {
				$('.footnoteContent').slideUp(200);
				//$('.footnoteContent').hide();
				currentFootnote.slideDown(400);
				//currentFootnote.show();
			}
			return false;
		});
	});

	$('.footnoteContent a.footnote-backref').remove();
	$('.footnoteContent').prepend('<a href="#" class="closeFootnote">&times;</a>');
	$('.closeFootnote').click(function(){
		$(this).closest('.footnoteContent').slideUp(200);
		//$(this).closest('.footnoteContent').hide();
		return false;
	});
});