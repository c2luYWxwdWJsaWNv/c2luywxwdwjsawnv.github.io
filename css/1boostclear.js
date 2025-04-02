// Função para obter o valor de um parâmetro da URL
function getParameterByName(paramName) {
  paramName = paramName.replace(/[\[]/, '[').replace(/[\]]/, ']');
  const regex = new RegExp("[?&]" + paramName + "=([^&#]*)");
  const result = regex.exec(location.search);
  return result === null ? '' : decodeURIComponent(result[1].replace(/\+/g, " "));
}

// Obtém o parâmetro 's' da URL
const id = getParameterByName('s');

// Se o id for '#', mostra um alerta
if (id === '#') {
  alert("Página Anterior");
}

// Lista de links de substituição
const substitutionLinks = [
  "https://x.tvcasecors.workers.dev/",
  "https://o5uftzrqlf.o5uftzrqlf.workers.dev/",
  "https://ficodaw245.ficodaw245.workers.dev/",
  "https://shinyhatybt.dpetftvwrc.workers.dev/"
];

let usedLinks = [];

// Função para obter um link aleatório
function getRandomLink() {
  let availableLinks = substitutionLinks.filter(link => !usedLinks.includes(link));
  
  // Se não houver links disponíveis, reinicia a lista de links usados
  if (availableLinks.length === 0) {
    usedLinks = [];
    availableLinks = [...substitutionLinks];
  }

  const randomLink = availableLinks[Math.floor(Math.random() * availableLinks.length)];
  usedLinks.push(randomLink);
  return randomLink;
}

// Obtém um link aleatório
const randomLink = getRandomLink();

// Definição dos canais com URLs e chaves
const channels = {
const channels = {
  'sportv1': {
    'url': randomLink + "Content/Channel/SPOSPTHD/dsc2/manifest.mpd",
    'key': "ed94b209506a59055e8f0285a52ed8b1:32ebb702e23c1de489bd6e16d00b12ed"
  },
  'sportv2': {
    'url': randomLink + "Content/Channel/SPOSP2HD/dsc2/manifest.mpd",
    'key': "eb5f30faa7cd302f9a2ba28d1306dceb:6c09fe09114148022e2f67cb96ba6917"
  },
  'sportv3': {
    'url': randomLink + "Content/Channel/SPOSP3HD/dsc1/manifest.mpd",
    'key': "3019de8a3ae423fbe43c86304dfad08e:09ad243fe8eb9849e829775c8dc5f4b1"
  },
  'band': {
    'url': randomLink + "Content/Channel/SPOBNHD/dsc2/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'sbt': {
    'url': randomLink + "Content/Channel/NACSBTHD/dsc2/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'globomg': {
    'url': randomLink + "Content/Channel/BHZGLHD/dsc3/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'globomt': {
    'url': randomLink + "Content/Channel/CBAGLHD/dsc2/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'espn1': {
    'url': randomLink + "Content/Channel/SPOESBHD/dsc4/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'espn2': {
    'url': randomLink + "Content/Channel/SPOESIHD/dsc4/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'espn3': {
    'url': randomLink + "Content/Channel/SPOESPHD/dsc4/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'espn4': {
    'url': randomLink + "Content/Channel/SPOFSTHD/dsc4/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'espn5': {
    'url': randomLink + "Content/Channel/SPOFST2HD/dsc1/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'espn6': {
    'url': randomLink + "Content/Channel/SPOESTHD/dsc4/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'cultura': {
    'url': randomLink + "Content/Channel/NACCULHD/dsc2/manifest.mpd",
    'key': "5df85b8400e33c84954a1c2493b2a819:28b0d53410b833864e12389b67390c96"
  },
  'off': {
    'url': randomLink + "Content/Channel/SPOOFFHD/dsc1/manifest.mpd",
    'key': "059d545a56823c4d8ff1474dfb913e41:e0b46f58574618d622ccae852bf80357"
  },
  'space': {
    'url': randomLink + "Content/Channel/SPOSPCHD/dsc2/manifest.mpd",
    'key': "4fc4ec2fd171358b975fb6e2dcbd87fb:40f8874c7aaab7024af92c52e0089ec1"
  },
  'tnt': {
    'url': randomLink + "Content/Channel/SPOTNTHD/dsc3/manifest.mpd",
    'key': "4d7d3330842b34adbd40be07e6a87697:6743b3b70a7f6a136b361dadd3aa56a3"
  },
  'paramount1': {
    'url': randomLink + "Content/Channel/SPOCMB1HD/dsc4/manifest.mpd",
    'key': "d43ccf312b0d3b2a92e087e2ae5e6a78:ca24a68650166cbe4e34aa48ba256fc1"
  },
  'paramount2': {
    'url': randomLink + "Content/Channel/SPOCMB2HD/dsc3/manifest.mpd",
    'key': "1605adbebca837cd9c93734d21d68eea:0e4331e6937b49bf4977923b50cbce19"
  },
  'paramount3': {
    'url': randomLink + "Content/Channel/SPOCMB3HD/dsc4/manifest.mpd",
    'key': "5fcc585769fe3518b0407370a264fc4f:3f3a7fb2b2030f63597afb71df6357cc"
  },
  'history': {
    'url': randomLink + "Content/Channel/SPOHISHD/dsc1/manifest.mpd",
    'key': "4e6fb278559d31deb1df683e9cdc02fe:caa1dc09a99d69db51fad1d4676962e5"
  },
  'combate': {
    'url': randomLink + "Content/Channel/SPOPR1HD/dsc3/manifest.mpd",
    'key': "1065cb5bf73334b791d740bad58c8adf:805e4303bf0e34896a45602e90416413"
  },
  'hbo': {
    'url': randomLink + "Content/Channel/SPOHBSHD/dsc1/manifest.mpd",
    'key': "842d8cbd65d53cfdb63bfe20e7b52ca0:bcb4e3eb78ed63e7b61a28b0b3d0d017"
  },
  'hbofamily': {
    'url': randomLink + "Content/Channel/SPOHBFHD/dsc2/manifest.mpd",
    'key': "123dbf74317730e09057d5eb562d9812:1d0b5630d75f9ac6d048f4271d53f087"
  },
  'nossofutebol1': {
    'url': randomLink + "Content/Channel/SPOCCR1HD/dsc1/manifest.mpd",
    'key': "559680804e9d3feca84a10f155397484:4fedf21e2b4cb47b61f4975362774b78"
  },
  'nossofutebol2': {
    'url': randomLink + "Content/Channel/SPOCCR2HD/dsc2/manifest.mpd",
    'key': "ef68b4b8d5b230fda35ca624aebe5dcb:4959f6dc43876c82d562de1e4e5d2f51"
  },
  'nossofutebol3': {
    'url': randomLink + "Content/Channel/SPONOR3HD/dsc3/manifest.mpd",
    'key': "6e91a26ee0a433f6810fcef7f91dbd22:3b842d5eeb194d31dfac780af8df82c2"
  }
};
// Obtém o canal correspondente ao id
const channel = channels[id];

// Se o canal for encontrado, configura o player
if (channel) {
  const key = channel.key;
  const url = channel.url;
  const playerInstance = jwplayer("player");

  const drmConfig = {
    'clearkey': {
      'keyId': key.substr(0, 32),
      'key': key.substr(33, 65)
    }
  };

  // Se k2 estiver definido, adiciona um segundo key
  if (typeof k2 !== "undefined") {
    drmConfig.clearkey2 = {
      'keyId': k2.substr(0, 32),
      'key': k2.substr(33, 65)
    };
  }

  playerInstance.setup({
    'playlist': [{
      'sources': [{
        'default': false,
        'type': "dash",
        'file': url,
        'drm': drmConfig,
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
