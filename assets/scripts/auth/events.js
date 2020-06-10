'use strict'

  const getFormFields = require('../../../lib/get-form-fields')  
const api = require('./api')
 const ui = require('./ui') 
const store = require('./../store.js') 
const config = require('./../config') 
const store = require('./../store.js')
const authEvents = require('./auth/events') 
const gamesEvents = require('./games/events-games') 
const gameBoard = require('./games/game-board')

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  store.clicks.cell
}

 $('#play-game').on('submit', gamesEvents.onCreateGame)
 const onCreateGame = function (event) { 
  event.preventDefault() 
  api.createGame() 
  .then(ui.onCreateGameSuccess) 
  .catch(ui.onCreateGameFailure) } 

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#Create-Game').on('submit', onGame)
}
