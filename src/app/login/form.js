$(document).ready(function() {
    $('.toggle-signup').click(function() {
      console.log(1);
      $('.signup-form').removeClass('visually-hidden');
      $('.login-form').addClass('visually-hidden');
    });
    $('.toggle-login').click(function() {
      $('.login-form').removeClass('visually-hidden');
      $('.signup-form').addClass('visually-hidden');
    });
  });
  