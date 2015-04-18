console.log("app.js loaded");

$(document).ready(function(){
  $('.parallax').parallax();
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-click').leanModal();
  //music
  audiojs.events.ready(function() {
    var as = audiojs.createAll();
  });
});

