// Função para pegar parâmetros da URL
function getParameterByName(param) {
  param = param.replace(/[\[]/, '[').replace(/[\]]/, ']');
  var regex = new RegExp("[?&]" + param + "=([^&#]*)");
  var result = regex.exec(location.search);
  return result === null ? '' : decodeURIComponent(result[1].replace(/\+/g, " "));
}

// Pegando o valor do parâmetro 'id' da URL
var channelId = getParameterByName('s');

// Verificando se o valor de 'id' é "#"
if (channelId == '#') {
  alert("Página Anterior");
}

// Lista de links de substituição para os canais
const substitutionLinks = [
  "https://suldestetv.nipah21950.workers.dev/",
  "https://tiyec63769.tiyec63769.workers.dev",
  "https://nipah21950.nipah21950.workers.dev/",
  "https://suldestetv.tiyec63769.workers.dev",
  "https://darkhat353.fastplayertvlos.workers.dev/"
];

var usedLinks = [];

// Função para obter um link aleatório não usado
function getRandomLink() {
  var availableLinks = substitutionLinks.filter(link => !usedLinks.includes(link));

  // Se todos os links já foram usados, limpa a lista de usados
  if (availableLinks.length === 0) {
    usedLinks = [];
    availableLinks = [...substitutionLinks];
  }

  // Escolhe um link aleatório e o adiciona à lista de usados
  var randomLink = availableLinks[Math.floor(Math.random() * availableLinks.length)];
  usedLinks.push(randomLink);
  return randomLink;
}

// Pegando um link aleatório
var randomLink = getRandomLink();

// Definindo os canais e suas URLs
var channels = {
  'riodejaneirogloborio': {
    'url': randomLink + "globorj-globorio/tracks-v1a1/mono.m3u8"
  },
  'riodejaneirointertvaltolitoral': {
    'url': randomLink + "globorj-intertvaltolitoral/tracks-v1a1/mono.m3u8"
  },
  'riodejaneirointertvserramar': {
    'url': randomLink + "globorj-intertvserramar/tracks-v1a1/mono.m3u8"
  },
  'riodejaneirotvriosul': {
    'url': randomLink + "globorj-tvriosul/tracks-v1a1/mono.m3u8"
  },
  'saopauloglobosaopaulo': {
    'url': randomLink + "globosp-globosaopaulo/tracks-v1a1/mono.m3u8"
  },
  'saopauloeptvcentral': {
    'url': randomLink + "globosp-eptvcentral/tracks-v1a1/mono.m3u8"
  },
  'saopaulotvdiario': {
    'url': randomLink + "globosp-tvdiario/tracks-v1a1/mono.m3u8"
  },
  'saopaulotvtemitapetininga': {
    'url': randomLink + "globosp-tvtemitapetininga/tracks-v1a1/mono.m3u8"
  },
  'saopaulotvvanguardasjcampos': {
    'url': randomLink + "globosp-tvvanguardasjcampos/tracks-v1a1/mono.m3u8"
  },
  'saopaulotvvanguardataubate': {
    'url': randomLink + "globosp-tvvanguardataubate/tracks-v1a1/mono.m3u8"
  },
  'minasgeraisglobominas': {
    'url': randomLink + "globomg-globominas/tracks-v1a1/mono.m3u8"
  },
  'minasgeraisintertvdosvales': {
    'url': randomLink + "globomg-intertvdosvales/tracks-v1a1/mono.m3u8"
  },
  'minasgeraistvintegracaoaraxa': {
    'url': randomLink + "globomg-tvintegracaoaraxa/tracks-v1a1/mono.m3u8"
  },
  'minasgeraistvintegracaojuizdefora': {
    'url': randomLink + "globomg-tvintegracaojuizdefora/tracks-v1a1/mono.m3u8"
  },
  'minasgeraistvintegracaouberaba': {
    'url': randomLink + "globomg-tvintegracaouberaba/tracks-v1a1/mono.m3u8"
  },
  'espiritosantotvgazetavitória': {
    'url': randomLink + "globoes-tvgazetavitoria/tracks-v1a1/mono.m3u8"
  },
  'riograndedosulrbstvportoalegre': {
    'url': randomLink + "globors-rbstvportoalegre/tracks-v1a1/mono.m3u8"
  },
  'riograndedosulrbstvcaxiasdosul': {
    'url': randomLink + "globors-rbstvcaxiasdosul/tracks-v1a1/mono.m3u8"
  },
  'riograndedosulrbstvsantacruz': {
    'url': randomLink + "globors-rbstvsantacruz/tracks-v1a1/mono.m3u8"
  },
  'santacatarinansctvflorianopolis': {
    'url': randomLink + "globosc-nsctvflorianopolis/tracks-v1a1/mono.m3u8"
  },
  'santacatarinansctvchapecó': {
    'url': randomLink + "globosc-nsctvchapeco/tracks-v1a1/mono.m3u8"
  },
  'santacatarinansctvjoinville': {
    'url': randomLink + "globosc-nsctvjoinville/tracks-v1a1/mono.m3u8"
  },
  'paranarpccuritiba': {
    'url': randomLink + "globopr-rpccuritiba/tracks-v1a1/mono.m3u8"
  },
  'pernambucoglobonordeste': {
    'url': randomLink + "globope-globonordeste/tracks-v1a1/mono.m3u8"
  },
  'pernambucotvasabranca': {
    'url': randomLink + "globope-tvasabranca/tracks-v1a1/mono.m3u8"
  },
  'bahiatvbahia': {
    'url': randomLink + "globoba-tvbahia/tracks-v1a1/mono.m3u8"
  },
  'bahiatvsantacruz': {
    'url': randomLink + "globoba-tvsantacruz/tracks-v1a1/mono.m3u8"
  },
  'bahiatvsudoeste': {
    'url': randomLink + "globoba-tvsudoeste/tracks-v1a1/mono.m3u8"
  },
  'cearatvverdesmaresfortaleza': {
    'url': randomLink + "globoce-tvverdesmaresfortaleza/tracks-v1a1/mono.m3u8"
  },
  'cearatvverdesmarescariri': {
    'url': randomLink + "globoce-tvverdesmarescariri/tracks-v1a1/mono.m3u8"
  },
  'piauitvclube': {
    'url': randomLink + "globopi-tvclube/tracks-v1a1/mono.m3u8"
  },
  'maranhaotvmirantesaoluis': {
    'url': randomLink + "globoma-tvmirantessaoluis/tracks-v1a1/mono.m3u8"
  },
  'riograndedonorteintertvcabugi': {
    'url': randomLink + "globorn-intertvcabugi/tracks-v1a1/mono.m3u8"
  },
  'paraibatvcabobranco': {
    'url': randomLink + "globopb-tvcabobranco/tracks-v1a1/mono.m3u8"
  },
  'brasiliaglobobrasilia': {
    'url': randomLink + "globodf-globobrasilia/tracks-v1a1/mono.m3u8"
  },
  'goiastvanhangueragoiânia': {
    'url': randomLink + "globogo-tvanhangueragoiania/tracks-v1a1/mono.m3u8"
  },
  'amazonasredeamazonicamanaus': {
    'url': randomLink + "globoam-redeamazonicamanaus/tracks-v1a1/mono.m3u8"
  },
  'paratvliberalbelem': {
    'url': randomLink + "globopa-tvliberalbelem/tracks-v1a1/mono.m3u8"
  },
  'sbt': {
    'url': randomLink + "sbt/tracks-v1a1/mono.m3u8"
  },
  'band': {
    'url': randomLink + "band/tracks-v1a1/mono.m3u8"
  },
  'record': {
    'url': randomLink + "record/tracks-v1a1/mono.m3u8"
  },
  'redetv': {
    'url': randomLink + "redetv/tracks-v1a1/mono.m3u8"
  },
  'tvcultura': {
    'url': randomLink + "tvcultura/tracks-v1a1/mono.m3u8"
  },
  'tvbrasil': {
    'url': randomLink + "tvbrasil/tracks-v1a1/mono.m3u8"
  },
  'globonews': {
    'url': randomLink + "globonews/tracks-v1a1/mono.m3u8"
  },
  'cnnbrasil': {
    'url': randomLink + "cnnbrasil/tracks-v1a1/mono.m3u8"
  },
  'bandnews': {
    'url': randomLink + "bandnews/tracks-v1a1/mono.m3u8"
  },
  'jpnews': {
    'url': randomLink + "jpnews/tracks-v1a1/mono.m3u8"
  },
  'recordnews': {
    'url': randomLink + "recordnews/tracks-v1a1/mono.m3u8"
  },
  'max': {
    'url': randomLink + "max/tracks-v1a1/mono.m3u8"
  },
  'max2': {
    'url': randomLink + "max2/tracks-v1a1/mono.m3u8"
  },
  'max3': {
    'url': randomLink + "max3/tracks-v1a1/mono.m3u8"
  },
  'espn1': {
    'url': randomLink + "espn/tracks-v1a1/mono.m3u8"
  },
  'espn2': {
    'url': randomLink + "espn2/tracks-v1a1/mono.m3u8"
  },
  'espn3': {
    'url': randomLink + "espn3/tracks-v1a1/mono.m3u8"
  },
  'espn4': {
    'url': randomLink + "espn4/tracks-v1a1/mono.m3u8"
  },
  'espn5': {
    'url': randomLink + "espn5/tracks-v1a1/mono.m3u8"
  },
  'espn6': {
    'url': randomLink + "espn6/tracks-v1a1/mono.m3u8"
  },
  'sportv1': {
    'url': randomLink + "sportv/tracks-v1a1/mono.m3u8"
  },
  'sportv2': {
    'url': randomLink + "sportv2/tracks-v1a1/mono.m3u8"
  },
  'sportv3': {
    'url': randomLink + "sportv3/tracks-v1a1/mono.m3u8"
  },
  'sportv4': {
    'url': randomLink + "sportv4/tracks-v1a1/mono.m3u8"
  },
  'sportvmosaico': {
    'url': randomLink + "sportvmosaico/tracks-v1a1/mono.m3u8"
  },
  'sportvalternativo': {
    'url': randomLink + "sportvalternativo/tracks-v1a1/mono.m3u8"
  },
  'sportv2alternativo': {
    'url': randomLink + "sportv2alternativo/tracks-v1a1/mono.m3u8"
  },
  'sportv3alternativo': {
    'url': randomLink + "sportv3alternativo/tracks-v1a1/mono.m3u8"
  },
  'sportv4alternativo': {
    'url': randomLink + "sportv4alternativo/tracks-v1a1/mono.m3u8"
  },
  'sportvmosaicoalternativo': {
    'url': randomLink + "sportvmosaicoalternativo/tracks-v1a1/mono.m3u8"
  },
  'premiereclubes': {
    'url': randomLink + "premiereclubes/tracks-v1a1/mono.m3u8"
  },
  'premiere2': {
    'url': randomLink + "premiere2/tracks-v1a1/mono.m3u8"
  },
  'premiere3': {
    'url': randomLink + "premiere3/tracks-v1a1/mono.m3u8"
  },
  'premiere4': {
    'url': randomLink + "premiere4/tracks-v1a1/mono.m3u8"
  },
  'premiere5': {
    'url': randomLink + "premiere5/tracks-v1a1/mono.m3u8"
  },
  'premiere6': {
    'url': randomLink + "premiere6/tracks-v1a1/mono.m3u8"
  },
  'premiere7': {
    'url': randomLink + "premiere7/tracks-v1a1/mono.m3u8"
  },
  'premiere8': {
    'url': randomLink + "premiere8/tracks-v1a1/mono.m3u8"
  },
  'premiereclubesalternativo': {
    'url': randomLink + "premiereclubesalternativo/tracks-v1a1/mono.m3u8"
  },
  'premiere2alternativo': {
    'url': randomLink + "premiere2alternativo/tracks-v1a1/mono.m3u8"
  },
  'premiere3alternativo': {
    'url': randomLink + "premiere3alternativo/tracks-v1a1/mono.m3u8"
  },
  'premiere4alternativo': {
    'url': randomLink + "premiere4alternativo/tracks-v1a1/mono.m3u8"
  },
  'premiere5alternativo': {
    'url': randomLink + "premiere5alternativo/tracks-v1a1/mono.m3u8"
  },
  'premiere6alternativo': {
    'url': randomLink + "premiere6alternativo/tracks-v1a1/mono.m3u8"
  },
  'premiere7alternativo': {
    'url': randomLink + "premiere7alternativo/tracks-v1a1/mono.m3u8"
  },
  'premiere8alternativo': {
    'url': randomLink + "premiere8alternativo/tracks-v1a1/mono.m3u8"
  },
  'paramount+': {
    'url': randomLink + "paramountplus/tracks-v1a1/mono.m3u8"
  },
  'paramount+2': {
    'url': randomLink + "paramountplus2/tracks-v1a1/mono.m3u8"
  },
  'paramount+3': {
    'url': randomLink + "paramountplus3/tracks-v1a1/mono.m3u8"
  },
  'paramount+4': {
    'url': randomLink + "paramountplus4/tracks-v1a1/mono.m3u8"
  },
  'paramount+alternativo': {
    'url': randomLink + "paramountplusalternativo/tracks-v1a1/mono.m3u8"
  },
  'paramount+2alternativo': {
    'url': randomLink + "paramountplus2alternativo/tracks-v1a1/mono.m3u8"
  },
  'paramount+3alternativo': {
    'url': randomLink + "paramountplus3alternativo/tracks-v1a1/mono.m3u8"
  },
  'paramount+4alternativo': {
    'url': randomLink + "paramountplus4alternativo/tracks-v1a1/mono.m3u8"
  },
  'combate': {
    'url': randomLink + "combate/tracks-v1a1/mono.m3u8"
  },
  'ufcfightpass': {
    'url': randomLink + "ufcfightpass/tracks-v1a1/mono.m3u8"
  },
  'foxsports2': {
    'url': randomLink + "foxsports2/tracks-v1a1/mono.m3u8"
  },
  'bandsports': {
    'url': randomLink + "bandsports/tracks-v1a1/mono.m3u8"
  },
  'nossofutebol': {
    'url': randomLink + "nossofutebol/tracks-v1a1/mono.m3u8"
  },
  'tntsports': {
    'url': randomLink + "tntsports/tracks-v1a1/mono.m3u8"
  },
  'telecinepremium': {
    'url': randomLink + "telecinepremium/tracks-v1a1/mono.m3u8"
  },
  'telecinepipoca': {
    'url': randomLink + "telecinepipoca/tracks-v1a1/mono.m3u8"
  },
  'telecineaction': {
    'url': randomLink + "telecineaction/tracks-v1a1/mono.m3u8"
  },
  'telecinetouch': {
    'url': randomLink + "telecinetouch/tracks-v1a1/mono.m3u8"
  },
  'telecinefun': {
    'url': randomLink + "telecinefun/tracks-v1a1/mono.m3u8"
  },
  'telecinecult': {
    'url': randomLink + "telecinecult/tracks-v1a1/mono.m3u8"
  },
  'hbo': {
    'url': randomLink + "hbo/tracks-v1a1/mono.m3u8"
  },
  'hbo2': {
    'url': randomLink + "hbo2/tracks-v1a1/mono.m3u8"
  },
  'hboplus': {
    'url': randomLink + "hboplus/tracks-v1a1/mono.m3u8"
  },
  'hbofamily': {
    'url': randomLink + "hbofamily/tracks-v1a1/mono.m3u8"
  },
  'hbosignature': {
    'url': randomLink + "hbosignature/tracks-v1a1/mono.m3u8"
  },
  'hboxtreme': {
    'url': randomLink + "hboxtreme/tracks-v1a1/mono.m3u8"
  },
  'discoverychannel': {
    'url': randomLink + "discoverychannel/tracks-v1a1/mono.m3u8"
  },
  'discoveryworld': {
    'url': randomLink + "discoveryworld/tracks-v1a1/mono.m3u8"
  },
  'discoveryturbo': {
    'url': randomLink + "discoveryturbo/tracks-v1a1/mono.m3u8"
  },
  'discoveryid': {
    'url': randomLink + "discoveryid/tracks-v1a1/mono.m3u8"
  },
  'discoverykids': {
    'url': randomLink + "discoverykids/tracks-v1a1/mono.m3u8"
  },
  'discoveryh&h': {
    'url': randomLink + "discoveryheh/tracks-v1a1/mono.m3u8"
  },
  'discoverytheater': {
    'url': randomLink + "discoverytheater/tracks-v1a1/mono.m3u8"
  },
  'discoveryscience': {
    'url': randomLink + "discoveryscience/tracks-v1a1/mono.m3u8"
  },
  'comedycentral': {
    'url': randomLink + "comedycentral/tracks-v1a1/mono.m3u8"
  },
  'mtv': {
    'url': randomLink + "mtv/tracks-v1a1/mono.m3u8"
  },
  'mtvlive': {
    'url': randomLink + "mtvlive/tracks-v1a1/mono.m3u8"
  },
  'nickjr': {
    'url': randomLink + "nickjr/tracks-v1a1/mono.m3u8"
  },
  'lifetime': {
    'url': randomLink + "lifetime/tracks-v1a1/mono.m3u8"
  },
  'agro': {
    'url': randomLink + "agromais/tracks-v1a1/mono.m3u8"
  },
  'arte1': {
    'url': randomLink + "arte1/tracks-v1a1/mono.m3u8"
  },
  'terraviva': {
    'url': randomLink + "terraviva/tracks-v1a1/mono.m3u8"
  },
  'amc': {
    'url': randomLink + "amc/tracks-v1a1/mono.m3u8"
  },
  'axn': {
    'url': randomLink + "axn/tracks-v1a1/mono.m3u8"
  },
  'bis': {
    'url': randomLink + "bis/tracks-v1a1/mono.m3u8"
  },
  'canalbrasil': {
    'url': randomLink + "canalbrasil/tracks-v1a1/mono.m3u8"
  },
  'e': {
    'url': randomLink + "e/tracks-v1a1/mono.m3u8"
  },
  'fx': {
    'url': randomLink + "fx/tracks-v1a1/mono.m3u8"
  },
  'gloob': {
    'url': randomLink + "gloob/tracks-v1a1/mono.m3u8"
  },
  'gloobinho': {
    'url': randomLink + "gloobinho/tracks-v1a1/mono.m3u8"
  },
  'gnt': {
    'url': randomLink + "gnt/tracks-v1a1/mono.m3u8"
  },
  'history': {
    'url': randomLink + "history/tracks-v1a1/mono.m3u8"
  },
  'history2': {
    'url': randomLink + "history2/tracks-v1a1/mono.m3u8"
  },
  'megapix': {
    'url': randomLink + "megapix/tracks-v1a1/mono.m3u8"
  },
  'modoviagem': {
    'url': randomLink + "modoviagem/tracks-v1a1/mono.m3u8"
  },
  'multishow': {
    'url': randomLink + "multishow/tracks-v1a1/mono.m3u8"
  },
  'canaloff': {
    'url': randomLink + "canaloff/tracks-v1a1/mono.m3u8"
  },
  'studiouniversal': {
    'url': randomLink + "studiouniversal/tracks-v1a1/mono.m3u8"
  },
  'syfy': {
    'url': randomLink + "syfy/tracks-v1a1/mono.m3u8"
  },
  'universaltv': {
    'url': randomLink + "universaltv/tracks-v1a1/mono.m3u8"
  },
  'cinemax': {
    'url': randomLink + "cinemax/tracks-v1a1/mono.m3u8"
  },
  'cinecanal': {
    'url': randomLink + "cinecanal/tracks-v1a1/mono.m3u8"
  },
  'paramountnetwork': {
    'url': randomLink + "paramountnetwork/tracks-v1a1/mono.m3u8"
  },
  'animalplanet': {
    'url': randomLink + "animalplanet/tracks-v1a1/mono.m3u8"
  },
  'cartoonnetwork': {
    'url': randomLink + "cartoonnetwork/tracks-v1a1/mono.m3u8"
  },
  'disneychannel': {
    'url': randomLink + "disneychannel/tracks-v1a1/mono.m3u8"
  },
  'nationalgeographic': {
    'url': randomLink + "nationalgeographic/tracks-v1a1/mono.m3u8"
  },
  'nickelodeon': {
    'url': randomLink + "nickelodeon/tracks-v1a1/mono.m3u8"
  },
  'sonychannel': {
    'url': randomLink + "sonychannel/tracks-v1a1/mono.m3u8"
  },
  'sonymovies': {
    'url': randomLink + "sonymovies/tracks-v1a1/mono.m3u8"
  },
  'space': {
    'url': randomLink + "space/tracks-v1a1/mono.m3u8"
  },
  'starchannel': {
    'url': randomLink + "starchannel/tracks-v1a1/mono.m3u8"
  },
  'foodnetwork': {
    'url': randomLink + "foodnetwork/tracks-v1a1/mono.m3u8"
  },
  'warnertv': {
    'url': randomLink + "warnertv/tracks-v1a1/mono.m3u8"
  },
  'trutv': {
    'url': randomLink + "trutv/tracks-v1a1/mono.m3u8"
  },
  'tlc': {
    'url': randomLink + "tlc/tracks-v1a1/mono.m3u8"
  },
  'viva': {
    'url': randomLink + "viva/tracks-v1a1/mono.m3u8"
  },
  'aee': {
    'url': randomLink + "aee/tracks-v1a1/mono.m3u8"
  },
  'tnt': {
    'url': randomLink + "tnt/tracks-v1a1/mono.m3u8"
  },
  'eleven1portugal': {
    'url': randomLink + "elevensports_pt/tracks-v1a1/mono.m3u8"
  },
  'eleven2portugal': {
    'url': randomLink + "elevensports2_pt/tracks-v1a1/mono.m3u8"
  },
  'eleven3portugal': {
    'url': randomLink + "elevensports3_pt/tracks-v1a1/mono.m3u8"
  },
  'eleven4portugal': {
    'url': randomLink + "elevensports4_pt/tracks-v1a1/mono.m3u8"
  },
  'eleven5portugal': {
    'url': randomLink + "elevensports5_pt/tracks-v1a1/mono.m3u8"
  },
  'eleven6portugal': {
    'url': randomLink + "elevensports6_pt/tracks-v1a1/mono.m3u8"
  },
  'empreender': {
    'url': randomLink + "empreender/tracks-v1a1/mono.m3u8"
  },
  'saborearte': {
    'url': randomLink + "saborearte/tracks-v1a1/mono.m3u8"
  },
  'aparecida': {
    'url': randomLink + "aparecida/tracks-v1a1/mono.m3u8"
  },
  'ratimbum': {
    'url': randomLink + "ratimbum/tracks-v1a1/mono.m3u8"
  },
  'tntnovelas': {
    'url': randomLink + "tntnovelas/tracks-v1a1/mono.m3u8"
  },
  'fishtv': {
    'url': randomLink + "fishtv/tracks-v1a1/mono.m3u8"
  },
  'cartoonito': {
    'url': randomLink + "cartoonito/tracks-v1a1/mono.m3u8"
  },
  'fashiontv': {
    'url': randomLink + "fashiontv/tracks-v1a1/mono.m3u8"
  },
  'curta': {
    'url': randomLink + "curta/tracks-v1a1/mono.m3u8"
  },
  'hgtv': {
    'url': randomLink + "hgtv/tracks-v1a1/mono.m3u8"
  },
  'woohoo': {
    'url': randomLink + "woohoo/tracks-v1a1/mono.m3u8"
  },
  'zoomoo': {
    'url': randomLink + "zoomoo/tracks-v1a1/mono.m3u8"
  },
  'musicboxbrazil': {
    'url': randomLink + "musicboxbrasil/tracks-v1a1/mono.m3u8"
  },
  'mtv00s': {
    'url': randomLink + "mtvs_00/tracks-v1a1/mono.m3u8"
  },
  'filmeartsbrazil': {
    'url': randomLink + "filmearts/tracks-v1a1/mono.m3u8"
  },
  'primeboxbrazil': {
    'url': randomLink + "primeboxbrazil/tracks-v1a1/mono.m3u8"
  },
  'cnninternational': {
    'url': randomLink + "cnninternational/tracks-v1a1/mono.m3u8"
  },
  'tvgazeta': {
    'url': randomLink + "gazeta/tracks-v1a1/mono.m3u8"
  },
  'redegospel': {
    'url': randomLink + "redegospel/tracks-v1a1/mono.m3u8"
  },
  'tvsenado': {
    'url': randomLink + "tvsenado/tracks-v1a1/mono.m3u8"
  },
  'tvcamara': {
    'url': randomLink + "tvcamara/tracks-v1a1/mono.m3u8"
  },
  'brasilparalelo': {
    'url': randomLink + "brasilparalelo/tracks-v1a1/mono.m3u8"
  },
  'futura': {
    'url': randomLink + "futura/tracks-v1a1/mono.m3u8"
  },
  'canaldoboi': {
    'url': randomLink + "canaldoboi/tracks-v1a1/mono.m3u8"
  },
  'agrobrasiltv': {
    'url': randomLink + "agrobrasil/tracks-v1a1/mono.m3u8"
  },
  'canalrural': {
    'url': randomLink + "novotempo/tracks-v1a1/mono.m3u8"
  },
  'redevida': {
    'url': randomLink + "redevida/tracks-v1a1/mono.m3u8"
  },
  'tvpaieterno': {
    'url': randomLink + "tvpaieterno/tracks-v1a1/mono.m3u8"
  },
  'tvevangelizar': {
    'url': randomLink + "tvevangelizar/tracks-v1a1/mono.m3u8"
  },
  'tvcancaonova': {
    'url': randomLink + "cancaonova/tracks-v1a1/mono.m3u8"
  },
  'usa': {
    'url': randomLink + "usa/tracks-v1a1/mono.m3u8"
  },
  'adultswim': {
    'url': randomLink + "adultswim/tracks-v1a1/mono.m3u8"
  },
  'tcm': {
    'url': randomLink + "tcm/tracks-v1a1/mono.m3u8"
  },
  'playboytv': {
    'url': randomLink + "playboy/tracks-v1a1/mono.m3u8"
  },
  'sexprive': {
    'url': randomLink + "sexprive/tracks-v1a1/mono.m3u8"
  },
  'sextreme': {
    'url': randomLink + "sextreme/tracks-v1a1/mono.m3u8"
  },
  'sexyhot': {
    'url': randomLink + "sexyhot/tracks-v1a1/mono.m3u8"
  },
  'venus': {
    'url': randomLink + "venus/tracks-v1a1/mono.m3u8"
  },
  'sporttvpt': {
    'url': randomLink + "sporttvpt/tracks-v1a1/mono.m3u8"
  },
  'sporttvpt2': {
    'url': randomLink + "sporttvpt2/tracks-v1a1/mono.m3u8"
  },
  'sporttvpt3': {
    'url': randomLink + "sporttvpt3/tracks-v1a1/mono.m3u8"
  },
  'sporttvpt4': {
    'url': randomLink + "sporttvpt4/tracks-v1a1/mono.m3u8"
  },
  'sporttvpt5': {
    'url': randomLink + "sporttvpt5/tracks-v1a1/mono.m3u8"
  },
  'sporttvpt6': {
    'url': randomLink + "sporttvpt6/tracks-v1a1/mono.m3u8"
  },
  'primevideo': {
    'url': randomLink + "primevideo/tracks-v1a1/mono.m3u8"
  },
  'primevideo2': {
    'url': randomLink + "primevideo2/tracks-v1a1/mono.m3u8"
  },
  'primevideo3': {
    'url': randomLink + "primevideo3/tracks-v1a1/mono.m3u8"
  },
  'primevideo4': {
    'url': randomLink + "primevideo4/tracks-v1a1/mono.m3u8"
  },
  'cazetv': {
    'url': randomLink + "cazetv/tracks-v1a1/mono.m3u8"
  },
  'cazetv2': {
    'url': randomLink + "cazetv2/tracks-v1a1/mono.m3u8"
  },
  'cazetv3': {
    'url': randomLink + "cazetv3/tracks-v1a1/mono.m3u8"
  }
};

// Verificando se o canal existe e configurando o player
var channel = channels[channelId];
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
