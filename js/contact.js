$(document).ready(function () {
  $("#basic-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      message: {
        required: true,
        minlength: 3,
      },
    },
    messages: {
      name: {
        minlength: "Le nom doit comporter 3 charactères minimum",
      },
      email: {
        email: "L'email doit respecter le format: abc@domain.tld",
      },
      message: {
        minlength: "Le message doit comporter 3 charactères minimum",
      },
    },
  });
});
$.extend($.validator.messages, { required: "Ce champ est obligatoire" });
