/*
 * @file
 * Provides a script to append an icon to links that open in a new window / tab.
 * There are 3x different types of link / scenario where an icon should be
 * appended to a link in the `#main-content` area. Each is set out below.
 * @see documentation in src/scss/3_components/content/icons.scss
 */
/* eslint-disable */
(function($, Drupal) {
  Drupal.behaviors.nicsdruOriginsExtWin = {
    attach: function (context) {
      var $extLinkText = Drupal.t('external link opens in a new window / tab'),
        $intLinkText = Drupal.t('opens in a new window / tab');

      // External links - add identifiers
      $("#main-content a[href*='http://'],#main-content a[href*='https://'],#main-content a[href^='//']", context)
        .once('elink').each(function () {
        $(this).not('a.no-ext-icon, a:has(img), .social-links a')
          .filter(function () {
            return this.hostname && this.hostname !== location.hostname;
          })
          .append('<span class="visually-hidden">(' + $extLinkText + ')</span><svg aria-hidden="true" class="ico ico-elink"><title>' + $extLinkText + '</title><use xlink:href="#elink"></use></svg>')
          .attr('title', $extLinkText)
          .attr('target', '_blank')
          .attr('rel', 'noopener noreferrer');
      });

      // Internal links with data-ext-url - turn them into external links
      $("#main-content a[data-ext-type^='External']", context).once('elink').each(function() {
        $(this).attr('href', $(this).attr('data-ext-url'));
        if ($(this).parent().hasClass('moreLink')) {
          $(this).html('visit site');
        }
      });

      // Internal links in content that open new windows (should be very rare)
      $("#main-content a[target='_blank']", context).once('elink').each(function () {
        $(this).not("a.no-ext-icon, a:has(img), #main-content a[href*='http://'], #main-content a[href*='https://'], #main-content a[href^='//']")
          .append('<span class="visually-hidden">(' + $intLinkText + ')</span><svg aria-hidden="true" class="ico ico-elink"><title>' + $intLinkText + '</title><use xlink:href="#elink"></use></svg>')
          .attr('title', $intLinkText)
          .attr('rel', 'noopener noreferrer');
      });
    }
  };
})(jQuery, Drupal);
