function getParameterByName(paramName) {
  paramName = paramName.replace(/[\[]/, '[').replace(/[\]]/, ']');
  const regex = new RegExp("[?&]" + paramName + "=([^&#]*)");
  const matches = regex.exec(location.search);
  return matches === null ? '' : decodeURIComponent(matches[1].replace(/\+/g, " "));
}

const id = getParameterByName('s');

if (id === '#') {
  alert("Página Anterior");
}

const baseLink = "https://consoledbtv.vercel.app/";

const channels = {
  'adultswim': { 'url': baseLink + "adultswim/tracks-v1a1/mono.m3u8" },
  'globosp': { 'url': baseLink + "globosp-globosaopaulo/tracks-v1a1/mono.m3u8" },
  'sbt': { 'url': baseLink + "sbt/tracks-v1a1/mono.m3u8" },
  'disneychannel': { 'url': baseLink + "disneychannel/tracks-v1a1/mono.m3u8" },
  'cartoonnetwork': { 'url': baseLink + "cartoonnetwork/tracks-v1a1/mono.m3u8" },
  'tnt': { 'url': baseLink + "tnt/tracks-v1a1/mono.m3u8" },
  'amc': { 'url': baseLink + "amc/tracks-v1a1/mono.m3u8" },
  'axn': { 'url': baseLink + "axn/tracks-v1a1/mono.m3u8" },
  'cinemax': { 'url': baseLink + "cinemax/tracks-v1a1/mono.m3u8" },
  'telecineaction': { 'url': baseLink + "telecineaction/tracks-v1a1/mono.m3u8" },
  'telecinefun': { 'url': baseLink + "telecinefun/tracks-v1a1/mono.m3u8" },
  'telecinepipoca': { 'url': baseLink + "telecinepipoca/tracks-v1a1/mono.m3u8" },
  'telecinepremium': { 'url': baseLink + "telecinepremium/tracks-v1a1/mono.m3u8" },
  'hbo': { 'url': baseLink + "hbo/tracks-v1a1/mono.m3u8" },
  'hbofamily': { 'url': baseLink + "hbofamily/tracks-v1a1/mono.m3u8" },
  'hboxtreme': { 'url': baseLink + "hboxtreme/tracks-v1a1/mono.m3u8" },
  'espn1': { 'url': baseLink + "espn/tracks-v1a1/mono.m3u8" },
  'espn2': { 'url': baseLink + "espn2/tracks-v1a1/mono.m3u8" },
  'espn3': { 'url': baseLink + "espn3/tracks-v1a1/mono.m3u8" },
  'espn4': { 'url': baseLink + "espn4/tracks-v1a1/mono.m3u8" },
  'espn5': { 'url': baseLink + "espn5/tracks-v1a1/mono.m3u8" },
  'espn6': { 'url': baseLink + "espn6/tracks-v1a1/mono.m3u8" },
  'sportv1': { 'url': baseLink + "sportv/tracks-v1a1/mono.m3u8" },
  'sportv2': { 'url': baseLink + "sportv2/tracks-v1a1/mono.m3u8" },
  'sportv3': { 'url': baseLink + "sportv3/tracks-v1a1/mono.m3u8" },
  'combate': { 'url': baseLink + "combate/tracks-v1a1/mono.m3u8" },
  'starchannel': { 'url': baseLink + "starchannel/tracks-v1a1/mono.m3u8" },
  'animalplanet': { 'url': baseLink + "animalplanet/tracks-v1a1/mono.m3u8" },
  'discoveryid': { 'url': baseLink + "discoveryid/tracks-v1a1/mono.m3u8" },
  'discoveryturbo': { 'url': baseLink + "discoveryturbo/tracks-v1a1/mono.m3u8" },
  'space': { 'url': baseLink + "space/tracks-v1a1/mono.m3u8" },
  'premiereclubes': { 'url': baseLink + "premiereclubes/tracks-v1a1/mono.m3u8" },
  'premiere2': { 'url': baseLink + "premiere2/tracks-v1a1/mono.m3u8" },
  'premiere3': { 'url': baseLink + "premiere3/tracks-v1a1/mono.m3u8" },
  'premiere4': { 'url': baseLink + "premiere4/tracks-v1a1/mono.m3u8" },
  'premiere5': { 'url': baseLink + "premiere5/tracks-v1a1/mono.m3u8" },
  'premiere6': { 'url': baseLink + "premiere6/tracks-v1a1/mono.m3u8" },
  'premiere7': { 'url': baseLink + "premiere7/tracks-v1a1/mono.m3u8" },
  'premiere8': { 'url': baseLink + "premiere8/tracks-v1a1/mono.m3u8" }
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
