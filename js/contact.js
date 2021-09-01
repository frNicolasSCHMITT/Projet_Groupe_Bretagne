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
    },
    messages: {
      name: {
        minlength: "Le nom doit comporter 3 charactères minimum",
      },
      email: {
        email: "L'email doit respecter le format: abc@domain.tld",
      },
    },
  });
});
