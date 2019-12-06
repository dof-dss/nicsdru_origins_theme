/*
 * @file
 * Extends behaviours to Drupal cores autocomplete functionality.
 */
/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.originsAutoCompete = {
    attach: function attach(context) {
      $(context).find('input.form-autocomplete').once('originsAutoComplete').each(function (index, value) {
        var $input = $(value);
        var timeout = 400;
        var classRemoveTimeout = void 0;
        var classRemove = function classRemove($autoCompleteElem) {
          $autoCompleteElem.removeClass('is-autocompleting');
          $autoCompleteElem.next('.autocomplete-indicator ').empty();
        };
        var autoCompleteMessage = $("<span>", {class: "visually-hidden"}).html($(value).attr('data-autocomplete-msg'));

        $input.on('input autocompletesearch autocompleteresponses', function (event) {
          if (event && event.type && event.type === 'autocompletesearch') {
            $(event.target).addClass('is-autocompleting');
            $(event.target).next('.autocomplete-indicator').append(autoCompleteMessage);
          }
          clearTimeout(classRemoveTimeout);
          classRemoveTimeout = setTimeout(classRemove, timeout, $(event.target));
        });
      });
    }
  };
})(jQuery, Drupal);
