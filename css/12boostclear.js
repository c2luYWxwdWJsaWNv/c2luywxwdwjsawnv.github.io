// Função para obter o parâmetro de uma URL
function getParameterByName(paramName) {
  paramName = paramName.replace(/[\[]/, '[').replace(/[\]]/, ']');
  var regex = new RegExp("[?&]" + paramName + "=([^&#]*)");
  var result = regex.exec(location.search);
  return result === null ? '' : decodeURIComponent(result[1].replace(/\+/g, " "));
}

// Obtém o parâmetro 'id' da URL
var id = getParameterByName('id');

// Se 'id' for '#', exibe um alerta
if (id === '#') {
  alert("Página Anterior");
}

// Lista de links alternativos
const substitutionLinks = [
  "https://cdn4r3t5ygf.fastplayertvlos.workers.dev/",
  "https://globosky.fastvpn-350.workers.dev/",
  "https://empty-dtvott-7b5f.a3ir7vydoy.workers.dev/",
  "https://glittermprs.balofa5423.workers.dev/",
  "https://dtvott-classe-globo.jeowoa.workers.dev/",
  "https://darkhat353.fastplayertvlos.workers.dev/"
];

// Lista de links usados
var usedLinks = [];

// Função para obter um link aleatório
function getRandomLink() {
  var availableLinks = substitutionLinks.filter(link => !usedLinks.includes(link));

  // Se todos os links forem usados, reseta a lista de links usados
  if (availableLinks.length === 0) {
    usedLinks = [];
    availableLinks = [...substitutionLinks];
  }

  // Seleciona um link aleatório
  var selectedLink = availableLinks[Math.floor(Math.random() * availableLinks.length)];
  usedLinks.push(selectedLink);
  return selectedLink;
}

// Obtém um link aleatório
var randomLink = getRandomLink();

// Definição dos canais e seus links de stream
var channels = {
  'sbt': { 'url': randomLink + "SBT/index.m3u8" },
  'globo': { 'url': randomLink + "GLOBO/index.m3u8" },
  'megapix': { 'url': randomLink + "MEGAPIX/index.m3u8" },
  'tnt': { 'url': randomLink + "TNT/index.m3u8" },
  'space': { 'url': randomLink + "SPACE/index.m3u8" },
  'espn1': { 'url': randomLink + "ESPN1/index.m3u8" },
  'espn2': { 'url': randomLink + "ESPN2/index.m3u8" },
  'cartoonnetwork': { 'url': randomLink + "CARTOONNETWORK/index.m3u8" },
  'record': { 'url': randomLink + "RECORD/index.m3u8" },
  'viva': { 'url': randomLink + "VIVA/index.m3u8" },
  'band': { 'url': randomLink + "BAND/index.m3u8" },
  'bbb1': { 'url': randomLink + "BBB1/index.m3u8" },
  'bbb2': { 'url': randomLink + "BBB2/index.m3u8" },
  'bbb3': { 'url': randomLink + "BBB3/index.m3u8" },
  'sportv1': { 'url': randomLink + "SPORTV1/index.m3u8" },
  'sportv2': { 'url': randomLink + "SPORTV2/index.m3u8" },
  'sportv3': { 'url': randomLink + "SPORTV3/index.m3u8" },
  'telecinepipoca': { 'url': randomLink + "TELECINEPIPOCA/index.m3u8" },
  'telecinepremium': { 'url': randomLink + "TELECINEPREMIUM/index.m3u8" }
};

// Verifica se o canal existe
var channel = channels[id];

// Se o canal for encontrado, inicializa o player
if (channel) {
  var url = channel.url;
  var playerInstance = jwplayer("player");
  playerInstance.setup({
    'playlist': [{
      'sources': [{
        'default': false,
        'type': "hls",
        'file': url,
        'label': '0'
      }]
    }],
    'width': "100%",
    'height': "100%",
    'aspectratio': "16:9",
    'autostart': true,
    'cast': {},
    'sharing': false
  });
} else {
  alert("Canal não encontrado!");
}
