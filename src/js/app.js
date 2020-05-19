$(function() {
  //ハンバーガーメニューを展開します
  $(".jsMenuToggle").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".jsMenuPanel").toggleClass("active");
  });
  $(".jsMenuPanel").on("click", function(e) {
    e.stopPropagation();
  });
  //クリックされた次の要素を表示・非表示します
  $(".jsNextToggle").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).next().toggleClass("dp-none");
  });
});

var sampleFunc = function sampleFunc(points) {
  //console.log("Ready...");
}
var clickAccordion = function clickAccordion(el) {
  var el = $(el);
  $(el).on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("wm-active");
  });
}
var addClassInScrolling = function addClassInScrolling(el) {
  var el = $(el);
  var s = $(window).scrollTop();
  var t = s + 400;

  if ($(el).offset().top < t) {
    $(el).addClass("wm-framein");
  }

  return false;
}
var fixGlobalNavInScrolling = function fixGlobalNavInScrolling() {
  let s = $(window).scrollTop();

  if (s > 400) {
    $("#global").addClass("fixed");
  } else {
    $("#global").removeClass("fixed");
  }

  return false;
}

var fixEntryButtonInScrolling = function fixEntryButtonInScrolling() {
  let s = $(window).scrollTop();

  if (s > 800) {
    $("#entry-button").addClass("active");
  } else {
    $("#entry-button").removeClass("active");
  }
}
var changeColorMeuButtonInScrolling = function changeColorMeuButtonInScrolling() {
  let s = $(window).scrollTop();

  if (s > 100) {
    $(".jsMenu").addClass("active");
  } else {
    $(".jsMenu").removeClass("active");
  }
}

window.sampleFunc = sampleFunc;
window.clickAccordion = clickAccordion;
window.addClassInScrolling = addClassInScrolling;
window.fixGlobalNavInScrolling = fixGlobalNavInScrolling;
window.fixEntryButtonInScrolling = fixEntryButtonInScrolling;
window.changeColorMeuButtonInScrolling = changeColorMeuButtonInScrolling;
