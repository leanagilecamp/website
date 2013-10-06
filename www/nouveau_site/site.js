$(document).ready(function () {
    afficheOnglet('accueil');


    $('ul.nav li').click(function () {
        var nav_id = $(this).attr('id');
        var content_id = nav_id.replace('-navbar', '');
        afficheOnglet(content_id);
    });

    $('.navbar-brand').on('click', function () {
        afficheOnglet('accueil');
    });

    $("#menu").on("affiche:accueil", function(evt) {
        initButtonsBindings();
        pourNousContacter();
    });

    $("#menu").on("affiche:guide", function(evt) {
        initButtonsBindings();
        initScrollSpy();
    });

    $("#menu").on("affiche:evenements", function(evt) {
        pourNousContacter();
    });

    function afficheOnglet(id) {
        $.get(id + '.html', function(data) {
            $('#page').html(data);
            $("#menu").trigger("affiche:" + id);

            $('ul.nav li').removeClass('active');
            $('#' + id + '-navbar').addClass('active');
        });
    }

    function initScrollSpy() {
        var offset = 70;
        $('body').scrollspy({ target: '#toc-guide-container', offset: offset });
        $('.bs-sidenav li a').click(function(event) {
            event.preventDefault();
            $($(this).attr('href'))[0].scrollIntoView();
            scrollBy(0, - offset);
        });
    }

    function pourNousContacter() {
        $('.pour_nous_contacter').append(String.fromCharCode(99, 111, 110, 116, 97, 99, 116, 64, 108, 101, 97, 110, 97, 103, 105, 108, 101, 99, 97, 109, 112, 46, 102, 114));
    }

    function initButtonsBindings() {
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
            afficheOnglet('guide');
            return false;
        });
    }

});
