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