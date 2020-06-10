const config = require('./../config')
const = require()

const createGame = function (response) { 
  return $.ajax({
     url: config.apiUrl + '/games', 
    method: 'POST',
    headers: { 
      Authorization: 'Token token=' + store.user.token 
    }, 
    data: {

    } 
  })
}
