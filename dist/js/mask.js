"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["D*"], ["\\D*"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

$(document).ready(function () {
  $("input[name='email']").inputmask({
    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    greedy: false,
    showMaskOnHover: false,
    onBeforePaste: function onBeforePaste(pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace("mailto:", "");
    },
    definitions: {
      '*': {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        casing: "lower"
      }
    }
  });
  $("input[name='name']").inputmask({
    regex: String.raw(_templateObject()),
    showMaskOnHover: false
  });
  $("input[name='phone']").inputmask("+79999999999", {
    greedy: false,
    showMaskOnHover: false
  });
});