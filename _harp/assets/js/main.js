(function () {
  var fn = function () {
    initializeNavigationButton();
    initializeAccessibilityStyles();
  };

  var initializeNavigationButton = function () {
    var button = document.querySelector('[data-navigation-button]');
    var dynamicLayout = document.querySelector('.dynamic-layout');

    var toggleNavigation = function (e) {
      e.preventDefault();

      dynamicLayout.classList.toggle('dynamic-layout--open-navigation');
    };

    button.addEventListener('click', toggleNavigation);
  };

  var initializeAccessibilityStyles = function () {
    var body = document.body;
    document.body.classList.add('a11y--focus-styles-disabled');
    document.addEventListener('keydown', ensureA11yActiveStyles);
  };

  var ensureA11yActiveStyles = function (event) {
    if (event.keyCode !== 9) {
      return;
    }

    document.removeEventListener('keydown', ensureA11yActiveStyles);
    document.body.classList.remove('a11y--focus-styles-disabled');
    document.body.classList.add('a11y--focus-styles-enabled');
  };

  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }

}());
