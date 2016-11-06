console.log('script.js linked');  
const ajaxNBA = (method, url) => {
  return $.ajax({
    method: method,
    url: url
  });
};

const getAllPlayers = () => {
  ajaxNBA('GET', '/api/nba').done((data) => {
    appendAllPlayers(data);
  });
};

const getOnePlayer = (id) => {
  ajaxNBA('GET', '/api/nba/' + id).done((data) => {
    appendOnePlayer(data);
  });
};

const editOnePlayer = (id) => {
  ajaxNBA('GET', '/api/nba/' + id).done((data) => {
    appendEditPlayer(data);
  });
}

const appendAllPlayers = (playerData) => {
  const playerList = $('.player-list');
  playerData.forEach((player) => {
    let playerDiv = $('<div>');
    playerDiv.append($('<a>').attr('href', '/nba/' + player.id).html($('<h2>').text(player.name)));
    playerList.append(playerDiv);
  });
};

const appendOnePlayer = (player) => {
  const playerBio = $('.player-bio');
  playerBio.append($('<h1>').text(player.name));
  playerBio.append($('<h4>').text('Team: ' + player.team));
  playerBio.append($('<h4>').text('Age: ' + player.age));
  playerBio.append($('<h4>').text('Games: ' + player.games));
  playerBio.append($('<h4>').text('Points: ' + player.points));
  playerBio.append($('<a>').attr('href', '/nba/' + player.id + '/edit').text('Edit'));
};

const appendEditPlayer = (player) => {
  const playerBio = $('.player-bio');
  const editForm = $('<form>').attr({
    action: '/api/nba/' + player.id +'?_method=PUT',
    method: 'POST'
  });
  editForm.append($('<input>').attr('name', 'player[name]').val(player.name));
  editForm.append($('<input>').attr('name', 'player[team]').val(player.team));
  editForm.append($('<input>').attr('name', 'player[age]').val(player.age));
  editForm.append($('<input>').attr('name', 'player[games]').val(player.games));
  editForm.append($('<input>').attr('name', 'player[points]').val(player.points));
  editForm.append($('<input>').attr('type', 'submit'));
  playerBio.append(editForm);
}