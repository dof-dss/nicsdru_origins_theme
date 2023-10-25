/*
 * @file
 * Menu menu toggle (hamburger) behaviours.
 *
 * @see related html markup in templates/block/block--mainnavigation.html.twig
 * @see related css in src/scss/3_components/navigation/main-menu.scss
 */

/* eslint-disable */
(function($, Drupal) {
  Drupal.behaviors.nicsdruOriginsMainMenuToggle = {
    attach: function attach (context) {

      $(once('mainMenuToggle', '.nav-main', context)).each(function () {
        // Unhide the burger toggle and set aria attributes when the burger button is clicked.
        var $burger = $('#nav-main-toggle');
        $burger
          .removeAttr('hidden')
          .click(function() {
            var active = $(this).attr('aria-expanded') === 'true' || false;
            $(this).attr('aria-expanded', !active)
            $(this).attr('aria-label', (active)? 'Open menu' : 'Close menu');
          });
      });

    },
  };
})(jQuery, Drupal);
