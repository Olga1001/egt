$(document).ready(function () {

  $("input[name='name']").inputmask({
    regex: String.raw`\D*`,
    showMaskOnHover: false
  });

  $("input[name='phone']").inputmask("+79999999999", { 
    greedy: false,
    showMaskOnHover: false
  });

});