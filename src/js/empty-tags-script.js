/**
 * @file
 * A simple script to remove empty tags, in particular 'p' tags from the page.
 */

// eslint-disable-next-line
(function ($) {
  Drupal.behaviors.nicsdruOriginsRemoveEmptyTags = {
    attach: function attach(context) {
      $(once('emptyTags', 'p', context))
        // eslint-disable-next-line
        .filter(function () {
          return (
            $.trim(
              $(this)
                .html()
                // eslint-disable-next-line
                .replace(/&nbsp;/g, '')) === ''
          );
        })
        .remove();
    },
  };
})(jQuery, once);
