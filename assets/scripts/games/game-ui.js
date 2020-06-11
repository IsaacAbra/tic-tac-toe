const onCreateGameSuccess = (response) => { 
  $('#message').text('New game created. Start playing!') 
  $('.row').show() 
  $('#new-game').show() 
}

const onCreateGameFailure = (response) => {
  $('#message').text('Unable to create a new game.')
 }
