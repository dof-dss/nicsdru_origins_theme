/**
 * @file
 * Script to stop 'honeypot' form inputs in a webform from being tabbed into.
 *
 * @see documentation in src/scss/3_components/forms/honeypot.scss
 */

/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.nicsdruOriginsHoneypot = {
    attach: function attach (context) {
      var $nodewebform = $('.webform-submission-form');

      // Honey pot elements for bots
      // Remove from tab order and disable
      $('.for-pooh-bear', $nodewebform)
        .find('input, select, textarea')
        .attr("tabindex", "-1")
        .prop("disabled", true);
    }
  };
})(jQuery, Drupal);
