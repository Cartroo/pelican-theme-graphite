$(function() {
	
	$("a[class=footnote-ref]").each(function(){
		var link = $(this);
		var token = link.attr('href').substr(1);
		var footnoteContent = $(document.getElementById(token)).html();
		
		$('body').append('<div id="overlay-' + token + '" class="footnoteContent">' + footnoteContent + '</div>');
		
		link.click(function(){
			var $currentFootnote = $(document.getElementById('overlay-' + token));
			
			// If the footnote is already displayed, hide it instead
			if ($currentFootnote.is(':visible')) {
				$currentFootnote.slideUp('fast');

			} else {
				$('.footnoteContent').hide();
				$currentFootnote.slideDown('fast');
			}
			
			return false;
		});
	});
	
	$('.footnoteContent a[rev=footnote]').remove();
	$('.footnoteContent').prepend('<a href="#" class="closeFootnote">&times;</a>');
	$('.closeFootnote').click(function(){
		$(this).closest('.footnoteContent').slideUp('fast');
		return false;
	});
});
