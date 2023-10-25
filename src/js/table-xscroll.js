/**
 * @file
 * To create a responsive table, add a .x-scroll container around the <table>.
 * This allows the table to be scrolled horizontally inside the container on
 * narrow screens.
 */

/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.nicsdruOriginsTablesXScroll = {
    attach: function attach (context) {
      $(once('x-scroll', '#main-article table', context)).each(function(index) {
        // Only wrap the table if it doesn't already have an .x-scroll wrapper.
        var hasScrollWrapper = $(this).closest('div').hasClass('x-scroll');
        if (!hasScrollWrapper) {
          $(this).wrap('<div class="x-scroll"></div>');
        }
      });
    }
  };
})(jQuery, Drupal);
