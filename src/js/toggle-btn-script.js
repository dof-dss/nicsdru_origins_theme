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
        let maxItems = parseInt($(this).attr('data-toggle-length'), 10);
        if (isNaN(maxItems)) maxItems = 7;

        let $toggleList = $(this).find('ul'),
            itemCount = $toggleList.children('li').length,
            toggleItemCount = itemCount - maxItems,
            toggleBtnText = Drupal.t('Show @num more', {'@num': toggleItemCount}),
            $toggle = $(
              '<a href="#" id="more-toggle" class="toggle-list__toggle" role="button" aria-pressed="false" aria-controls="toggle-menu">' +
                toggleBtnText +
                '<svg aria-hidden="true" class="ico ico-arrow-down"><use xlink:href="#arrow"></use></svg>' +
              '</a>'
            );

        $toggle.click(function(event) {
          event.preventDefault();
          $toggleList
            // eslint-disable-next-line
            .children('li:nth-child(n+' + (maxItems + 1) + ')')
            .toggle('slow');
          $(this)
            .attr('aria-pressed', 'true')
            .hide();
        });

        if (itemCount > maxItems) {
          $toggleList.attr({ id: 'toggle-menu', 'aria-live': 'polite' });
          $toggleList.children('li:nth-child(n+' + (maxItems + 1) + ')').toggle();
          $toggleList.after($toggle);
        }
      });
    },
  };
})(jQuery, Drupal);
