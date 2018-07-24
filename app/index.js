require("./style.css");
const $ = require("jquery");
const background = require("./background.js");
const mindmap = require("./mindmap.js");

background.initializr();

mindmap.initializr();

$("#in").click(function() {
  if (mindmap.zoomIn()) {
    $("#out").disabled = false;
  } else {
    $("#in").disabled = true;
  }
});

$("#out").click(function() {
  if (mindmap.zoomOut()) {
    $("#in").disabled = false;
  } else {
    $("#out").disabled = true;
  }
});

$("jmnode").click(function() {
  // mindmap.clickNode();
  $("#modal").addClass("open-modal");
});

$(".modal-close").click(function() {
  $("#modal").removeClass("open-modal");
});

window.onload=function(){
  $('.loading').fadeOut(1500);  
}



