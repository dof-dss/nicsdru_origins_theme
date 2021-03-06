/*
 * @file
 * Extends behaviours to Drupal cores autocomplete functionality.
 */
/* eslint-disable */
(function ($, Drupal) {

  Drupal.theme.ajaxProgressThrobber = function () {
    var spinner = '' +
      '<div class="ajax-spinner ajax-spinner--inline">' +
      '<span class="ajax-spinner__label">' + Drupal.t('Please wait', {}, {
        context: 'Loading text for Drupal cores Ajax throbber (inline)'
      }) + '</span>' +
      '<div class="rect1"></div>' +
      '<div class="rect2"></div>' +
      '<div class="rect3"></div>' +
      '<div class="rect4"></div>' +
      '<div class="rect5"></div>' +
      '</div>';

    return spinner;
  };

  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    var spinner = '' +
      '<div class="ajax-spinner ajax-spinner--fullscreen">' +
      '<span class="ajax-spinner__label">' + Drupal.t('Please wait', {}, {
        context: 'Loading text for Drupal cores Ajax throbber (fullscreen)'
      }) + '</span>' +
      '<div class="rect1"></div>' +
      '<div class="rect2"></div>' +
      '<div class="rect3"></div>' +
      '<div class="rect4"></div>' +
      '<div class="rect5"></div>' +
      '</div>';

    return spinner;
  };
})(jQuery, Drupal);
