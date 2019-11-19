/*
 * @file
 * Provides a simple script to remove empty tags, in particular 'p' tags
 * from the page.
 */
// eslint-disable-next-line func-names
(function($) {
  Drupal.behaviors.nicsdruOriginsRemoveEmptyTags = {
    attach: function attach(context) {
      $('p', context)
        .once('emptyTags')
        // eslint-disable-next-line func-names
        .filter(function() {
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
})(jQuery);
