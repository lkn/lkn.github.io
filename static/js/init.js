
// hides main menu popover if class "expanded"
$('#mainNav').on('click touchstart', function(e) {
  showHideNav();
  e.preventDefault();
})

// checks if navigation is enabled
function showHideNav() {
  if ($('#mainNav').hasClass('expanded')) {
    hideNav();
  } else {
    showNav();
  }
}

// shows the main menu popover
function showNav() {
  console.log("showNav");
  $('#mainNav').removeClass('invisible').addClass('expanded');
}

// hides the main menu popover
function hideNav() {
  console.log("hideNav");
  $('#mainNav').addClass('transition');
  window.setTimeout(
    function(){$('#mainNav').removeClass('transition').removeClass('expanded');},
    100);
}
