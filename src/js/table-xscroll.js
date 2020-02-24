/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.nicsdruOriginsTablesXScroll = {
    attach: function attach (context) {
      var $tables = $('#main-article table', context);
      $tables.once('x-scroll').each(function(index) {
        $(this).wrap('<div class="x-scroll"></div>');
      });
    }
  };
})(jQuery, Drupal);
