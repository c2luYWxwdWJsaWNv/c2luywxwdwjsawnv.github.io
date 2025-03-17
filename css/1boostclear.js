// Função para obter parâmetros da URL
function getParameterByName(name) {
  name = name.replace(/[\[]/, '[').replace(/[\]]/, ']');
  const regex = new RegExp("[?&]" + name + "=([^&#]*)");
  const result = regex.exec(location.search);
  return result === null ? '' : decodeURIComponent(result[1].replace(/\+/g, " "));
}

// Obtém o parâmetro 's' da URL
const id = getParameterByName('s');

// Se o parâmetro 's' for igual a '#', exibe um alerta
if (id === '#') {
  alert("Página Anterior");
}

// Lista de links de substituição
const substitutionLinks = [
  "https://x.tvcasecors.workers.dev/",
  "https://0002-dtvott.o5uftzrqlf.workers.dev/",
  "https://ficodaw245.ficodaw245.workers.dev/",
  "https://shinyhatybt.dpetftvwrc.workers.dev/",
  "https://ponewe7659.ponewe7659.workers.dev/",
  "https://dpetftvwrc.dpetftvwrc.workers.dev/"
];

// Armazena os links usados
let usedLinks = [];

// Função para obter um link aleatório
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

// Obtém um link aleatório
const randomLink = getRandomLink();

// Definindo canais e suas URLs
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
  'space': {
    'url': randomLink + "Content/Channel/SPOSPCHD/dsc2/manifest.mpd",
    'key': "4fc4ec2fd171358b975fb6e2dcbd87fb:40f8874c7aaab7024af92c52e0089ec1"
  },
  'tnt': {
    'url': randomLink + "Content/Channel/SPOTNTHD/dsc3/manifest.mpd",
    'key': "4d7d3330842b34adbd40be07e6a87697:6743b3b70a7f6a136b361dadd3aa56a3"
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

// Verifica se o canal existe
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

  // Se 'k2' estiver definido, adiciona a configuração de 'clearkey2'
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
