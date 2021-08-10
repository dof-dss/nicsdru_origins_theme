/*
 * @file
 * Menu menu toggle (hamburger) behaviours.
 * @see related html markup in templates/block/block--mainnavigation.html.twig
 * @see related css in src/scss/3_components/navigation/main-menu.scss
 */
/* eslint-disable */
(function($, Drupal) {
  Drupal.behaviors.nicsdruOriginsMainMenuToggle = {
    attach: function attach (context) {
      /*
      Make the hamburger checkbox toggle respond to the enter key.
      The hamburger menu uses a checkbox and a bit of CSS to handle the display of the two states.
      It works without any JS - users just need to check/uncheck the checkbox by touch, click, or
      by pressing the space bar. But since it is styled to look like a button, sighted keyboard
      users may try using the enter key to activate the button. So we must enable the toggling of
      the checkbox by pressing enter.
      */
      $('#menu-toggle', context).once('mainMenuToggle').each(function () {
        $(this).keyup(function (event) {
          var enterKeyCode = 13;
          var spaceKeyCode = 32;

          if (event.keyCode === enterKeyCode || event.keyCode === spaceKeyCode) {
            this.checked = !this.checked;
          }
        });
      });
    },
  };
})(jQuery, Drupal);
