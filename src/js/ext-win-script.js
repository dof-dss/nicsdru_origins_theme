/**
 * @file
 * Provides a script to append an icon to links that open in a new window / tab.
 *
 * There are 3x different types of link / scenario where an icon should be
 * appended to a link in the `#main-content` area. Each is set out below.
 * @see documentation in src/scss/3_components/content/icons.scss
 */

/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.nicsdruOriginsExtWin = {
    attach: function attach (context) {
      var $extLinkText = Drupal.t('external link opens in a new window / tab'),
          $intLinkText = Drupal.t('opens in a new window / tab');
      var $extLinkMarkup = '<span class="visually-hidden">(' + $extLinkText + ')</span><svg aria-hidden="true" class="ico ico-elink"><title>' + $extLinkText + '</title><use xlink:href="#elink"></use></svg>';

      $("#main-content a[href^='http'], #main-content a[href^='//']", context)
        .filter(function () {
          return this.hostname && this.hostname !== location.hostname;
        })
        .not('a.no-ext-icon, .social-links a')
        .once('elink').each(function () {
          // Set attributes.
          $(this)
            .attr('target', '_blank')
            .attr('rel', 'noopener noreferrer');

          // Add the icon.
          // If the link is a card, append the icon to the .card__title.
          if ($(this).find('.card__title').length) {
            $(this).find('.card__title').append($extLinkMarkup);
          } else {
            $(this).append($extLinkMarkup);
          }
        });

      // Internal links with data-ext-url - turn them into external links.
      $("#main-content a[data-ext-type^='External']", context).once('elink').each(function () {
        $(this).attr('href', $(this).attr('data-ext-url'));
      });

      // Internal links in content that open new windows (should be very rare).
      $("#main-content a[target='_blank']", context).once('elink').each(function () {
        $(this).not("a.no-ext-icon, a:has(img), #main-content a[href*='http://'], #main-content a[href*='https://'], #main-content a[href^='//']")
          .append('<span class="visually-hidden">(' + $intLinkText + ')</span><svg aria-hidden="true" class="ico ico-elink"><title>' + $intLinkText + '</title><use xlink:href="#elink"></use></svg>')
          .attr('title', $intLinkText)
          .attr('rel', 'noopener noreferrer');
      });
    }
  };
})(jQuery, Drupal);
