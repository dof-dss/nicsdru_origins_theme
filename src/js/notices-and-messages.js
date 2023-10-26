/**
 * @file
 * JS enhancements for information notices and messages.
 *
 */

/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.nicsdruNoticesAndMessages = {
    attach: function attach (context) {

      $(once('nicsdruNoticesAndMessages', '.info-notice, .messages', context)).each(function(index) {

        // Most info notices and custom webform messages are just css styles added to
        // a div or paragraph. To convey the purpose and importance of these notices
        // to screen reader users, add visually hidden text so that we are not
        // relying on colour alone to convey information.
        // @see https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G14

        // Wrap indicator text in a visually hidden strong element which semantically
        // indicates the text is important.
        var $indicator = $('<strong class="visually-hidden"></strong>');
        var indicatorMsg = 'Important information'; // Default indicator message added to most info notices.

        // Info notices used in webforms may be styled as warnings, errors and status (success) notices. Change
        // the indicator text to reflect the styled purpose of the notice.
        if ($(this).hasClass('info-notice--warning') || $(this).hasClass('messages--warning')) {
          indicatorMsg = 'Warning';
        }
        else if ($(this).hasClass('info-notice--success') || $(this).hasClass('messages--status')) {
          indicatorMsg = 'Success';
        }
        else if ($(this).hasClass('info-notice--error') || $(this).hasClass('messages--error')) {
          indicatorMsg = 'Error';
        }

        $indicator.text(indicatorMsg + ' ');

        // If the first element in the notice is a (visible) heading or a summary, add the indicator to that.
        var $firstHeading = $(this).children('h2:first-child, h3:first-child, h4:first-child, summary');
        if ($firstHeading.length && !$firstHeading.hasClass('visually-hidden')) {
          $firstHeading.prepend($indicator);
        }
        else if (!$firstHeading.length) {
          // Just add indicator so it is first element in the notice.
          $(this).prepend($indicator);
        }
      });
    }
  };

})(jQuery, Drupal);
