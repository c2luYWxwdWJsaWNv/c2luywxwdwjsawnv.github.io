// Função para pegar parâmetros da URL
function getParameterByName(paramName) {
  paramName = paramName.replace(/[\[]/, '[').replace(/[\]]/, ']');
  var regex = new RegExp("[?&]" + paramName + "=([^&#]*)");
  var result = regex.exec(location.search);
  return result === null ? '' : decodeURIComponent(result[1].replace(/\+/g, " "));
}

// Obtem o parâmetro 'w' da URL
var id = getParameterByName('w');

// Verifica se o parâmetro 'w' é '#', exibe alerta se for
if (id == '#') {
  alert("Página Anterior");
}

// Definindo os canais com suas URLs e chaves
var channels = {
  'cnn': {
    'url': "https://sinalpublico-tv-dash7.otte.live.cf.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/zmpncidiwv/out/v1/56b839863a7642e2a99a8b5144341aea/cenc.mpd?amznDtid=AOAGZA014O5RE&encoding=segmentBase",
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
  'cazetv1': {
    'url': "https://sinalpublico-tv-dash1.otte.live.cf.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/3ynrpdanq2/out/v1/81fd4c26584044d2b1a1cc5b32fa9af0/cenc.mpd?amznDtid=AOAGZA014O5RE&encoding=segmentBase",
    'key': "34475edab991ad5e92548aebd710410a:501b209cccd323ac00bf5ac15b406cb4"
  },
  'cazetv2': {
    'url': "https://sinalpublico-tv-dash2.otte.live.cf.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/epg9sw6owc/out/v1/e50aecefcb294fae85d6b343e0a6f1cc/cenc.mpd?amznDtid=AOAGZA014O5RE&encoding=segmentBase",
    'key': "9752ef72590ef441ffa3731e0486fbc0:db63ec7b9f11348b7cc6808a54c99457"
  },
  'cazetv3': {
    'url': "https://sinalpublico-tv-dash3.otte.live.cf.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/jg2rwtxaop/out/v1/74eba8f71bf14154ac3a9491371a6628/cenc.mpd?amznDtid=AOAGZA014O5RE&encoding=segmentBase",
    'key': "d1cc74a5123cb29f0ec0bc40d6c2f270:a5ed8184ee98c3f0a3c261129c8d6e8b"
  },
  'cazetv4': {
    'url': "https://sinalpublico-tv-dash4.otte.live.cf.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/xsimfuxtzw/out/v1/8f19d6dd3a1045b0aba0217c8dddf7bc/cenc.mpd?amznDtid=AOAGZA014O5RE&encoding=segmentBase",
    'key': "5fcf9b5ec4f8b8c783027cd1ae70a160:f4cea7ac3950c6e03846ef694631db2c"
  },
  'cazetv5': {
    'url': "https://sinalpublico-tv-dash5.otte.live.cf.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/t0ubdrgeuh/out/v1/04257c3092d148eabf6fad87d64a6d8e/cenc.mpd?amznDtid=AOAGZA014O5RE&encoding=segmentBase",
    'key': "40979491163459b4a35c8c29ca510a81:611421702e740f6a9482e19e45eb68e1"
  },
  'cazetv6': {
    'url': "https://sinalpublico-tv-dash6.otte.live.cf.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/jagnjjg3mi/out/v1/e57ff088ca78422089c3c6916fd78018/cenc.mpd?amznDtid=AOAGZA014O5RE&encoding=segmentBase",
    'key': "467da136ec566331de8199e6623800a0:fd138c7ab4ccae60ed9265900b125050"
  },
  'nickelodeon': {
    'url': "https://d1r94zrwa3gnlo.cloudfront.net/livestore105/stream/hls/284/284.mpd",
    'key': "0c74d29a8c41ff6c22e556e0b956a56b:b512a7a7942be22f81f6cfa8bec43a29"
  }
};

// Obtem o canal selecionado
var channel = channels[id];

// Se o canal existir, configura o player
if (channel) {
  var key = channel.key;
  var url = channel.url;

  // Instancia o player JWPlayer
  var playerInstance = jwplayer("player");

  // Configura o DRM
  var drmConfig = {
    'clearkey': {
      'keyId': key.substr(0, 32),
      'key': key.substr(33, 65)
    }
  };

  // Verifica se existe uma chave adicional (k2)
  if (typeof k2 !== "undefined") {
    drmConfig.clearkey2 = {
      'keyId': k2.substr(0, 32),
      'key': k2.substr(33, 65)
    };
  }

  // Configura o player
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
  // Caso o canal não exista
  alert("Canal não encontrado!");
}
