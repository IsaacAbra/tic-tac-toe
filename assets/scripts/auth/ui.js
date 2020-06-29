const store = require('../store')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const signUpFailure = function () {
  $('#message').text('Signing up did not work')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const signInSuccess = function (data) {
  $('#sign-in').trigger('reset')
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const signInFailure = function () {
  $('#message').text('Haha, you cannot even get in')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const signOutSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('why did you leave?')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const signOutFailure = function () {
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const changePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Changed password successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const changePasswordFailure = function () {
  $('#message').text('Password stayed the same. You did something wrong')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const createGameSuccess = function () {
  $('#message').text('Hey, go on and play!')
  $('#message').addClass('success')
}

const createGameFailure = function () {
  $('message').text('LOL! U had trouble opening up the game!')
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
  changePasswordFailure,
  createGameSuccess,
  createGameFailure
}
