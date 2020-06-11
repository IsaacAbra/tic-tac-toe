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

const onUpdateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
  })
}
