'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: {
      credentials: {
        email: formData.credentials.email,
        password: formData.credentials.password,
        password_confirmation: formData.credentials.password_confirmation
      }
    }
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: {
      email: formData.credential.email,
      password: formData.credentials.password
    }
  })
}

const createGame = function (response) { 
  return $.ajax({
     url: config.apiUrl + '/games', 
    method: 'POST',
    headers: { 
      Authorization: 'Token token=' + store.user.token 
    }, 
    data: {} 
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      passwords: {
        old: formData.passwords.old,
        new: formData.passwords.new,
      }
    }
  })
}

const onUpdateGame = function (data) {
  return $.ajax({
    url: config.apiUrl
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
