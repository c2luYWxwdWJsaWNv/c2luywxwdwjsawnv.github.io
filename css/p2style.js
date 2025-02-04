// Função para pegar o parâmetro pela chave
function getParameterByName(parameterName) {
  // Substitui caracteres especiais por outros adequados
  parameterName = parameterName.replace(/[\[]/, '[').replace(/[\]]/, ']');
  
  // Cria uma expressão regular para capturar o valor do parâmetro
  var regex = new RegExp("[?&]" + parameterName + "=([^&#]*)");
  
  // Executa a busca na URL
  var result = regex.exec(location.search);
  
  // Retorna o valor do parâmetro ou uma string vazia se não encontrar
  return result === null ? '' : decodeURIComponent(result[1].replace(/\+/g, " "));
}

// Obtém o parâmetro 'w' da URL
var id = getParameterByName('w');

// Verifica se o parâmetro é "#", mostrando um alerta
if (id == '#') {
  alert("Página Anterior");
}

// Definição dos canais e suas configurações
var channels = {
  'cnn': {
    'url': "https://ottb.live.cf.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/zmpncidiwv/out/v1/56b839863a7642e2a99a8b5144341aea/cenc.mpd?amznDtid=AOAGZA014O5RE&encoding=segmentBase",
    'key': "7685b7e26da7cdd166f53216783de078:89b8a2d4e233a8831693615fe0d03509"
  },
  'warner': {
    'url': "https://d1r94zrwa3gnlo.cloudfront.net/livestore102/stream/hls/277/277.mpd",
    'key': "ff12e06c66327cd35b99013b38dd4f84:08320e9a44185e55074ac435d8c9a856"
  },
  'axn': {
    'url': "https://d1r94zrwa3gnlo.cloudfront.net/livestore105/stream/hls/278/278.mpd",
    'key': "94ab9056f04692f7d56001515df427e2:c61964807f8cff271093fcc1f906d70e"
  },
  'comedycentral': {
    'url': "https://d1r94zrwa3gnlo.cloudfront.net/livestore105/stream/hls/288/288.mpd",
    'key': "485ecb01b3e17aa43a46b4726f36d2f2:602459f8cd374e3e2aee7ce92e59d816"
  },
  'bandsports': {
    'url': "https://d1r94zrwa3gnlo.cloudfront.net/livestore103/stream/hls/290/290.mpd",
    'key': "74481194bf32774e0cb44a1d71d6cc19:4bfd25bc9419f1c71e3ee8e6bf5ccf2a"
  },
  'band': {
    'url': "https://d1r94zrwa3gnlo.cloudfront.net/livestore103/stream/hls/3361/3361.mpd",
    'key': "3b43a1fbcf57cfe04109fbc1b381ac79:a23de064124dfddeaf3c23490d96328b"
  },
  'paramountnetwork': {
    'url': "https://d1r94zrwa3gnlo.cloudfront.net/livestore103/stream/hls/289/289.mpd",
    'key': "7cba7770184e4064ad3fee87a2c67ca2:37653a3bc09133c91a74ede16f9f7ecc"
  },
  'nickjr': {
    'url': "https://d1r94zrwa3gnlo.cloudfront.net/livestore104/stream/hls/285/285.mpd",
    'key': "639b0e6325561a3956b266c711fd693a:e10a4e010fe6565e01685f65cb3d6380"
  },
  'sportv1': {
    'url': "https://shinyhatybt.dpetftvwrc.workers.dev/Content/Channel/SPOSPTHD/dsc2/manifest.mpd",
    'key': "ed94b209506a59055e8f0285a52ed8b1:32ebb702e23c1de489bd6e16d00b12ed"
  },
  'sportv2': {
    'url': "https://shinyhatybt.dpetftvwrc.workers.dev/Content/Channel/SPOSP2HD/dsc2/manifest.mpd",
    'key': "eb5f30faa7cd302f9a2ba28d1306dceb:6c09fe09114148022e2f67cb96ba6917"
  },
  'sportv3': {
    'url': "https://shinyhatybt.dpetftvwrc.workers.dev/Content/Channel/SPOSP3HD/dsc1/manifest.mpd",
    'key': "3019de8a3ae423fbe43c86304dfad08e:09ad243fe8eb9849e829775c8dc5f4b1"
  },
  'space': {
    'url': "https://shinyhatybt.dpetftvwrc.workers.dev/Content/Channel/SPOSPCHD/dsc2/manifest.mpd",
    'key': "4fc4ec2fd171358b975fb6e2dcbd87fb:40f8874c7aaab7024af92c52e0089ec1"
  },
  'tnt': {
    'url': "https://shinyhatybt.dpetftvwrc.workers.dev/Content/Channel/SPOTNTHD/dsc3/manifest.mpd",
    'key': "4d7d3330842b34adbd40be07e6a87697:6743b3b70a7f6a136b361dadd3aa56a3"
  },
  'nossofutebol1': {
    'url': "https://shinyhatybt.dpetftvwrc.workers.dev/Content/Channel/SPOCCR1HD/dsc1/manifest.mpd",
    'key': "559680804e9d3feca84a10f155397484:4fedf21e2b4cb47b61f4975362774b78"
  },
  'nossofutebol2': {
    'url': "https://shinyhatybt.dpetftvwrc.workers.dev/Content/Channel/SPOCCR2HD/dsc2/manifest.mpd",
    'key': "ef68b4b8d5b230fda35ca624aebe5dcb:4959f6dc43876c82d562de1e4e5d2f51"
  },
  'nossofutebol3': {
    'url': "https://shinyhatybt.dpetftvwrc.workers.dev/Content/Channel/SPONOR3HD/dsc3/manifest.mpd",
    'key': "6e91a26ee0a433f6810fcef7f91dbd22:3b842d5eeb194d31dfac780af8df82c2"
  },
  'nickelodeon': {
    'url': "https://d1r94zrwa3gnlo.cloudfront.net/livestore105/stream/hls/284/284.mpd",
    'key': "0c74d29a8c41ff6c22e556e0b956a56b:b512a7a7942be22f81f6cfa8bec43a29"
  }
};

// Verifica se o canal existe
var channel = channels[id];

// Se o canal for encontrado, configura o player
if (channel) {
  var k = channel.key;
  var url = channel.url;
  
  var playerInstance = jwplayer("player");
  
  // Configuração do DRM
  var drmConfig = {
    'clearkey': {
      'keyId': k.substr(0, 32),
      'key': k.substr(33, 65)
    }
  };

  // Verifica se existe uma chave adicional e adiciona ao DRM
  if (typeof k2 !== "undefined") {
    drmConfig.clearkey2 = {
      'keyId': k2.substr(0, 32),
      'key': k2.substr(33, 65)
    };
  }
  
  // Configura o player com a playlist e outras opções
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
  // Caso o canal não seja encontrado, exibe um alerta
  alert("Canal não encontrado!");
}
