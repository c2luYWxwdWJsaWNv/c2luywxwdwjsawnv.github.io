function getParameterByName(parameterName) {
  // Substitui os caracteres "[" e "]" por suas versões literais
  parameterName = parameterName.replace(/[\[]/, '[').replace(/[\]]/, ']');
  
  // Cria uma expressão regular para encontrar o parâmetro na URL
  const regex = new RegExp("[?&]" + parameterName + "=([^&#]*)");
  
  // Executa a regex para capturar o valor do parâmetro
  const result = regex.exec(location.search);
  
  // Se não encontrar o parâmetro, retorna uma string vazia, senão decodifica o valor
  return result === null ? '' : decodeURIComponent(result[1].replace(/\+/g, " "));
}

// Obtém o parâmetro 's' da URL
const id = getParameterByName('s');

// Verifica se o valor do parâmetro é '#', e exibe um alerta se for o caso
if (id === '#') {
  alert("Página Anterior");
}

// Define um objeto 'channels' (presumivelmente vai continuar o código aqui)
const channels = {
  'riodejaneirogloborio': {
    'url': "https://consoledtvfile.vercel.app/globorj-globorio/tracks-v1a1/mono.m3u8"
  },
  'riodejaneirointertvaltolitoral': {
    'url': "https://consoledtvfile.vercel.app/globorj-intertvaltolitoral/tracks-v1a1/mono.m3u8"
  },
  'riodejaneirointertvserramar': {
    'url': "https://consoledtvfile.vercel.app/globorj-intertvserramar/tracks-v1a1/mono.m3u8"
  },
  'riodejaneirotvriosul': {
    'url': "https://consoledtvfile.vercel.app/globorj-tvriosul/tracks-v1a1/mono.m3u8"
  },
  'saopauloglobosaopaulo': {
    'url': "https://consoledtvfile.vercel.app/globosp-globosaopaulo/tracks-v1a1/mono.m3u8"
  },
  'saopauloeptvcentral': {
    'url': "https://consoledtvfile.vercel.app/globosp-eptvcentral/tracks-v1a1/mono.m3u8"
  },
  'saopaulotvdiario': {
    'url': "https://consoledtvfile.vercel.app/globosp-tvdiario/tracks-v1a1/mono.m3u8"
  },
  'saopaulotvtemitapetininga': {
    'url': "https://consoledtvfile.vercel.app/globosp-tvtemitapetininga/tracks-v1a1/mono.m3u8"
  },
  'saopaulotvvanguardasjcampos': {
    'url': "https://consoledtvfile.vercel.app/globosp-tvvanguardasjcampos/tracks-v1a1/mono.m3u8"
  },
  'saopaulotvvanguardataubate': {
    'url': "https://consoledtvfile.vercel.app/globosp-tvvanguardataubate/tracks-v1a1/mono.m3u8"
  },
  'minasgeraisglobominas': {
    'url': "https://consoledtvfile.vercel.app/globomg-globominas/tracks-v1a1/mono.m3u8"
  },
  'minasgeraisintertvdosvales': {
    'url': "https://consoledtvfile.vercel.app/globomg-intertvdosvales/tracks-v1a1/mono.m3u8"
  },
  'minasgeraistvintegracaoaraxa': {
    'url': "https://consoledtvfile.vercel.app/globomg-tvintegracaoaraxa/tracks-v1a1/mono.m3u8"
  },
  'minasgeraistvintegracaojuizdefora': {
    'url': "https://consoledtvfile.vercel.app/globomg-tvintegracaojuizdefora/tracks-v1a1/mono.m3u8"
  },
  'minasgeraistvintegracaouberaba': {
    'url': "https://consoledtvfile.vercel.app/globomg-tvintegracaouberaba/tracks-v1a1/mono.m3u8"
  },
  'espiritosantotvgazetavitória': {
    'url': "https://consoledtvfile.vercel.app/globoes-tvgazetavitoria/tracks-v1a1/mono.m3u8"
  },
  'riograndedosulrbstvportoalegre': {
    'url': "https://consoledtvfile.vercel.app/globors-rbstvportoalegre/tracks-v1a1/mono.m3u8"
  },
  'riograndedosulrbstvcaxiasdosul': {
    'url': "https://consoledtvfile.vercel.app/globors-rbstvcaxiasdosul/tracks-v1a1/mono.m3u8"
  },
  'riograndedosulrbstvsantacruz': {
    'url': "https://consoledtvfile.vercel.app/globors-rbstvsantacruz/tracks-v1a1/mono.m3u8"
  },
  'santacatarinansctvflorianopolis': {
    'url': "https://consoledtvfile.vercel.app/globosc-nsctvflorianopolis/tracks-v1a1/mono.m3u8"
  },
  'santacatarinansctvchapecó': {
    'url': "https://consoledtvfile.vercel.app/globosc-nsctvchapeco/tracks-v1a1/mono.m3u8"
  },
  'santacatarinansctvjoinville': {
    'url': "https://consoledtvfile.vercel.app/globosc-nsctvjoinville/tracks-v1a1/mono.m3u8"
  },
  'paranarpccuritiba': {
    'url': "https://consoledtvfile.vercel.app/globopr-rpccuritiba/tracks-v1a1/mono.m3u8"
  },
  'pernambucoglobonordeste': {
    'url': "https://consoledtvfile.vercel.app/globope-globonordeste/tracks-v1a1/mono.m3u8"
  },
  'pernambucotvasabranca': {
    'url': "https://consoledtvfile.vercel.app/globope-tvasabranca/tracks-v1a1/mono.m3u8"
  },
  'bahiatvbahia': {
    'url': "https://consoledtvfile.vercel.app/globoba-tvbahia/tracks-v1a1/mono.m3u8"
  },
  'bahiatvsantacruz': {
    'url': "https://consoledtvfile.vercel.app/globoba-tvsantacruz/tracks-v1a1/mono.m3u8"
  },
  'bahiatvsudoeste': {
    'url': "https://consoledtvfile.vercel.app/globoba-tvsudoeste/tracks-v1a1/mono.m3u8"
  },
  'cearatvverdesmaresfortaleza': {
    'url': "https://consoledtvfile.vercel.app/globoce-tvverdesmaresfortaleza/tracks-v1a1/mono.m3u8"
  },
  'cearatvverdesmarescariri': {
    'url': "https://consoledtvfile.vercel.app/globoce-tvverdesmarescariri/tracks-v1a1/mono.m3u8"
  },
  'piauitvclube': {
    'url': "https://consoledtvfile.vercel.app/globopi-tvclube/tracks-v1a1/mono.m3u8"
  },
  'maranhaotvmirantesaoluis': {
    'url': "https://consoledtvfile.vercel.app/globoma-tvmirantessaoluis/tracks-v1a1/mono.m3u8"
  },
  'riograndedonorteintertvcabugi': {
    'url': "https://consoledtvfile.vercel.app/globorn-intertvcabugi/tracks-v1a1/mono.m3u8"
  },
  'paraibatvcabobranco': {
    'url': "https://consoledtvfile.vercel.app/globopb-tvcabobranco/tracks-v1a1/mono.m3u8"
  },
  'brasiliaglobobrasilia': {
    'url': "https://consoledtvfile.vercel.app/globodf-globobrasilia/tracks-v1a1/mono.m3u8"
  },
  'goiastvanhangueragoiânia': {
    'url': "https://consoledtvfile.vercel.app/globogo-tvanhangueragoiania/tracks-v1a1/mono.m3u8"
  },
  'amazonasredeamazonicamanaus': {
    'url': "https://consoledtvfile.vercel.app/globoam-redeamazonicamanaus/tracks-v1a1/mono.m3u8"
  },
  'paratvliberalbelem': {
    'url': "https://consoledtvfile.vercel.app/globopa-tvliberalbelem/tracks-v1a1/mono.m3u8"
  },
  'sbt': {
    'url': "https://consoledtvfile.vercel.app/sbt/tracks-v1a1/mono.m3u8"
  },
  'band': {
    'url': "https://consoledtvfile.vercel.app/band/tracks-v1a1/mono.m3u8"
  },
  'record': {
    'url': "https://consoledtvfile.vercel.app/record/tracks-v1a1/mono.m3u8"
  },
  'redetv': {
    'url': "https://consoledtvfile.vercel.app/redetv/tracks-v1a1/mono.m3u8"
  },
  'tvcultura': {
    'url': "https://consoledtvfile.vercel.app/tvcultura/tracks-v1a1/mono.m3u8"
  },
  'tvbrasil': {
    'url': "https://consoledtvfile.vercel.app/tvbrasil/tracks-v1a1/mono.m3u8"
  },
  'globonews': {
    'url': "https://consoledtvfile.vercel.app/globonews/tracks-v1a1/mono.m3u8"
  },
  'cnnbrasil': {
    'url': "https://consoledtvfile.vercel.app/cnnbrasil/tracks-v1a1/mono.m3u8"
  },
  'bandnews': {
    'url': "https://consoledtvfile.vercel.app/bandnews/tracks-v1a1/mono.m3u8"
  },
  'jpnews': {
    'url': "https://consoledtvfile.vercel.app/jpnews/tracks-v1a1/mono.m3u8"
  },
  'recordnews': {
    'url': "https://consoledtvfile.vercel.app/recordnews/tracks-v1a1/mono.m3u8"
  },
  'max': {
    'url': "https://consoledtvfile.vercel.app/max/tracks-v1a1/mono.m3u8"
  },
  'max2': {
    'url': "https://consoledtvfile.vercel.app/max2/tracks-v1a1/mono.m3u8"
  },
  'max3': {
    'url': "https://consoledtvfile.vercel.app/max3/tracks-v1a1/mono.m3u8"
  },
  'espn1': {
    'url': "https://consoledtvfile.vercel.app/espn/tracks-v1a1/mono.m3u8"
  },
  'espn2': {
    'url': "https://consoledtvfile.vercel.app/espn2/tracks-v1a1/mono.m3u8"
  },
  'espn3': {
    'url': "https://consoledtvfile.vercel.app/espn3/tracks-v1a1/mono.m3u8"
  },
  'espn4': {
    'url': "https://consoledtvfile.vercel.app/espn4/tracks-v1a1/mono.m3u8"
  },
  'espn5': {
    'url': "https://consoledtvfile.vercel.app/espn5/tracks-v1a1/mono.m3u8"
  },
  'espn6': {
    'url': "https://consoledtvfile.vercel.app/espn6/tracks-v1a1/mono.m3u8"
  },
  'sportv1': {
    'url': "https://consoledtvfile.vercel.app/sportv/tracks-v1a1/mono.m3u8"
  },
  'sportv2': {
    'url': "https://consoledtvfile.vercel.app/sportv2/tracks-v1a1/mono.m3u8"
  },
  'sportv3': {
    'url': "https://consoledtvfile.vercel.app/sportv3/tracks-v1a1/mono.m3u8"
  },
  'sportv4': {
    'url': "https://consoledtvfile.vercel.app/sportv4/tracks-v1a1/mono.m3u8"
  },
  'sportvmosaico': {
    'url': "https://consoledtvfile.vercel.app/sportvmosaico/tracks-v1a1/mono.m3u8"
  },
  'sportvalternativo': {
    'url': "https://consoledtvfile.vercel.app/sportvalternativo/tracks-v1a1/mono.m3u8"
  },
  'sportv2alternativo': {
    'url': "https://consoledtvfile.vercel.app/sportv2alternativo/tracks-v1a1/mono.m3u8"
  },
  'sportv3alternativo': {
    'url': "https://consoledtvfile.vercel.app/sportv3alternativo/tracks-v1a1/mono.m3u8"
  },
  'sportv4alternativo': {
    'url': "https://consoledtvfile.vercel.app/sportv4alternativo/tracks-v1a1/mono.m3u8"
  },
  'sportvmosaicoalternativo': {
    'url': "https://consoledtvfile.vercel.app/sportvmosaicoalternativo/tracks-v1a1/mono.m3u8"
  },
  'premiereclubes': {
    'url': "https://consoledtvfile.vercel.app/premiereclubes/tracks-v1a1/mono.m3u8"
  },
  'premiere2': {
    'url': "https://consoledtvfile.vercel.app/premiere2/tracks-v1a1/mono.m3u8"
  },
  'premiere3': {
    'url': "https://consoledtvfile.vercel.app/premiere3/tracks-v1a1/mono.m3u8"
  },
  'premiere4': {
    'url': "https://consoledtvfile.vercel.app/premiere4/tracks-v1a1/mono.m3u8"
  },
  'premiere5': {
    'url': "https://consoledtvfile.vercel.app/premiere5/tracks-v1a1/mono.m3u8"
  },
  'premiere6': {
    'url': "https://consoledtvfile.vercel.app/premiere6/tracks-v1a1/mono.m3u8"
  },
  'premiere7': {
    'url': "https://consoledtvfile.vercel.app/premiere7/tracks-v1a1/mono.m3u8"
  },
  'premiere8': {
    'url': "https://consoledtvfile.vercel.app/premiere8/tracks-v1a1/mono.m3u8"
  },
  'premiereclubesalternativo': {
    'url': "https://consoledtvfile.vercel.app/premiereclubesalternativo/tracks-v1a1/mono.m3u8"
  },
  'premiere2alternativo': {
    'url': "https://consoledtvfile.vercel.app/premiere2alternativo/tracks-v1a1/mono.m3u8"
  },
  'premiere3alternativo': {
    'url': "https://consoledtvfile.vercel.app/premiere3alternativo/tracks-v1a1/mono.m3u8"
  },
  'premiere4alternativo': {
    'url': "https://consoledtvfile.vercel.app/premiere4alternativo/tracks-v1a1/mono.m3u8"
  },
  'premiere5alternativo': {
    'url': "https://consoledtvfile.vercel.app/premiere5alternativo/tracks-v1a1/mono.m3u8"
  },
  'premiere6alternativo': {
    'url': "https://consoledtvfile.vercel.app/premiere6alternativo/tracks-v1a1/mono.m3u8"
  },
  'premiere7alternativo': {
    'url': "https://consoledtvfile.vercel.app/premiere7alternativo/tracks-v1a1/mono.m3u8"
  },
  'premiere8alternativo': {
    'url': "https://consoledtvfile.vercel.app/premiere8alternativo/tracks-v1a1/mono.m3u8"
  },
  'paramount+': {
    'url': "https://consoledtvfile.vercel.app/paramountplus/tracks-v1a1/mono.m3u8"
  },
  'paramount+2': {
    'url': "https://consoledtvfile.vercel.app/paramountplus2/tracks-v1a1/mono.m3u8"
  },
  'paramount+3': {
    'url': "https://consoledtvfile.vercel.app/paramountplus3/tracks-v1a1/mono.m3u8"
  },
  'paramount+4': {
    'url': "https://consoledtvfile.vercel.app/paramountplus4/tracks-v1a1/mono.m3u8"
  },
  'paramount+alternativo': {
    'url': "https://consoledtvfile.vercel.app/paramountplusalternativo/tracks-v1a1/mono.m3u8"
  },
  'paramount+2alternativo': {
    'url': "https://consoledtvfile.vercel.app/paramountplus2alternativo/tracks-v1a1/mono.m3u8"
  },
  'paramount+3alternativo': {
    'url': "https://consoledtvfile.vercel.app/paramountplus3alternativo/tracks-v1a1/mono.m3u8"
  },
  'paramount+4alternativo': {
    'url': "https://consoledtvfile.vercel.app/paramountplus4alternativo/tracks-v1a1/mono.m3u8"
  },
  'combate': {
    'url': "https://consoledtvfile.vercel.app/combate/tracks-v1a1/mono.m3u8"
  },
  'ufcfightpass': {
    'url': "https://consoledtvfile.vercel.app/ufcfightpass/tracks-v1a1/mono.m3u8"
  },
  'foxsports2': {
    'url': "https://consoledtvfile.vercel.app/foxsports2/tracks-v1a1/mono.m3u8"
  },
  'bandsports': {
    'url': "https://consoledtvfile.vercel.app/bandsports/tracks-v1a1/mono.m3u8"
  },
  'nossofutebol': {
    'url': "https://consoledtvfile.vercel.app/nossofutebol/tracks-v1a1/mono.m3u8"
  },
  'tntsports': {
    'url': "https://consoledtvfile.vercel.app/tntsports/tracks-v1a1/mono.m3u8"
  },
  'telecinepremium': {
    'url': "https://consoledtvfile.vercel.app/telecinepremium/tracks-v1a1/mono.m3u8"
  },
  'telecinepipoca': {
    'url': "https://consoledtvfile.vercel.app/telecinepipoca/tracks-v1a1/mono.m3u8"
  },
  'telecineaction': {
    'url': "https://consoledtvfile.vercel.app/telecineaction/tracks-v1a1/mono.m3u8"
  },
  'telecinetouch': {
    'url': "https://consoledtvfile.vercel.app/telecinetouch/tracks-v1a1/mono.m3u8"
  },
  'telecinefun': {
    'url': "https://consoledtvfile.vercel.app/telecinefun/tracks-v1a1/mono.m3u8"
  },
  'telecinecult': {
    'url': "https://consoledtvfile.vercel.app/telecinecult/tracks-v1a1/mono.m3u8"
  },
  'hbo': {
    'url': "https://consoledtvfile.vercel.app/hbo/tracks-v1a1/mono.m3u8"
  },
  'hbo2': {
    'url': "https://consoledtvfile.vercel.app/hbo2/tracks-v1a1/mono.m3u8"
  },
  'hboplus': {
    'url': "https://consoledtvfile.vercel.app/hboplus/tracks-v1a1/mono.m3u8"
  },
  'hbofamily': {
    'url': "https://consoledtvfile.vercel.app/hbofamily/tracks-v1a1/mono.m3u8"
  },
  'hbosignature': {
    'url': "https://consoledtvfile.vercel.app/hbosignature/tracks-v1a1/mono.m3u8"
  },
  'hboxtreme': {
    'url': "https://consoledtvfile.vercel.app/hboxtreme/tracks-v1a1/mono.m3u8"
  },
  'discoverychannel': {
    'url': "https://consoledtvfile.vercel.app/discoverychannel/tracks-v1a1/mono.m3u8"
  },
  'discoveryworld': {
    'url': "https://consoledtvfile.vercel.app/discoveryworld/tracks-v1a1/mono.m3u8"
  },
  'discoveryturbo': {
    'url': "https://consoledtvfile.vercel.app/discoveryturbo/tracks-v1a1/mono.m3u8"
  },
  'discoveryid': {
    'url': "https://consoledtvfile.vercel.app/discoveryid/tracks-v1a1/mono.m3u8"
  },
  'discoverykids': {
    'url': "https://consoledtvfile.vercel.app/discoverykids/tracks-v1a1/mono.m3u8"
  },
  'discoveryh&h': {
    'url': "https://consoledtvfile.vercel.app/discoveryheh/tracks-v1a1/mono.m3u8"
  },
  'discoverytheater': {
    'url': "https://consoledtvfile.vercel.app/discoverytheater/tracks-v1a1/mono.m3u8"
  },
  'discoveryscience': {
    'url': "https://consoledtvfile.vercel.app/discoveryscience/tracks-v1a1/mono.m3u8"
  },
  'comedycentral': {
    'url': "https://consoledtvfile.vercel.app/comedycentral/tracks-v1a1/mono.m3u8"
  },
  'mtv': {
    'url': "https://consoledtvfile.vercel.app/mtv/tracks-v1a1/mono.m3u8"
  },
  'mtvlive': {
    'url': "https://consoledtvfile.vercel.app/mtvlive/tracks-v1a1/mono.m3u8"
  },
  'nickjr': {
    'url': "https://consoledtvfile.vercel.app/nickjr/tracks-v1a1/mono.m3u8"
  },
  'lifetime': {
    'url': "https://consoledtvfile.vercel.app/lifetime/tracks-v1a1/mono.m3u8"
  },
  'agro': {
    'url': "https://consoledtvfile.vercel.app/agromais/tracks-v1a1/mono.m3u8"
  },
  'arte1': {
    'url': "https://consoledtvfile.vercel.app/arte1/tracks-v1a1/mono.m3u8"
  },
  'terraviva': {
    'url': "https://consoledtvfile.vercel.app/terraviva/tracks-v1a1/mono.m3u8"
  },
  'amc': {
    'url': "https://consoledtvfile.vercel.app/amc/tracks-v1a1/mono.m3u8"
  },
  'axn': {
    'url': "https://consoledtvfile.vercel.app/axn/tracks-v1a1/mono.m3u8"
  },
  'bis': {
    'url': "https://consoledtvfile.vercel.app/bis/tracks-v1a1/mono.m3u8"
  },
  'canalbrasil': {
    'url': "https://consoledtvfile.vercel.app/canalbrasil/tracks-v1a1/mono.m3u8"
  },
  'e': {
    'url': "https://consoledtvfile.vercel.app/e/tracks-v1a1/mono.m3u8"
  },
  'fx': {
    'url': "https://consoledtvfile.vercel.app/fx/tracks-v1a1/mono.m3u8"
  },
  'gloob': {
    'url': "https://consoledtvfile.vercel.app/gloob/tracks-v1a1/mono.m3u8"
  },
  'gloobinho': {
    'url': "https://consoledtvfile.vercel.app/gloobinho/tracks-v1a1/mono.m3u8"
  },
  'gnt': {
    'url': "https://consoledtvfile.vercel.app/gnt/tracks-v1a1/mono.m3u8"
  },
  'history': {
    'url': "https://consoledtvfile.vercel.app/history/tracks-v1a1/mono.m3u8"
  },
  'history2': {
    'url': "https://consoledtvfile.vercel.app/history2/tracks-v1a1/mono.m3u8"
  },
  'megapix': {
    'url': "https://consoledtvfile.vercel.app/megapix/tracks-v1a1/mono.m3u8"
  },
  'modoviagem': {
    'url': "https://consoledtvfile.vercel.app/modoviagem/tracks-v1a1/mono.m3u8"
  },
  'multishow': {
    'url': "https://consoledtvfile.vercel.app/multishow/tracks-v1a1/mono.m3u8"
  },
  'canaloff': {
    'url': "https://consoledtvfile.vercel.app/canaloff/tracks-v1a1/mono.m3u8"
  },
  'studiouniversal': {
    'url': "https://consoledtvfile.vercel.app/studiouniversal/tracks-v1a1/mono.m3u8"
  },
  'syfy': {
    'url': "https://consoledtvfile.vercel.app/syfy/tracks-v1a1/mono.m3u8"
  },
  'universaltv': {
    'url': "https://consoledtvfile.vercel.app/universaltv/tracks-v1a1/mono.m3u8"
  },
  'cinemax': {
    'url': "https://consoledtvfile.vercel.app/cinemax/tracks-v1a1/mono.m3u8"
  },
  'cinecanal': {
    'url': "https://consoledtvfile.vercel.app/cinecanal/tracks-v1a1/mono.m3u8"
  },
  'paramountnetwork': {
    'url': "https://consoledtvfile.vercel.app/paramountnetwork/tracks-v1a1/mono.m3u8"
  },
  'animalplanet': {
    'url': "https://consoledtvfile.vercel.app/animalplanet/tracks-v1a1/mono.m3u8"
  },
  'cartoonnetwork': {
    'url': "https://consoledtvfile.vercel.app/cartoonnetwork/tracks-v1a1/mono.m3u8"
  },
  'disneychannel': {
    'url': "https://consoledtvfile.vercel.app/disneychannel/tracks-v1a1/mono.m3u8"
  },
  'nationalgeographic': {
    'url': "https://consoledtvfile.vercel.app/nationalgeographic/tracks-v1a1/mono.m3u8"
  },
  'nickelodeon': {
    'url': "https://consoledtvfile.vercel.app/nickelodeon/tracks-v1a1/mono.m3u8"
  },
  'sonychannel': {
    'url': "https://consoledtvfile.vercel.app/sonychannel/tracks-v1a1/mono.m3u8"
  },
  'sonymovies': {
    'url': "https://consoledtvfile.vercel.app/sonymovies/tracks-v1a1/mono.m3u8"
  },
  'space': {
    'url': "https://consoledtvfile.vercel.app/space/tracks-v1a1/mono.m3u8"
  },
  'starchannel': {
    'url': "https://consoledtvfile.vercel.app/starchannel/tracks-v1a1/mono.m3u8"
  },
  'foodnetwork': {
    'url': "https://consoledtvfile.vercel.app/foodnetwork/tracks-v1a1/mono.m3u8"
  },
  'warnertv': {
    'url': "https://consoledtvfile.vercel.app/warnertv/tracks-v1a1/mono.m3u8"
  },
  'trutv': {
    'url': "https://consoledtvfile.vercel.app/trutv/tracks-v1a1/mono.m3u8"
  },
  'tlc': {
    'url': "https://consoledtvfile.vercel.app/tlc/tracks-v1a1/mono.m3u8"
  },
  'viva': {
    'url': "https://consoledtvfile.vercel.app/viva/tracks-v1a1/mono.m3u8"
  },
  'aee': {
    'url': "https://consoledtvfile.vercel.app/aee/tracks-v1a1/mono.m3u8"
  },
  'tnt': {
    'url': "https://consoledtvfile.vercel.app/tnt/tracks-v1a1/mono.m3u8"
  },
  'eleven1portugal': {
    'url': "https://consoledtvfile.vercel.app/elevensports_pt/tracks-v1a1/mono.m3u8"
  },
  'eleven2portugal': {
    'url': "https://consoledtvfile.vercel.app/elevensports2_pt/tracks-v1a1/mono.m3u8"
  },
  'eleven3portugal': {
    'url': "https://consoledtvfile.vercel.app/elevensports3_pt/tracks-v1a1/mono.m3u8"
  },
  'eleven4portugal': {
    'url': "https://consoledtvfile.vercel.app/elevensports4_pt/tracks-v1a1/mono.m3u8"
  },
  'eleven5portugal': {
    'url': "https://consoledtvfile.vercel.app/elevensports5_pt/tracks-v1a1/mono.m3u8"
  },
  'eleven6portugal': {
    'url': "https://consoledtvfile.vercel.app/elevensports6_pt/tracks-v1a1/mono.m3u8"
  },
  'empreender': {
    'url': "https://consoledtvfile.vercel.app/empreender/tracks-v1a1/mono.m3u8"
  },
  'saborearte': {
    'url': "https://consoledtvfile.vercel.app/saborearte/tracks-v1a1/mono.m3u8"
  },
  'aparecida': {
    'url': "https://consoledtvfile.vercel.app/aparecida/tracks-v1a1/mono.m3u8"
  },
  'ratimbum': {
    'url': "https://consoledtvfile.vercel.app/ratimbum/tracks-v1a1/mono.m3u8"
  },
  'tntnovelas': {
    'url': "https://consoledtvfile.vercel.app/tntnovelas/tracks-v1a1/mono.m3u8"
  },
  'fishtv': {
    'url': "https://consoledtvfile.vercel.app/fishtv/tracks-v1a1/mono.m3u8"
  },
  'cartoonito': {
    'url': "https://consoledtvfile.vercel.app/cartoonito/tracks-v1a1/mono.m3u8"
  },
  'fashiontv': {
    'url': "https://consoledtvfile.vercel.app/fashiontv/tracks-v1a1/mono.m3u8"
  },
  'curta': {
    'url': "https://consoledtvfile.vercel.app/curta/tracks-v1a1/mono.m3u8"
  },
  'hgtv': {
    'url': "https://consoledtvfile.vercel.app/hgtv/tracks-v1a1/mono.m3u8"
  },
  'woohoo': {
    'url': "https://consoledtvfile.vercel.app/woohoo/tracks-v1a1/mono.m3u8"
  },
  'zoomoo': {
    'url': "https://consoledtvfile.vercel.app/zoomoo/tracks-v1a1/mono.m3u8"
  },
  'musicboxbrazil': {
    'url': "https://consoledtvfile.vercel.app/musicboxbrasil/tracks-v1a1/mono.m3u8"
  },
  'mtv00s': {
    'url': "https://consoledtvfile.vercel.app/mtvs_00/tracks-v1a1/mono.m3u8"
  },
  'filmeartsbrazil': {
    'url': "https://consoledtvfile.vercel.app/filmearts/tracks-v1a1/mono.m3u8"
  },
  'primeboxbrazil': {
    'url': "https://consoledtvfile.vercel.app/primeboxbrazil/tracks-v1a1/mono.m3u8"
  },
  'cnninternational': {
    'url': "https://consoledtvfile.vercel.app/cnninternational/tracks-v1a1/mono.m3u8"
  },
  'tvgazeta': {
    'url': "https://consoledtvfile.vercel.app/gazeta/tracks-v1a1/mono.m3u8"
  },
  'redegospel': {
    'url': "https://consoledtvfile.vercel.app/redegospel/tracks-v1a1/mono.m3u8"
  },
  'tvsenado': {
    'url': "https://consoledtvfile.vercel.app/tvsenado/tracks-v1a1/mono.m3u8"
  },
  'tvcamara': {
    'url': "https://consoledtvfile.vercel.app/tvcamara/tracks-v1a1/mono.m3u8"
  },
  'brasilparalelo': {
    'url': "https://consoledtvfile.vercel.app/brasilparalelo/tracks-v1a1/mono.m3u8"
  },
  'futura': {
    'url': "https://consoledtvfile.vercel.app/futura/tracks-v1a1/mono.m3u8"
  },
  'canaldoboi': {
    'url': "https://consoledtvfile.vercel.app/canaldoboi/tracks-v1a1/mono.m3u8"
  },
  'agrobrasiltv': {
    'url': "https://consoledtvfile.vercel.app/agrobrasil/tracks-v1a1/mono.m3u8"
  },
  'canalrural': {
    'url': "https://consoledtvfile.vercel.app/novotempo/tracks-v1a1/mono.m3u8"
  },
  'redevida': {
    'url': "https://consoledtvfile.vercel.app/redevida/tracks-v1a1/mono.m3u8"
  },
  'tvpaieterno': {
    'url': "https://consoledtvfile.vercel.app/tvpaieterno/tracks-v1a1/mono.m3u8"
  },
  'tvevangelizar': {
    'url': "https://consoledtvfile.vercel.app/tvevangelizar/tracks-v1a1/mono.m3u8"
  },
  'tvcancaonova': {
    'url': "https://consoledtvfile.vercel.app/cancaonova/tracks-v1a1/mono.m3u8"
  },
  'usa': {
    'url': "https://consoledtvfile.vercel.app/usa/tracks-v1a1/mono.m3u8"
  },
  'adultswim': {
    'url': "https://consoledtvfile.vercel.app/adultswim/tracks-v1a1/mono.m3u8"
  },
  'tcm': {
    'url': "https://consoledtvfile.vercel.app/tcm/tracks-v1a1/mono.m3u8"
  },
  'playboytv': {
    'url': "https://consoledtvfile.vercel.app/playboy/tracks-v1a1/mono.m3u8"
  },
  'sexprive': {
    'url': "https://consoledtvfile.vercel.app/sexprive/tracks-v1a1/mono.m3u8"
  },
  'sextreme': {
    'url': "https://consoledtvfile.vercel.app/sextreme/tracks-v1a1/mono.m3u8"
  },
  'sexyhot': {
    'url': "https://consoledtvfile.vercel.app/sexyhot/tracks-v1a1/mono.m3u8"
  },
  'venus': {
    'url': "https://consoledtvfile.vercel.app/venus/tracks-v1a1/mono.m3u8"
  },
  'sporttvpt': {
    'url': "https://consoledtvfile.vercel.app/sporttvpt/tracks-v1a1/mono.m3u8"
  },
  'sporttvpt2': {
    'url': "https://consoledtvfile.vercel.app/sporttvpt2/tracks-v1a1/mono.m3u8"
  },
  'sporttvpt3': {
    'url': "https://consoledtvfile.vercel.app/sporttvpt3/tracks-v1a1/mono.m3u8"
  },
  'sporttvpt4': {
    'url': "https://consoledtvfile.vercel.app/sporttvpt4/tracks-v1a1/mono.m3u8"
  },
  'sporttvpt5': {
    'url': "https://consoledtvfile.vercel.app/sporttvpt5/tracks-v1a1/mono.m3u8"
  },
  'sporttvpt6': {
    'url': "https://consoledtvfile.vercel.app/sporttvpt6/tracks-v1a1/mono.m3u8"
  },
  'primevideo': {
    'url': "https://consoledtvfile.vercel.app/primevideo/tracks-v1a1/mono.m3u8"
  },
  'primevideo2': {
    'url': "https://consoledtvfile.vercel.app/primevideo2/tracks-v1a1/mono.m3u8"
  },
  'primevideo3': {
    'url': "https://consoledtvfile.vercel.app/primevideo3/tracks-v1a1/mono.m3u8"
  },
  'primevideo4': {
    'url': "https://consoledtvfile.vercel.app/primevideo4/tracks-v1a1/mono.m3u8"
  },
  'cazetv': {
    'url': "https://consoledtvfile.vercel.app/cazetv/tracks-v1a1/mono.m3u8"
  },
  'cazetv2': {
    'url': "https://consoledtvfile.vercel.app/cazetv2/tracks-v1a1/mono.m3u8"
  },
  'cazetv3': {
    'url': "https://consoledtvfile.vercel.app/cazetv3/tracks-v1a1/mono.m3u8"
  }
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
