/*
 * @file
 * Provides a script for adding a button and toggling items in a unordered list.
 * @see documentation in src/scss/3_components/navigation/toggle-list.scss
 */
/* eslint-disable */
(function($, Drupal) {
  Drupal.behaviors.nicsdruOriginsToggleBtn = {
    attach: function attach (context) {
      /* Make the list of related articles collapse to no more than max number
       * of items and add a toggle to show the rest. The default max number is 7
       * items by default, can be changed by adding a `data-toggle-length`
       * attribute to the parent wrapper where the `.toggle-list` class is
       * declared.
       */
      // eslint-disable-next-line one-var,no-var
      $('.toggle-list', context).once('toggleBtn').each(function () {
        var $relatedArtList = $(this).children('ul'),
          maxRel = parseInt($(this).attr('data-toggle-length'), 10 || 7),
          relTotal = $relatedArtList.children('li').length,
          available = relTotal - maxRel,
          relToggleText = Drupal.t('Show @num more', {'@num': available});

        if (relTotal > maxRel) {
          $relatedArtList.attr({ id: 'toggle-menu', 'aria-live': 'polite' });

          $relatedArtList.children('li:nth-child(n+' + (maxRelated + 1) + ')').toggle();

          $relatedArtList.after('<a href="#" id="related-toggle" class="toggle-btn" role="button" aria-pressed="false" aria-controls="toggle-menu">' + relToggleText + '<svg aria-hidden="true" class="ico ico-arrow-down"><use xlink:href="#arrow"></use></svg></a>');

          $('#related-toggle').click(function() {
            $relatedArtList
            // eslint-disable-next-line
              .children('li:nth-child(n+' + (maxRelated + 1) + ')')
              .toggle('slow');
            $(this)
              .attr('aria-pressed', 'true')
              .hide();
            return false;
          });
        }
      });
    },
  };
})(jQuery, Drupal);
