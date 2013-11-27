$(document).ready(function () {

    bindEvents();

    var url = document.URL;
    if (url.indexOf('#') !== -1) {
        afficheOngletAuChargement(url);
    } else {
        var tableauChemin = url.split('/');
        var id = tableauChemin[tableauChemin.length - 1].replace('.html', '');
        activeOnglet(id);
        $("#menu").trigger("affiche:" + id);
    }

    function bindEvents() {
        $('ul.nav li').click(function () {
            var nav_id = $(this).attr('id');
            var content_id = nav_id.replace('-navbar', '');
            afficheOnglet(content_id);
            trackInboundLink('inbound html', 'main menu', content_id);
        });

        $("#menu").on("affiche:accueil", function (evt) {
            initButtonsBindings();
            pourNousContacter();
        });

        $("#menu").on("affiche:guide", function (evt, ancre) {
            initButtonsBindings();
            initScrollSpy();
            $('img').on('load', refreshScrollSpy);
            $('.bs-sidebar li a').on('click', function (event) {
                trackInboundLink('inbound html', 'guide menu', this.href.split('#')[1]);
            });
            if (typeof ancre !== 'undefined') {
                $('a[href$="' + ancre + '"]').click();
            }
        });
        $("#menu").on("affiche:evenements", function (evt) {
            pourNousContacter();
        });
    }

    function afficheOngletAuChargement(url) {
        var cheminAvantEtApresAncre = url.split('#');
        if (cheminAvantEtApresAncre.length <= 1) {
            afficheOnglet('accueil');
        } else {
            var chemin = cheminAvantEtApresAncre[1];
            var ongletEtAncre = chemin.split('/');
            var onglet = ongletEtAncre[1];
            var ancre = ongletEtAncre[2];
            afficheOnglet(onglet, ancre);
        }
    }

    function activeOnglet(id) {
        $('ul.nav li').removeClass('active');
        $('#' + id + '-navbar').addClass('active');
    }

    function afficheOnglet(id, ancre) {
        $('#page').load(id + '_include.html', function (data) {
            $("#menu").trigger("affiche:" + id, ancre);

            activeOnglet(id);
        });
    }

    function initScrollSpy() {
        var offset = 70;
        $('body').scrollspy({ target: '#toc-guide-container', offset: offset });
        $('.bs-sidenav li a').click(function (event) {
            event.preventDefault();
            $($(this).attr('href'))[0].scrollIntoView();
            scrollBy(0, -offset + 10);
        });
    }

    function refreshScrollSpy() {
        $('body').scrollspy('refresh');
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
        $('.paperButton').on('click', function () {
            trackOutboundLink(this, 'outbound download', 'Paper: go to lulu');
            return false;
        });
        $('.htmlButton').on('click', function () {
            trackInboundLink('inbound html', 'download html', 'html: go to guide');
            afficheOnglet('guide');
            return false;
        });
    }
});
