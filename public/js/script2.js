console.log('LINKED');

document.addEventListener("DOMContentLoaded", function() {

  const appendPlayerList = (playerData) => {
    playerData.forEach((player) => {
      let ptag = document.createElement('p');
      ptag.innerText = player.name;
      document.body.appendChild(ptag);
    });
  };

  const getData = () => {
    fetch('http://localhost:8000/api/nba/')
      .then(r => r.json())
      .then(data => {
        appendPlayerList(data);
      });
    }

    const deleteData = (id) => {
      fetch('/api/nba/' + id, { method: 'DELETE' })
    }
  

  document.querySelector('.showPlayers').addEventListener('click', getData);

});
