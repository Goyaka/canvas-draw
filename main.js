// Generated by CoffeeScript 1.3.1
var addEvents, drawAfter, drawBefore, drawRectangle, fillFromCookies, keys, saveToCookies;

drawAfter = function() {
  var canvas, ctx;
  canvas = $('#board')[0];
  if (canvas.getContext) {
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 2000, 2000);
    drawRectangle($('#after_box1_t').val(), $('#after_box1_l').val(), $('#after_box1_b').val(), $('#after_box1_r').val(), ctx, 'red');
    return drawRectangle($('#after_box2_t').val(), $('#after_box2_l').val(), $('#after_box2_b').val(), $('#after_box2_r').val(), ctx, 'green');
  }
};

drawBefore = function() {
  var canvas, ctx;
  canvas = $('#board')[0];
  if (canvas.getContext) {
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 2000, 2000);
    drawRectangle($('#before_box1_t').val(), $('#before_box1_l').val(), $('#before_box1_b').val(), $('#before_box1_r').val(), ctx, 'red');
    return drawRectangle($('#before_box2_t').val(), $('#before_box2_l').val(), $('#before_box2_b').val(), $('#before_box2_r').val(), ctx, 'green');
  }
};

drawRectangle = function(top, left, bottom, right, ctx, color) {
  ctx.strokeStyle = color;
  return ctx.strokeRect(left, top, right - left, bottom - top);
};

keys = ['before_box1_t', 'before_box1_l', 'before_box1_b', 'before_box1_r', 'before_box2_t', 'before_box2_l', 'before_box2_b', 'before_box2_r', 'after_box1_t', 'after_box1_l', 'after_box1_b', 'after_box1_r', 'after_box2_t', 'after_box2_l', 'after_box2_b', 'after_box2_r'];

saveToCookies = function() {
  var key, _i, _len, _results;
  _results = [];
  for (_i = 0, _len = keys.length; _i < _len; _i++) {
    key = keys[_i];
    _results.push($.cookie(key, $('#' + key).val()));
  }
  return _results;
};

fillFromCookies = function() {
  var key, _i, _len, _results;
  _results = [];
  for (_i = 0, _len = keys.length; _i < _len; _i++) {
    key = keys[_i];
    if ($.cookie(key)) {
      _results.push($('#' + key).val($.cookie(key)));
    } else {
      _results.push(void 0);
    }
  }
  return _results;
};

addEvents = function() {
  return $('#swap').click(function() {
    if ($('#current-state').data('active') === 'before') {
      $('#current-state').data('active', 'after');
      $('#current-state').html('After');
      drawAfter();
    } else {
      $('#current-state').data('active', 'before');
      $('#current-state').html('Before');
      drawBefore();
    }
    saveToCookies();
    return false;
  });
};

$(document).ready(function() {
  fillFromCookies();
  return addEvents();
});