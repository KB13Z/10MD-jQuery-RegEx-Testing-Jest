import $ from 'jquery';
import { validateName } from './utils/validateName/validateName';
import { validateEmail } from './utils/validateEmail/validateEmail';
import { validatePassword } from './utils/validatePassword/validatePassword';

$('.js-form-wrapper').html(`
    <form class='js-form'>
        <label for='js-name' class='js-label'>Name:</label><br>
        <input 
            class='js-name'
            id='js-name'
            type='text'
            placeholder='Type name'
            required
        >
        <div class='js-name-validation-message'></div>
        <br>
        <label for='js-email'>E-mail:</label><br>
        <input 
            class='js-email'
            id='js-email'
            type='email'
            placeholder='Type e-mail'
            required
        >
        <div class='js-email-validation-message'></div>
        <br>
        <label for='js-password'>Password:</label><br>
        <input 
            class='js-password'
            id='js-password'
            type='password'
            placeholder='Type password'
            required
        >
        <div class='js-password-validation-message'></div>
        <br>
        <input
            class='js-submit'
            type='submit'
        >
    </form>
    <br><br>
    <div class='js-success-message'></div>
`);

$('.js-form-wrapper')
  .css('width', '243px')
  .css('border', '2px solid black')
  .css('padding', '2rem')
  .css('border-radius', '10px');

$('.js-form').css('width', '100%');

$('label').css('font-size', '18px');

$('input')
  .css('margin-bottom', '0.2rem')
  .css('margin-top', '0.5rem')
  .css('border-radius', '5px')
  .css('font-size', '16px');

$('.js-submit').css('cursor', 'pointer').css('float', 'right');

$('.js-name-validation-message').css('font-size', '14px').css('color', 'red').css('font-weight', 'bold');

$('.js-email-validation-message').css('font-size', '14px').css('color', 'red').css('font-weight', 'bold');

$('.js-password-validation-message').css('font-size', '14px').css('color', 'red').css('font-weight', 'bold');

$('.js-success-message').css('font-size', '20px').css('color', 'green').css('font-weight', 'bold');

$('.js-form').on('submit', (e) => {
  e.preventDefault();

  const name = $('.js-name').val().toString();
  const nameIsValid = validateName(name);
  const nameValidationMessage = $('.js-name-validation-message');

  if (nameIsValid) {
    nameValidationMessage.text('');
  } else {
    nameValidationMessage.text('*Invalid name. Name should consist of 2-50 characters; only letters allowed');
  }

  const email = $('.js-email').val().toString();
  const emailIsValid = validateEmail(email);
  const emailValidationMessage = $('.js-email-validation-message');

  if (emailIsValid) {
    emailValidationMessage.text('');
  } else {
    emailValidationMessage.text('*Invalid e-mail address. E-mail should be in following format:"example@example.com"');
  }

  const password = $('.js-password').val().toString();
  const passwordIsValid = validatePassword(password);
  const passwordValidationMessage = $('.js-password-validation-message');

  if (passwordIsValid) {
    passwordValidationMessage.text('');
  } else {
    passwordValidationMessage.text('*Invalid password. Password should contain 8-25 characters; must include at least 1 letter, 1 number and 1 special character (!, @, #, $, %, ^, &, *)');
  }

  const successMessage = $('.js-success-message');

  if (nameIsValid && emailIsValid && passwordIsValid) {
    successMessage.text('SUCCESS!');
    $('.js-name').val('');
    $('.js-email').val('');
    $('.js-password').val('');
  } else {
    successMessage.text('');
  }
});
