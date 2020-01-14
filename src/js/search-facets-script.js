/*
 * @file
 * Provides a script for .
 */
/* eslint-disable */
(function($, Drupal) {
  Drupal.behaviors.nicsdruOriginsFacets = {
    attach: function attach (context) {
      // Add some progressive enhancement to the `.facet--title`.
      $('.facet--dropdown-links .facet--title', context).once('facetDropdown').each(function (index, widget) {
        var $widget = $(widget);
        var $widgetLinks = $widget.nextAll('.facets-widget-links');
        var $facetId = $widgetLinks.attr('id');
        var $wrapper = $('<a />', {
          'class'         : 'facet--btn',
          'href'          : '#',
          'role'          : 'button',
          'aria-expanded' : 'false',
          'aria-controls' : $facetId,
        });
        $widget.append('<svg aria-hidden="true" class="ico ico-arrow-down"><use xlink:href="#arrow"></use></svg>');
        $widget.wrapInner($wrapper);

        $widgetLinks.toggle();

        var $widgetBtn = $widget.find('a.facet--btn');
        var clickHandler = function (e) {
          e.preventDefault();
          $widgetBtn.attr('aria-expanded', function (i, attr) {
            return attr == 'true' ? 'false' : 'true'
          });
          $widgetBtn.toggleClass('active');
          $widgetLinks.toggle();
        };
        // Add handler for clicks on widget links.
        $widgetBtn.on('click', clickHandler);
      });
    },
  };
})(jQuery, Drupal);
