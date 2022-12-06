let modal =  document.querySelector('#modalWindow')
let openButton = document.getElementById("openMod");

document.addEventListener("DOMContentLoaded", () => {
  var focusable = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  var firstFocusable = focusable[0];
  var lastFocusable = focusable[focusable.length - 1];
  var KEYCODE_TAB = 9;

modal.addEventListener('keydown', function(e) {
    var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
    if (!isTabPressed) { 
      return; 
    }

    if ( e.shiftKey ) /* shift + tab */ {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
          e.preventDefault();
        }
      } else /* tab */ {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
          e.preventDefault();
        }
      }
  });

  openButton.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = "flex";
  });

  firstFocusable.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = "none";
    openButton.focus();
  });
});

