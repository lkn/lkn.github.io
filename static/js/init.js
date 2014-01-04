
// hides main menu popover if class "expanded"
$('#mainNav').on('click touchstart', function(e) {
  showHideNav();
  e.preventDefault();
})

// clicking anywhere inside navigation or heading won’t close main menu popover
$('#navigation section, #navigation .heading, #navigation .subheading, #navigation .menu_label').on('click touchstart', function(e){
    e.stopPropagation();
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
  $('#mainNav').removeClass('invisible').addClass('expanded');
  window.setTimeout(function(){$('#container').addClass('blurred');}, 40);
  $('#fullWidthContainer').removeClass('notScrolling');

  // better handling of scrollbars in Windows
  if (windows) {
    $('body').width($('body').width());
    $('body').css('overflow', 'hidden');
  } else {
    window.setTimeout(function(){$('body').addClass('noScroll');}, 200); // Firefox hack. Hides scrollbar as soon as menu animation is done
  }
}

// hides the main menu popover
function hideNav() {
  $('#container').removeClass('blurred');
  $('#mainNav').addClass('transition');
  window.setTimeout(function(){$('body').removeClass('noScroll').removeAttr('style');}, 50); // allow animations to start before removing class (Firefox)
  window.setTimeout(function(){$('#mainNav').removeClass('transition').removeClass('expanded');}, 200);
  $('.menuIcon').blur(); // removes tab focus
  $('#fullWidthContainer').addClass('notScrolling');
}
