'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password')
  $('.row').hide()
  $('#new-game').hide()
  $('#play-game').on('submit',gamesEvents.onCreateGame)
  $('.box').on('click', function () { $(this).slideUp()
})

module.exports = {
  authEvents
}
