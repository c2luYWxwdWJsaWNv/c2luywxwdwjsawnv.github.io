// Função para obter parâmetros da URL
function getParameterByName(param) {
  // Substitui os caracteres de colchetes por caracteres de escape
  param = param.replace(/[\[]/, '[').replace(/[\]]/, ']');
  
  // Cria uma expressão regular para buscar o parâmetro na URL
  const regex = new RegExp("[?&]" + param + "=([^&#]*)");
  
  // Executa a busca no endereço da URL
  const results = regex.exec(location.search);
  
  // Retorna o valor decodificado do parâmetro, se encontrado, senão retorna uma string vazia
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Obtém o valor do parâmetro 's' na URL
const id = getParameterByName('s');

// Se o valor de 's' for "#", exibe um alerta indicando "Página Anterior"
if (id === '#') {
  alert("Página Anterior");
}

// URL fixa para todos os canais
const fixedLink = "https://consoledbtv.vercel.app/";

// Definição dos canais com URLs e chaves
const channels = {
  'sportv1': {
    'url': fixedLink + "Content/Channel/SPOSPTHD/dsc2/manifest.mpd",
    'key': "ed94b209506a59055e8f0285a52ed8b1:32ebb702e23c1de489bd6e16d00b12ed"
  },
  'sportv2': {
    'url': fixedLink + "Content/Channel/SPOSP2HD/dsc2/manifest.mpd",
    'key': "eb5f30faa7cd302f9a2ba28d1306dceb:6c09fe09114148022e2f67cb96ba6917"
  },
  'sportv3': {
    'url': fixedLink + "Content/Channel/SPOSP3HD/dsc1/manifest.mpd",
    'key': "3019de8a3ae423fbe43c86304dfad08e:09ad243fe8eb9849e829775c8dc5f4b1"
  },
  'band': {
    'url': fixedLink + "Content/Channel/SPOBNHD/dsc2/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'sbt': {
    'url': fixedLink + "Content/Channel/NACSBTHD/dsc2/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'globomg': {
    'url': fixedLink + "Content/Channel/BHZGLHD/dsc3/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'globomt': {
    'url': fixedLink + "Content/Channel/CBAGLHD/dsc2/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'espn1': {
    'url': fixedLink + "Content/Channel/SPOESBHD/dsc4/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'espn2': {
    'url': fixedLink + "Content/Channel/SPOESIHD/dsc4/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'espn3': {
    'url': fixedLink + "Content/Channel/SPOESPHD/dsc4/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'espn4': {
    'url': fixedLink + "Content/Channel/SPOFSTHD/dsc4/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'espn5': {
    'url': fixedLink + "Content/Channel/SPOFST2HD/dsc1/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'espn6': {
    'url': fixedLink + "Content/Channel/SPOESTHD/dsc4/manifest.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'cultura': {
    'url': fixedLink + "Content/Channel/NACCULHD/dsc2/manifest.mpd",
    'key': "5df85b8400e33c84954a1c2493b2a819:28b0d53410b833864e12389b67390c96"
  },
  'off': {
    'url': fixedLink + "Content/Channel/SPOOFFHD/dsc1/manifest.mpd",
    'key': "059d545a56823c4d8ff1474dfb913e41:e0b46f58574618d622ccae852bf80357"
  },
  'space': {
    'url': fixedLink + "Content/Channel/SPOSPCHD/dsc2/manifest.mpd",
    'key': "4fc4ec2fd171358b975fb6e2dcbd87fb:40f8874c7aaab7024af92c52e0089ec1"
  },
  'tnt': {
    'url': fixedLink + "Content/Channel/SPOTNTHD/dsc3/manifest.mpd",
    'key': "4d7d3330842b34adbd40be07e6a87697:6743b3b70a7f6a136b361dadd3aa56a3"
  },
  'paramount1': {
    'url': fixedLink + "Content/Channel/SPOCMB1HD/dsc4/manifest.mpd",
    'key': "d43ccf312b0d3b2a92e087e2ae5e6a78:ca24a68650166cbe4e34aa48ba256fc1"
  },
  'paramount2': {
    'url': fixedLink + "Content/Channel/SPOCMB2HD/dsc3/manifest.mpd",
    'key': "1605adbebca837cd9c93734d21d68eea:0e4331e6937b49bf4977923b50cbce19"
  },
  'paramount3': {
    'url': fixedLink + "Content/Channel/SPOCMB3HD/dsc4/manifest.mpd",
    'key': "5fcc585769fe3518b0407370a264fc4f:3f3a7fb2b2030f63597afb71df6357cc"
  },
  'history': {
    'url': fixedLink + "Content/Channel/SPOHISHD/dsc1/manifest.mpd",
    'key': "4e6fb278559d31deb1df683e9cdc02fe:caa1dc09a99d69db51fad1d4676962e5"
  },
  'combate': {
    'url': fixedLink + "Content/Channel/SPOPR1HD/dsc3/manifest.mpd",
    'key': "1065cb5bf73334b791d740bad58c8adf:805e4303bf0e34896a45602e90416413"
  },
  'hbo': {
    'url': fixedLink + "Content/Channel/SPOHBSHD/dsc1/manifest.mpd",
    'key': "842d8cbd65d53cfdb63bfe20e7b52ca0:bcb4e3eb78ed63e7b61a28b0b3d0d017"
  },
  'hbofamily': {
    'url': fixedLink + "Content/Channel/SPOHBFHD/dsc2/manifest.mpd",
    'key': "123dbf74317730e09057d5eb562d9812:1d0b5630d75f9ac6d048f4271d53f087"
  },
  'nossofutebol1': {
    'url': fixedLink + "Content/Channel/SPOCCR1HD/dsc1/manifest.mpd",
    'key': "559680804e9d3feca84a10f155397484:4fedf21e2b4cb47b61f4975362774b78"
  },
  'nossofutebol2': {
    'url': fixedLink + "Content/Channel/SPOCCR2HD/dsc2/manifest.mpd",
    'key': "ef68b4b8d5b230fda35ca624aebe5dcb:4959f6dc43876c82d562de1e4e5d2f51"
  },
  'nossofutebol3': {
    'url': fixedLink + "Content/Channel/SPONOR3HD/dsc3/manifest.mpd",
    'key': "6e91a26ee0a433f6810fcef7f91dbd22:3b842d5eeb194d31dfac780af8df82c2"
  }
};

// Obtém o canal a partir do parâmetro 's' na URL
const channel = channels[id];

// Se o canal for encontrado, configura o player de vídeo
if (channel) {
  const key = channel.key;
  const url = channel.url;
  const playerInstance = jwplayer("player");
  
  // Configuração de DRM (proteção contra cópia)
  const drmConfig = {
    'clearkey': {
      'keyId': key.substr(0, 32),
      'key': key.substr(33, 65)
    }
  };
  
  // Se uma chave alternativa for definida, a adiciona ao DRM
  if (typeof k2 !== "undefined") {
    drmConfig.clearkey2 = {
      'keyId': k2.substr(0, 32),
      'key': k2.substr(33, 65)
    };
  }

  // Configura o player com a URL e as configurações de DRM
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
  // Se o canal não for encontrado, exibe um alerta
  alert("Canal não encontrado!");
}
