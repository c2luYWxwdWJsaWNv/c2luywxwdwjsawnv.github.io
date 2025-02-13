function getParameterByName(parameterName) {
  parameterName = parameterName.replace(/[\[]/, '[').replace(/[\]]/, ']');
  
  var regex = new RegExp("[?&]" + parameterName + "=([^&#]*)");
  var result = regex.exec(location.search);
  
  return result === null ? '' : decodeURIComponent(result[1].replace(/\+/g, " "));
}

var id = getParameterByName('s');

if (id == '#') {
  alert("Página Anterior");
}

const substitutionLinks = [
  "https://0002-dtvott.o5uftzrqlf.workers.dev/",
  "https://ficodaw245.ficodaw245.workers.dev/",
  "https://x.tvcasecors.workers.dev/",
  "https://245ficodaw.ficodaw245.workers.dev/",
  "https://shinyhatybt.dpetftvwrc.workers.dev/",
  "https://ponewe7659.ponewe7659.workers.dev/",
  "https://dtvott-classe-globo.jeowoa.workers.dev/",
  "https://7659ponewe.ponewe7659.workers.dev/",
  "https://empty-dtvott-9eed.a3ir7vydoy.workers.dev/",
  "https://orange-dtvott-o002.o5uftzrqlf.workers.dev/",
  "https://empty-dtvott-7b5f.a3ir7vydoy.workers.dev/"
];

var usedLinks = [];

function getRandomLink() {
  var availableLinks = substitutionLinks.filter(link => !usedLinks.includes(link));
  
  if (availableLinks.length === 0) {
    // Se todos os links foram usados, reinicia a lista
    usedLinks = [];
    availableLinks = [...substitutionLinks];
  }

  var randomLink = availableLinks[Math.floor(Math.random() * availableLinks.length)];
  usedLinks.push(randomLink);
  
  return randomLink;
}

var randomLink = getRandomLink();

var channels = {
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

var channel = channels[id];

if (channel) {
  var key = channel.key;
  var url = channel.url;
  
  var playerInstance = jwplayer("player");
  
  var drmConfig = {
    'clearkey': {
      'keyId': key.substr(0, 32),
      'key': key.substr(33, 65)
    }
  };

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
