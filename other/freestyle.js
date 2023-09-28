/**
 * Generic freestyle template fixes
 */
(function ($, window, wb) {
    "use strict";

    // Check dependencies
    if (typeof $ === 'undefined') {
        throw new Error('jQuery.js must load before freestyle.js');
    } else if (typeof wb === 'undefined') {
        throw new Error('wet-beow.js must load before freestyle.js');
    }

    // Environment detection
    if (!wb.env) {
        wb.env = window.location.hostname === 'author-canada-prod.adobecqms.net' ? 'staging' : 'production';
    }

    // Empty header/footer fix
    if (wb.env === 'staging') {
        var empty_header = $('body>header').filter(function () { return !$(this).text().trim() });
        var empty_footer = $('body>footer').filter(function () { return !$(this).text().trim() });

        if (empty_header.length || empty_footer.length) {
            var url = wb.lang == 'en' ? 'https://www.canada.ca/en/department-national-defence.html' : 'https://www.canada.ca/fr/ministere-defense-nationale.html'

            $.get(url).done(function (data) {
                var $doc = $($.parseHTML('<div>' + data + '</div>'));

                empty_header.replaceWith($doc.children('header'));
                empty_footer.replaceWith($doc.children('footer'));
            }).always(function () {
                withTemplate()
            })
        } else {
            withTemplate();
        }
    } else {
        withTemplate();
    }

    function withTemplate() {

        // Replace breadcrumbs with new ones if present
        var bc_old = $('#wb-bc ol.breadcrumb');
        var bc_new = $('ol.breadcrumb.hidden:first');

        if (bc_old.length && bc_new.length) {
            bc_old.replaceWith(
                bc_new.detach().removeClass('hidden')
            );
        }

        // Replace language links with new ones if present in meta tags
        $('#wb-lng a').each(function () {
            var $a = $(this);
            var lang = $a.attr('lang');
            var href = $("link[rel='alternate'][hreflang='" + lang + "']").attr('href');

            if (href) {
                $a.attr('href', href);
            }
        })

        // Ensure dev links contain /content/canadasite/
        if (wb.env === 'staging') {
            $('a[href]').attr('href', function (i, href) {
                return href.replace(/^(https:\/\/author-canada-prod\.adobecqms\.net\/|\/)(en|fr)/i, '$1content/canadasite/$2');
            });
        }

        // Insert date modified
        if (!$('#wb-dtmd').length) {
            var modified = $('meta[name="dcterms.modified"]').attr('content');
            $('main').append('<div class="container"><div class="pagedetails"><dl id="wb-dtmd"><dt>Date modified: </dt><dd><time property="dateModified">' + modified + '</time></dd></dl></div></div>');
        }
    }



})(jQuery, window, wb);