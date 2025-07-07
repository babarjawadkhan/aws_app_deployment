$(function () {
    $('#contact-form').submit(function (event) {
      event.preventDefault();
  
      const formData = {
        name: $('#name').val(),
        email: $('#email').val(),
        topic: $('#topic').val(),
        phone: $('#phone').val(),
        message: $('#message').val()
      };
  
      $.ajax({
        type: 'POST',
        url: '/contact',
        data: JSON.stringify(formData),
        contentType: 'application/json',
        success: function (response) {
          $('#form-messages').removeClass('error').addClass('success').text(response);
          $('#contact-form')[0].reset();
        },
        error: function () {
          $('#form-messages').removeClass('success').addClass('error').text('Oops! Something went wrong.');
        }
      });
    });
  });
  