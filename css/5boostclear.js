function getParameterByName(parameterName) {
  parameterName = parameterName.replace(/[\[]/, '[').replace(/[\]]/, ']');
  const regex = new RegExp("[?&]" + parameterName + "=([^&#]*)");
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, " "));
}

const id = getParameterByName('id');

if (id === '#') {
  alert("Página Anterior");
}

const channels = {
  'adultswim': { 'url': "https://consoledplay.vercel.app/adultswim/tracks-v1a1/mono.m3u8" },
  'globosp': { 'url': "https://consoledplay.vercel.app/globosp/tracks-v1a1/mono.m3u8" },
  'globonews': { 'url': "https://consoledplay.vercel.app/globonews/tracks-v1a1/mono.m3u8" },
  'bandsports': { 'url': "https://consoledplay.vercel.app/bandsports/tracks-v1a1/mono.m3u8" },
  'sbt': { 'url': "https://consoledplay.vercel.app/sbtsp/tracks-v1a1/mono.m3u8" },
  'disneychannel': { 'url': "https://consoledplay.vercel.app/disneychannel/tracks-v1a1/mono.m3u8" },
  'cartoonnetwork': { 'url': "https://consoledplay.vercel.app/cartoonnetwork/tracks-v1a1/mono.m3u8" },
  'tnt': { 'url': "https://consoledplay.vercel.app/tnt/tracks-v1a1/mono.m3u8" },
  'amc': { 'url': "https://consoledplay.vercel.app/amc/tracks-v1a1/mono.m3u8" },
  'axn': { 'url': "https://consoledplay.vercel.app/axn/tracks-v1a1/mono.m3u8" },
  'cinemax': { 'url': "https://consoledplay.vercel.app/cinemax/tracks-v1a1/mono.m3u8" },
  'telecineaction': { 'url': "https://consoledplay.vercel.app/tcaction/tracks-v1a1/mono.m3u8" },
  'telecinefun': { 'url': "https://consoledplay.vercel.app/tcfun/tracks-v1a1/mono.m3u8" },
  'telecinepipoca': { 'url': "https://consoledplay.vercel.app/tcpipoca/tracks-v1a1/mono.m3u8" },
  'telecinepremium': { 'url': "https://consoledplay.vercel.app/tcpremium/tracks-v1a1/mono.m3u8" },
  'hbo': { 'url': "https://consoledplay.vercel.app/hbo/tracks-v1a1/mono.m3u8" },
  'hbofamily': { 'url': "https://consoledplay.vercel.app/hbofamily/tracks-v1a1/mono.m3u8" },
  'hboxtreme': { 'url': "https://consoledplay.vercel.app/hboxtreme/tracks-v1a1/mono.m3u8" },
  'espn1': { 'url': "https://consoledplay.vercel.app/espn/tracks-v1a1/mono.m3u8" },
  'espn2': { 'url': "https://consoledplay.vercel.app/espn2/tracks-v1a1/mono.m3u8" },
  'espn3': { 'url': "https://consoledplay.vercel.app/espn3/tracks-v1a1/mono.m3u8" },
  'espn4': { 'url': "https://consoledplay.vercel.app/espn4/tracks-v1a1/mono.m3u8" },
  'espn5': { 'url': "https://consoledplay.vercel.app/espn5/tracks-v1a1/mono.m3u8" },
  'espn6': { 'url': "https://consoledplay.vercel.app/espn6/tracks-v1a1/mono.m3u8" },
  'sportv1': { 'url': "https://consoledplay.vercel.app/sportv/tracks-v1a1/mono.m3u8" },
  'sportv2': { 'url': "https://consoledplay.vercel.app/sportv2/tracks-v1a1/mono.m3u8" },
  'sportv3': { 'url': "https://consoledplay.vercel.app/sportv3/tracks-v1a1/mono.m3u8" },
  'combate': { 'url': "https://consoledplay.vercel.app/combate/tracks-v1a1/mono.m3u8" },
  'starchannel': { 'url': "https://consoledplay.vercel.app/starchannel/tracks-v1a1/mono.m3u8" },
  'animalplanet': { 'url': "https://consoledplay.vercel.app/animalplanet/tracks-v1a1/mono.m3u8" },
  'discoveryid': { 'url': "https://consoledplay.vercel.app/discoveryid/tracks-v1a1/mono.m3u8" },
  'discoveryturbo': { 'url': "https://consoledplay.vercel.app/discoveryturbo/tracks-v1a1/mono.m3u8" },
  'space': { 'url': "https://consoledplay.vercel.app/space/tracks-v1a1/mono.m3u8" },
  'nossofutebol': { 'url': "https://consoledplay.vercel.app/nossofutebol/tracks-v1a1/mono.m3u8" },
  'premiereclubes': { 'url': "https://consoledplay.vercel.app/premiereclubes/tracks-v1a1/mono.m3u8" },
  'premiere2': { 'url': "https://consoledplay.vercel.app/premiere2/tracks-v1a1/mono.m3u8" },
  'premiere3': { 'url': "https://consoledplay.vercel.app/premiere3/tracks-v1a1/mono.m3u8" },
  'premiere4': { 'url': "https://consoledplay.vercel.app/premiere4/tracks-v1a1/mono.m3u8" },
  'premiere5': { 'url': "https://consoledplay.vercel.app/premiere5/tracks-v1a1/mono.m3u8" }
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
