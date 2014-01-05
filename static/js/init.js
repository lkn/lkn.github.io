
// hides main menu popover if class "expanded"
$('#mainNav').on('click', function(e) {
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

// clicking anywhere inside navigation or heading won’t close main menu popover
$('#navigation section, #navigation .heading, #navigation .subheading, #navigation .menu_label').on('click touchstart', function(e){
    e.stopPropagation();
})
