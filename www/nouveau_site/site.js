$(document).ready(function () {
    afficheOnglet('accueil');
    $('.pour_nous_contacter').append(String.fromCharCode(99, 111, 110, 116, 97, 99, 116, 64, 108, 101, 97, 110, 97, 103, 105, 108, 101, 99, 97, 109, 112, 46, 102, 114));

    $('ul.nav li').click(function () {
        var nav_id = $(this).attr('id');
        var content_id = nav_id.replace('-navbar', '');
        afficheOnglet(content_id);
    });

    $('.navbar-brand').on('click', function () {
        afficheOnglet('accueil');
    });

    function afficheOnglet(id) {
        $.get(id + '.html', function(data) {
            $('#page').html(data);
        });
        $('ul.nav li').removeClass('active');
        $('#' + id + '-navbar').addClass('active');
    }

    $('ul.nav li:contains("Guide")').click(telechargeGuide);

    function telechargeGuide() {
        if ($("#conclusion").length == 0) {
            $.get('guide.html', function (data) {
                $('#leguide').append(data);
                setActiveTocItem();
            });
        }
    }

    function setActiveTocItem() {
        $('body').scrollspy({ target: '#toc-guide-container', offset: 80 });
    }

    $('.pdfButton').on('click', function () {
        trackOutboundLink(this, 'inbound download', 'download pdf');
        return false;
    });
    $('.epubButton').on('click', function () {
        trackOutboundLink(this, 'inbound download', 'download epub');
        return false;
    });
    $('.kindleButton').on('click', function () {
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
