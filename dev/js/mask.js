$(document).ready(function () {

  $("input[name='email']").inputmask({
    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    greedy: false,
    showMaskOnHover: false,
    onBeforePaste: function (pastedValue, opts) {
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
    regex: String.raw`\D*`,
    showMaskOnHover: false
  });

  $("input[name='phone']").inputmask("+79999999999", { 
    greedy: false,
    showMaskOnHover: false
  });

});