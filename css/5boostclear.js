function getParameterByName(paramName) {

  paramName = paramName.replace(/[\[]/, '[').replace(/[\]]/, ']');

  const regex = new RegExp("[?&]" + paramName + "=([^&#]*)");
  const results = regex.exec(location.search);
  
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, " "));
}

const id = getParameterByName('id');

if (id === '#') {
  alert("Página Anterior");
}

const substitutionLinks = [
  "https://coldbrook.ucdtv.workers.dev/", 
  "https://skybluetv.skystream.workers.dev/", 
  "https://stilldarkness.gonero1637.workers.dev/", 
  "https://skytvzimer.skystream.workers.dev/", 
  "https://uztptv.ucdtv.workers.dev/", 
  "https://gonero1637.gonero1637.workers.dev/"
];

let usedLinks = [];

function getRandomLink() {
  let availableLinks = substitutionLinks.filter(link => !usedLinks.includes(link));

  if (availableLinks.length === 0) {
    usedLinks = [];
    availableLinks = [...substitutionLinks];
  }

  const randomLink = availableLinks[Math.floor(Math.random() * availableLinks.length)];

  usedLinks.push(randomLink);

  return randomLink;
}

const randomLink = getRandomLink();

const channels = {
  'adultswim': { 'url': randomLink + "adultswim/tracks-v1a1/mono.m3u8" },
  'sbt': { 'url': randomLink + "sbt/tracks-v1a1/mono.m3u8" },
  'disneychannel': { 'url': randomLink + "disneychannel/tracks-v1a1/mono.m3u8" },
  'cartoonnetwork': { 'url': randomLink + "cartoonnetwork/tracks-v1a1/mono.m3u8" },
  'tnt': { 'url': randomLink + "tnt/tracks-v1a1/mono.m3u8" },
  'amc': { 'url': randomLink + "amc/tracks-v1a1/mono.m3u8" },
  'axn': { 'url': randomLink + "axn/tracks-v1a1/mono.m3u8" },
  'cinemax': { 'url': randomLink + "cinemax/tracks-v1a1/mono.m3u8" },
  'hbo': { 'url': randomLink + "hbo/tracks-v1a1/mono.m3u8" },
  'hbofamily': { 'url': randomLink + "hbofamily/tracks-v1a1/mono.m3u8" },
  'hboxtreme': { 'url': randomLink + "hboxtreme/tracks-v1a1/mono.m3u8" },
  'espn1': { 'url': randomLink + "espn/tracks-v1a1/mono.m3u8" },
  'espn2': { 'url': randomLink + "espn2/tracks-v1a1/mono.m3u8" },
  'espn3': { 'url': randomLink + "espn3/tracks-v1a1/mono.m3u8" },
  'espn4': { 'url': randomLink + "espn4/tracks-v1a1/mono.m3u8" },
  'espn5': { 'url': randomLink + "espn5/tracks-v1a1/mono.m3u8" },
  'espn6': { 'url': randomLink + "espn6/tracks-v1a1/mono.m3u8" },
  'sportv1': { 'url': randomLink + "sportv/tracks-v1a1/mono.m3u8" },
  'sportv2': { 'url': randomLink + "sportv2/tracks-v1a1/mono.m3u8" },
  'sportv3': { 'url': randomLink + "sportv3/tracks-v1a1/mono.m3u8" },
  'combate': { 'url': randomLink + "combate/tracks-v1a1/mono.m3u8" },
  'starchannel': { 'url': randomLink + "starchannel/tracks-v1a1/mono.m3u8" },
  'animalplanet': { 'url': randomLink + "animalplanet/tracks-v1a1/mono.m3u8" },
  'discoveryid': { 'url': randomLink + "discoveryid/tracks-v1a1/mono.m3u8" },
  'discoveryturbo': { 'url': randomLink + "discoveryturbo/tracks-v1a1/mono.m3u8" },
  'space': { 'url': randomLink + "space/tracks-v1a1/mono.m3u8" },
  'premiereclubes': { 'url': randomLink + "premiereclubes/tracks-v1a1/mono.m3u8" },
  'premiere2': { 'url': randomLink + "premiere2/tracks-v1a1/mono.m3u8" },
  'premiere3': { 'url': randomLink + "premiere3/tracks-v1a1/mono.m3u8" },
  'premiere4': { 'url': randomLink + "premiere4/tracks-v1a1/mono.m3u8" },
  'premiere5': { 'url': randomLink + "premiere5/tracks-v1a1/mono.m3u8" },
  'premiere6': { 'url': randomLink + "premiere6/tracks-v1a1/mono.m3u8" },
  'premiere7': { 'url': randomLink + "premiere7/tracks-v1a1/mono.m3u8" },
  'premiere8': { 'url': randomLink + "premiere8/tracks-v1a1/mono.m3u8" }
};

const channel = channels[id];
if (channel) {
  const url = channel.url;
  const playerInstance = jwplayer("player");

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
