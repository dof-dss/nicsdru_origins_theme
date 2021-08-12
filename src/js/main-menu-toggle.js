/*
 * @file
 * Menu menu toggle (hamburger) behaviours.
 *
 * The hamburger menu uses an invisible checkbox placed over the top of the hamburger
 * button.  The toggling of the checkbox and a bit of CSS serves to show and hide
 * the main menu without the need for any JS.  However some behaviour needs added via
 * JS to improve accessibility.
 *
 * @see related html markup in templates/block/block--mainnavigation.html.twig
 * @see related css in src/scss/3_components/navigation/main-menu.scss
 */

/* eslint-disable */
(function($, Drupal) {
  Drupal.behaviors.nicsdruOriginsMainMenuToggle = {
    attach: function attach (context) {
      $('#menu-toggle', context).once('mainMenuToggle').each(function () {

        // Checkboxes are normally toggled with the space bar. Enable toggling
        // by pressing enter since it looks like a button (and the enter key is
        // normally used to activate buttons).
        $(this).keyup(function (event) {
          var key = event.key || event.keyCode;
          if (key === 'Enter' || key === 13) {
            this.checked = !this.checked;
          }
        });

        // Indicate the toggle has expanded the menu.
        $(this).bind('click keyup', function () {
           $(this).attr('aria-expanded', this.checked);
        });
      });

    },
  };
})(jQuery, Drupal);
