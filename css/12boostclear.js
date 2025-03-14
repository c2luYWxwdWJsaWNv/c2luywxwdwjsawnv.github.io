function getParameterByName(paramName) {

  paramName = paramName.replace(/[\[]/, '[').replace(/[\]]/, ']');
  
  var regex = new RegExp("[?&]" + paramName + "=([^&#]*)");
  var result = regex.exec(location.search);

  return result === null ? '' : decodeURIComponent(result[1].replace(/\+/g, " "));
}

var id = getParameterByName('id');

if (id == '#') {
  alert("Página Anterior");
}

const substitutionLinks = [
  "https://cdn4r3t5ygf.fastplayertvlos.workers.dev/",
  "https://globosky.fastvpn-350.workers.dev/",
  "https://suldestetv.nipah21950.workers.dev/",
  "https://empty-dtvott-7b5f.a3ir7vydoy.workers.dev/",
  "https://glittermprs.balofa5423.workers.dev/",
  "https://nipah21950.nipah21950.workers.dev/",
  "https://dtvott-classe-globo.jeowoa.workers.dev/",
  "https://darkhat353.fastplayertvlos.workers.dev/"
];

var usedLinks = [];  

function getRandomLink() {
  var availableLinks = substitutionLinks.filter(link => !usedLinks.includes(link));

  if (availableLinks.length === 0) {
    usedLinks = [];
    availableLinks = [...substitutionLinks];
  }

  var randomLink = availableLinks[Math.floor(Math.random() * availableLinks.length)];
  usedLinks.push(randomLink);
  
  return randomLink;
}

var randomLink = getRandomLink();

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

var channel = channels[id];
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
