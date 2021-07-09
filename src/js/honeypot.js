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
      // Honey pot elements for bots
      // Remove from tab order and disable
      $('.webform-submission-form .for-pooh-bear', context).once('honeyPot').each(function () {
        $(this).find('input, select, textarea')
          .attr("tabindex", "-1")
          .prop("disabled", true);
      });
    }
  };
})(jQuery, Drupal);
