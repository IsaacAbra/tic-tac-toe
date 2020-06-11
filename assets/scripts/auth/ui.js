const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const signUpFailure = function () {
  $('#message').text('Signing up did not work')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const signInFailure = function () {
  $('#message').text('Haha, you cannot even get in')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const signOutSuccess = function (response) {
  $('#message').text('why did you leave?')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const signOutFailure = function () {
  $('#message').text('haha, ur still in here')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const changePasswordSuccess = function (response) {
  $('#message').text('Changed password successfully')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const changePasswordFailure = function () {
  $('#message').text('Password stayed the same. You did something wrong')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
