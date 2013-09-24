$(document).ready(function () {
	$('.pour_nous_contacter').append(String.fromCharCode(99, 111, 110, 116, 97, 99, 116, 64, 108, 101, 97, 110, 97, 103, 105, 108, 101, 99, 97, 109, 112, 46, 102, 114));

	$('ul.nav li').click(function () {
            var nav_id = $(this).attr('id');
            var content_id = nav_id.replace('-navbar', '');
	    afficheOnglet(content_id);
        });
	
	$('.brand').on('click', function() {
	    afficheOnglet('accueil');
	});

	function afficheOnglet(id) {
            $('.content').addClass('hidden');
            $('#' + id).removeClass('hidden');
            $('ul.nav li').removeClass('active');
            $('#' + id + '-navbar').addClass('active');
	}

	$('ul.nav li:contains("Guide")').click(telechargeGuide);

	function telechargeGuide() {
	    if ($("#conclusion").length == 0) {
	        $.get('guide.html', function(data) {
	            $('#leguide').append(data);
	        });
	    }
	}

	$('.pdfButton').on('click', function () {
	    trackOutboundLink(this, 'inbound download', 'download pdf'); 
	    return false;
	});
	$('.epubButton').on('click', function () {
	    trackOutboundLink(this, 'inbound download', 'download epub'); 
	    return false;
	});
	$('.azw3Button').on('click', function () {
	    trackOutboundLink(this, 'inbound download', 'download azw3'); 
	    return false;
	});
	$('.htmlButton').on('click', function () {
	    trackOutboundLink(this, 'inbound html'); 
	    telechargeGuide();
	    afficheOnglet('leguide'); 
	    return false;
	});
});
