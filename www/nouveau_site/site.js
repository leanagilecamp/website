$(document).ready(function () {
	$('#pour_nous_contacter').append(String.fromCharCode(99, 111, 110, 116, 97, 99, 116, 64, 108, 101, 97, 110, 97, 103, 105, 108, 101, 99, 97, 109, 112, 46, 102, 114));

	$('ul.nav li').click(function () {
            var nav_id = $(this).attr('id');
            var content_id = nav_id.replace('-navbar', '');

            $('.content').addClass('hidden');
            $('#' + content_id).removeClass('hidden');
            $('ul.nav li').removeClass('active');
            $(this).addClass('active');
        });

	$('ul.nav li:contains("Guide")').click(function () {
	    $.get('guide.html', function(data) {
	        $('#leguide').append(data);
	    });
	});
});
