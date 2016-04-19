

if ($(window).width() > 1009) {
$(document).ready(function () {

  $('#fullpage').fullpage({
    anchors:['main', 'bio', "proj", 'contact'],
    navigation: true,
    navigationPosition: 'right',
  });

});
}

if ($(window).width() < 1010) {
$(document).ready(function () {

  $('#fullpage').fullpage({
    anchors:['main', 'bio', "proj", 'contact'],
    navigation: true,
    navigationPosition: 'right',
    scrollBar:true
  });

});
}
