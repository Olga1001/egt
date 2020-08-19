"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["d*"], ["\\d*"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

jQuery(document).ready(function ($) {
  $(".input-form").inputmask({
    regex: Number.raw(_templateObject()),
    showMaskOnHover: false
  });
});