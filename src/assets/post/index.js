import jquery from "jquery"
const $ = jquery
$("#contact").submit(function(e) {
  e.preventDefault()
  var $form = $(this)
  $.post($form.attr("action"), $form.serialize()).then(function() {
    alert("Thank you!")
  })
})
