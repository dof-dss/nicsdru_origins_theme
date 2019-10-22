/*
 * @file
 * Provides a script for adding a button and toggling items in a unordered list.
 * @see documentation in src/scss/3_components/navigation/toggle-list.scss
 */
// eslint-disable-next-line func-names
(function($) {
  /* Make the list of related articles collapse to no more than max number of
   * items and add a toggle to show the rest. The default max number is 7 items
   * by default, can be changed by adding a `data-toggle-length` attribute to
   * the parent wrapper where the `.toggle-list` class is declared.
   */
  // eslint-disable-next-line one-var,no-var
  var $relatedArticleList = $('.toggle-list ul'),
    maxRelated =
      parseInt($('.toggle-list').attr('data-toggle-length'), 10) || 7,
    relatedTotal = $relatedArticleList.children('li').length,
    // eslint-disable-next-line
    relatedToggleText = 'Show ' + (relatedTotal - maxRelated) + ' more';

  if (relatedTotal > maxRelated) {
    $relatedArticleList.attr({ id: 'toggle-menu', 'aria-live': 'polite' });

    $relatedArticleList
      .children('li:nth-child(n+' + (maxRelated + 1) + ')')
      .toggle();

    // eslint-disable-next-line
    $relatedArticleList.after('<a href="#" id="related-toggle" class="toggle-btn" role="button" aria-pressed="false" aria-controls="toggle-menu">' + relatedToggleText + '</a>');

    // eslint-disable-next-line func-names
    $('#related-toggle').click(function() {
      $relatedArticleList
        // eslint-disable-next-line
        .children('li:nth-child(n+' + (maxRelated + 1) + ')')
        .toggle('slow');
      $(this)
        .attr('aria-pressed', 'true')
        .hide();
      return false;
    });
  }
})(jQuery);
