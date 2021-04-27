const cantons = ['ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz', 'ti', 'vd', 'zg', 'ai', 'be', 'bs', 'ge', 'gr', 'lu', 'nw', 'sg', 'so', 'tg', 'ur', 'vs', 'zh'];
getFlagPath = (canton) => `./img/${canton}.png`;
let currentlySelectedId;
let discoveredCantons = [];
let mistakes = 0;

document.addEventListener('DOMContentLoaded', () => {
  const playground = document.getElementById('playground');
  tenRandomCantonsTwinned(cantons).forEach(function(value, index) {
    const tile = document.createElement('div');
    const tileButton = document.createElement('button');
    tileButton.id = `btn${value}${index}`;
    tileButton.classList.add('cantonButton', 'hidden');
    const tileImage = document.createElement('img');
    tileImage.setAttribute('src', getFlagPath(value));
    tile.appendChild(tileButton).appendChild(tileImage);
    tile.classList.add('grid-item');
    playground.appendChild(tile);
  });

  document.querySelectorAll('.cantonButton').forEach((button) => { button.addEventListener('click', (oEvent) => {
    document.getElementById(oEvent.path[0].id).classList.remove('hidden');
    if (currentlySelectedId === undefined){
      currentlySelectedId = oEvent.path[0].id;
    }else if (currentlySelectedId.substring(0,5) === oEvent.path[0].id.substring(0,5)){
      discoveredCantons.push(currentlySelectedId.substring(3,5));
      document.getElementById(currentlySelectedId).style.display = "none";
      document.getElementById(oEvent.path[0].id).style.display = "none";
      currentlySelectedId = undefined;
      document.getElementById('discovered').innerHTML = discoveredCantons;
    }else {
      document.getElementById(currentlySelectedId).classList.add("hidden");
      document.getElementById(oEvent.path[0].id).classList.add("hidden");
      currentlySelectedId = undefined;
      mistakes++;
      document.getElementById('mistakes').innerHTML = mistakes;
    }
  }); });
});

tenRandomCantonsTwinned = (cantons) => {
  let tenCantons = [...cantons].sort(() => 0.5 - Math.random()).slice(0,10);
  return [...tenCantons, ...tenCantons].sort(() => 0.5 - Math.random());
}