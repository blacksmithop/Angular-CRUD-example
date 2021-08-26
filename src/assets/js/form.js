$(document).ready(function() {
    $('.toggle-signup').click(function() {
      $('.signup-form').removeClass('visually-hidden');
      $('.login-form').addClass('visually-hidden');
    });
    $('.toggle-login').click(function() {
      $('.login-form').removeClass('visually-hidden');
      $('.signup-form').addClass('visually-hidden');
    });
  });
      