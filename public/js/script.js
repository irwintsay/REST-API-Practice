$(() => {
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

  const appendAllPlayers = (playerData) => {
    const playerList = $('.player-list');
    playerData.forEach((player) => {
      let playerDiv = $('<div>');
      playerDiv.append($('<h2>').text(player.name));
      playerList.append(playerDiv);
    });
  };

  getAllPlayers();

});
