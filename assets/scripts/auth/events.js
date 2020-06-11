'use strict'

  const getFormFields = require('../../../lib/get-form-fields')  
const api = require('./api')
 const ui = require('./ui') 

// const onCreateGame = function (event) {
//   event.preventDefault()
//   api.createGame()
//     .then(ui.onCreateGameSuccess)
//     .catch(ui.onCreateGameFailure)
// }

// const onUpdateGame = function (event) {
//   event.preventDefault()
//   store.clicks.cell
// }

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target

const data = getFormFields(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signIn(data)
   .then(ui.onSignInSuccess)
   .catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signOut()
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)

//   (copied this off on a whim without following it up)
//   const data = getFormFields(this)
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
//   }

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
