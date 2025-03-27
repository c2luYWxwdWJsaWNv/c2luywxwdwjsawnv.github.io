function getParameterByName(param) {
  param = param.replace(/[\[]/, '[').replace(/[\]]/, ']');
  const regex = new RegExp("[?&]" + param + "=([^&#]*)");
  const result = regex.exec(location.search);
  return result === null ? '' : decodeURIComponent(result[1].replace(/\+/g, " "));
}

const id = getParameterByName('s');

if (id === '#') {
  alert("Página Anterior");
}

const channels = {
  "riodejaneirogloborio": {
    "url": "https://consoledbtv.vercel.app/globorj-globorio/tracks-v1a1/mono.m3u8"
  },
  "riodejaneirointertvaltolitoral": {
    "url": "https://consoledbtv.vercel.app/globorj-intertvaltolitoral/tracks-v1a1/mono.m3u8"
  },
  "riodejaneirointertvserramar": {
    "url": "https://consoledbtv.vercel.app/globorj-intertvserramar/tracks-v1a1/mono.m3u8"
  },
  "riodejaneirotvriosul": {
    "url": "https://consoledbtv.vercel.app/globorj-tvriosul/tracks-v1a1/mono.m3u8"
  },
  "saopauloglobosaopaulo": {
    "url": "https://consoledbtv.vercel.app/globosp-globosaopaulo/tracks-v1a1/mono.m3u8"
  },
  "saopauloeptvcentral": {
    "url": "https://consoledbtv.vercel.app/globosp-eptvcentral/tracks-v1a1/mono.m3u8"
  },
  "saopaulotvdiario": {
    "url": "https://consoledbtv.vercel.app/globosp-tvdiario/tracks-v1a1/mono.m3u8"
  },
  "saopaulotvtemitapetininga": {
    "url": "https://consoledbtv.vercel.app/globosp-tvtemitapetininga/tracks-v1a1/mono.m3u8"
  },
  "saopaulotvvanguardasjcampos": {
    "url": "https://consoledbtv.vercel.app/globosp-tvvanguardasjcampos/tracks-v1a1/mono.m3u8"
  },
  "saopaulotvvanguardataubate": {
    "url": "https://consoledbtv.vercel.app/globosp-tvvanguardataubate/tracks-v1a1/mono.m3u8"
  },
  "minasgeraisglobominas": {
    "url": "https://consoledbtv.vercel.app/globomg-globominas/tracks-v1a1/mono.m3u8"
  },
  "minasgeraisintertvdosvales": {
    "url": "https://consoledbtv.vercel.app/globomg-intertvdosvales/tracks-v1a1/mono.m3u8"
  },
  "minasgeraistvintegracaoaraxa": {
    "url": "https://consoledbtv.vercel.app/globomg-tvintegracaoaraxa/tracks-v1a1/mono.m3u8"
  },
  "minasgeraistvintegracaojuizdefora": {
    "url": "https://consoledbtv.vercel.app/globomg-tvintegracaojuizdefora/tracks-v1a1/mono.m3u8"
  },
  "minasgeraistvintegracaouberaba": {
    "url": "https://consoledbtv.vercel.app/globomg-tvintegracaouberaba/tracks-v1a1/mono.m3u8"
  },
  "espiritosantotvgazetavitória": {
    "url": "https://consoledbtv.vercel.app/globoes-tvgazetavitoria/tracks-v1a1/mono.m3u8"
  },
  "riograndedosulrbstvportoalegre": {
    "url": "https://consoledbtv.vercel.app/globors-rbstvportoalegre/tracks-v1a1/mono.m3u8"
  },
  "riograndedosulrbstvcaxiasdosul": {
    "url": "https://consoledbtv.vercel.app/globors-rbstvcaxiasdosul/tracks-v1a1/mono.m3u8"
  },
  "riograndedosulrbstvsantacruz": {
    "url": "https://consoledbtv.vercel.app/globors-rbstvsantacruz/tracks-v1a1/mono.m3u8"
  },
  "santacatarinansctvflorianopolis": {
    "url": "https://consoledbtv.vercel.app/globosc-nsctvflorianopolis/tracks-v1a1/mono.m3u8"
  },
  "santacatarinansctvchapecó": {
    "url": "https://consoledbtv.vercel.app/globosc-nsctvchapeco/tracks-v1a1/mono.m3u8"
  },
  "santacatarinansctvjoinville": {
    "url": "https://consoledbtv.vercel.app/globosc-nsctvjoinville/tracks-v1a1/mono.m3u8"
  },
  "paranarpccuritiba": {
    "url": "https://consoledbtv.vercel.app/globopr-rpccuritiba/tracks-v1a1/mono.m3u8"
  },
  "pernambucoglobonordeste": {
    "url": "https://consoledbtv.vercel.app/globope-globonordeste/tracks-v1a1/mono.m3u8"
  },
  "pernambucotvasabranca": {
    "url": "https://consoledbtv.vercel.app/globope-tvasabranca/tracks-v1a1/mono.m3u8"
  },
  "bahiatvbahia": {
    "url": "https://consoledbtv.vercel.app/globoba-tvbahia/tracks-v1a1/mono.m3u8"
  },
  "bahiatvsantacruz": {
    "url": "https://consoledbtv.vercel.app/globoba-tvsantacruz/tracks-v1a1/mono.m3u8"
  },
  "bahiatvsudoeste": {
    "url": "https://consoledbtv.vercel.app/globoba-tvsudoeste/tracks-v1a1/mono.m3u8"
  },
  "cearatvverdesmaresfortaleza": {
    "url": "https://consoledbtv.vercel.app/globoce-tvverdesmaresfortaleza/tracks-v1a1/mono.m3u8"
  },
  "cearatvverdesmarescariri": {
    "url": "https://consoledbtv.vercel.app/globoce-tvverdesmarescariri/tracks-v1a1/mono.m3u8"
  },
  "piauitvclube": {
    "url": "https://consoledbtv.vercel.app/globopi-tvclube/tracks-v1a1/mono.m3u8"
  },
  "maranhaotvmirantesaoluis": {
    "url": "https://consoledbtv.vercel.app/globoma-tvmirantessaoluis/tracks-v1a1/mono.m3u8"
  },
  "riograndedonorteintertvcabugi": {
    "url": "https://consoledbtv.vercel.app/globorn-intertvcabugi/tracks-v1a1/mono.m3u8"
  },
  "paraibatvcabobranco": {
    "url": "https://consoledbtv.vercel.app/globopb-tvcabobranco/tracks-v1a1/mono.m3u8"
  },
  "brasiliaglobobrasilia": {
    "url": "https://consoledbtv.vercel.app/globodf-globobrasilia/tracks-v1a1/mono.m3u8"
  },
  "goiastvanhangueragoiânia": {
    "url": "https://consoledbtv.vercel.app/globogo-tvanhangueragoiania/tracks-v1a1/mono.m3u8"
  },
  "amazonasredeamazonicamanaus": {
    "url": "https://consoledbtv.vercel.app/globoam-redeamazonicamanaus/tracks-v1a1/mono.m3u8"
  },
  "paratvliberalbelem": {
    "url": "https://consoledbtv.vercel.app/globopa-tvliberalbelem/tracks-v1a1/mono.m3u8"
  },
  "sbt": {
    "url": "https://consoledbtv.vercel.app/sbt/tracks-v1a1/mono.m3u8"
  },
  "band": {
    "url": "https://consoledbtv.vercel.app/band/tracks-v1a1/mono.m3u8"
  },
  "recordsp": {
    "url": "https://consoledbtv.vercel.app/recordsp/tracks-v1a1/mono.m3u8"
  },
  "redetv": {
    "url": "https://consoledbtv.vercel.app/redetv/tracks-v1a1/mono.m3u8"
  },
  "tvcultura": {
    "url": "https://consoledbtv.vercel.app/tvcultura/tracks-v1a1/mono.m3u8"
  },
  "tvbrasil": {
    "url": "https://consoledbtv.vercel.app/tvbrasil/tracks-v1a1/mono.m3u8"
  },
  "globonews": {
    "url": "https://consoledbtv.vercel.app/globonews/tracks-v1a1/mono.m3u8"
  },
  "cnnbrasil": {
    "url": "https://consoledbtv.vercel.app/cnnbrasil/tracks-v1a1/mono.m3u8"
  },
  "bandnews": {
    "url": "https://consoledbtv.vercel.app/bandnews/tracks-v1a1/mono.m3u8"
  },
  "jpnews": {
    "url": "https://consoledbtv.vercel.app/jpnews/tracks-v1a1/mono.m3u8"
  },
  "recordnews": {
    "url": "https://consoledbtv.vercel.app/recordnews/tracks-v1a1/mono.m3u8"
  },
  "max": {
    "url": "https://consoledbtv.vercel.app/max/tracks-v1a1/mono.m3u8"
  },
  "max2": {
    "url": "https://consoledbtv.vercel.app/max2/tracks-v1a1/mono.m3u8"
  },
  "max3": {
    "url": "https://consoledbtv.vercel.app/max3/tracks-v1a1/mono.m3u8"
  },
  "espn": {
    "url": "https://consoledbtv.vercel.app/espn/tracks-v1a1/mono.m3u8"
  },
  "espn2": {
    "url": "https://consoledbtv.vercel.app/espn2/tracks-v1a1/mono.m3u8"
  },
  "espn3": {
    "url": "https://consoledbtv.vercel.app/espn3/tracks-v1a1/mono.m3u8"
  },
  "espn4": {
    "url": "https://consoledbtv.vercel.app/espn4/tracks-v1a1/mono.m3u8"
  },
  "espn5": {
    "url": "https://consoledbtv.vercel.app/espn5/tracks-v1a1/mono.m3u8"
  },
  "espn6": {
    "url": "https://consoledbtv.vercel.app/espn6/tracks-v1a1/mono.m3u8"
  },
  "sportv": {
    "url": "https://consoledbtv.vercel.app/sportv/tracks-v1a1/mono.m3u8"
  },
  "sportv2": {
    "url": "https://consoledbtv.vercel.app/sportv2/tracks-v1a1/mono.m3u8"
  },
  "sportv3": {
    "url": "https://consoledbtv.vercel.app/sportv3/tracks-v1a1/mono.m3u8"
  },
  "sportv4": {
    "url": "https://consoledbtv.vercel.app/sportv4/tracks-v1a1/mono.m3u8"
  },
  "sportvmosaico": {
    "url": "https://consoledbtv.vercel.app/sportvmosaico/tracks-v1a1/mono.m3u8"
  },
  "sportvalternativo": {
    "url": "https://consoledbtv.vercel.app/sportvalternativo/tracks-v1a1/mono.m3u8"
  },
  "sportv2alternativo": {
    "url": "https://consoledbtv.vercel.app/sportv2alternativo/tracks-v1a1/mono.m3u8"
  },
  "sportv3alternativo": {
    "url": "https://consoledbtv.vercel.app/sportv3alternativo/tracks-v1a1/mono.m3u8"
  },
  "sportv4alternativo": {
    "url": "https://consoledbtv.vercel.app/sportv4alternativo/tracks-v1a1/mono.m3u8"
  },
  "sportvmosaicoalternativo": {
    "url": "https://consoledbtv.vercel.app/sportvmosaicoalternativo/tracks-v1a1/mono.m3u8"
  },
  "premiereclubes": {
    "url": "https://consoledbtv.vercel.app/premiereclubes/tracks-v1a1/mono.m3u8"
  },
  "premiere2": {
    "url": "https://consoledbtv.vercel.app/premiere2/tracks-v1a1/mono.m3u8"
  },
  "premiere3": {
    "url": "https://consoledbtv.vercel.app/premiere3/tracks-v1a1/mono.m3u8"
  },
  "premiere4": {
    "url": "https://consoledbtv.vercel.app/premiere4/tracks-v1a1/mono.m3u8"
  },
  "premiere5": {
    "url": "https://consoledbtv.vercel.app/premiere5/tracks-v1a1/mono.m3u8"
  },
  "premiere6": {
    "url": "https://consoledbtv.vercel.app/premiere6/tracks-v1a1/mono.m3u8"
  },
  "premiere7": {
    "url": "https://consoledbtv.vercel.app/premiere7/tracks-v1a1/mono.m3u8"
  },
  "premiere8": {
    "url": "https://consoledbtv.vercel.app/premiere8/tracks-v1a1/mono.m3u8"
  },
  "premiereclubesalternativo": {
    "url": "https://consoledbtv.vercel.app/premiereclubesalternativo/tracks-v1a1/mono.m3u8"
  },
  "premiere2alternativo": {
    "url": "https://consoledbtv.vercel.app/premiere2alternativo/tracks-v1a1/mono.m3u8"
  },
  "premiere3alternativo": {
    "url": "https://consoledbtv.vercel.app/premiere3alternativo/tracks-v1a1/mono.m3u8"
  },
  "premiere4alternativo": {
    "url": "https://consoledbtv.vercel.app/premiere4alternativo/tracks-v1a1/mono.m3u8"
  },
  "premiere5alternativo": {
    "url": "https://consoledbtv.vercel.app/premiere5alternativo/tracks-v1a1/mono.m3u8"
  },
  "premiere6alternativo": {
    "url": "https://consoledbtv.vercel.app/premiere6alternativo/tracks-v1a1/mono.m3u8"
  },
  "premiere7alternativo": {
    "url": "https://consoledbtv.vercel.app/premiere7alternativo/tracks-v1a1/mono.m3u8"
  },
  "premiere8alternativo": {
    "url": "https://consoledbtv.vercel.app/premiere8alternativo/tracks-v1a1/mono.m3u8"
  },
  "paramount+": {
    "url": "https://consoledbtv.vercel.app/paramountplus/tracks-v1a1/mono.m3u8"
  },
  "paramount+2": {
    "url": "https://consoledbtv.vercel.app/paramountplus2/tracks-v1a1/mono.m3u8"
  },
  "paramount+3": {
    "url": "https://consoledbtv.vercel.app/paramountplus3/tracks-v1a1/mono.m3u8"
  },
  "paramount+4": {
    "url": "https://consoledbtv.vercel.app/paramountplus4/tracks-v1a1/mono.m3u8"
  },
  "paramount+alternativo": {
    "url": "https://consoledbtv.vercel.app/paramountplusalternativo/tracks-v1a1/mono.m3u8"
  },
  "paramount+2alternativo": {
    "url": "https://consoledbtv.vercel.app/paramountplus2alternativo/tracks-v1a1/mono.m3u8"
  },
  "paramount+3alternativo": {
    "url": "https://consoledbtv.vercel.app/paramountplus3alternativo/tracks-v1a1/mono.m3u8"
  },
  "paramount+4alternativo": {
    "url": "https://consoledbtv.vercel.app/paramountplus4alternativo/tracks-v1a1/mono.m3u8"
  },
  "combate": {
    "url": "https://consoledbtv.vercel.app/combate/tracks-v1a1/mono.m3u8"
  },
  "ufcfightpass": {
    "url": "https://consoledbtv.vercel.app/ufcfightpass/tracks-v1a1/mono.m3u8"
  },
  "foxsports2": {
    "url": "https://consoledbtv.vercel.app/foxsports2/tracks-v1a1/mono.m3u8"
  },
  "bandsports": {
    "url": "https://consoledbtv.vercel.app/bandsports/tracks-v1a1/mono.m3u8"
  },
  "nossofutebol": {
    "url": "https://consoledbtv.vercel.app/nossofutebol/tracks-v1a1/mono.m3u8"
  },
  "tntsports": {
    "url": "https://consoledbtv.vercel.app/tntsports/tracks-v1a1/mono.m3u8"
  },
  "telecinepremium": {
    "url": "https://consoledbtv.vercel.app/telecinepremium/tracks-v1a1/mono.m3u8"
  },
  "telecinepipoca": {
    "url": "https://consoledbtv.vercel.app/telecinepipoca/tracks-v1a1/mono.m3u8"
  },
  "telecineaction": {
    "url": "https://consoledbtv.vercel.app/telecineaction/tracks-v1a1/mono.m3u8"
  },
  "telecinetouch": {
    "url": "https://consoledbtv.vercel.app/telecinetouch/tracks-v1a1/mono.m3u8"
  },
  "telecinefun": {
    "url": "https://consoledbtv.vercel.app/telecinefun/tracks-v1a1/mono.m3u8"
  },
  "telecinecult": {
    "url": "https://consoledbtv.vercel.app/telecinecult/tracks-v1a1/mono.m3u8"
  },
  "hbo": {
    "url": "https://consoledbtv.vercel.app/hbo/tracks-v1a1/mono.m3u8"
  },
  "hbo2": {
    "url": "https://consoledbtv.vercel.app/hbo2/tracks-v1a1/mono.m3u8"
  },
  "hboplus": {
    "url": "https://consoledbtv.vercel.app/hboplus/tracks-v1a1/mono.m3u8"
  },
  "hbofamily": {
    "url": "https://consoledbtv.vercel.app/hbofamily/tracks-v1a1/mono.m3u8"
  },
  "hbosignature": {
    "url": "https://consoledbtv.vercel.app/hbosignature/tracks-v1a1/mono.m3u8"
  },
  "hboxtreme": {
    "url": "https://consoledbtv.vercel.app/hboxtreme/tracks-v1a1/mono.m3u8"
  },
  "discoverychannel": {
    "url": "https://consoledbtv.vercel.app/discoverychannel/tracks-v1a1/mono.m3u8"
  },
  "discoveryworld": {
    "url": "https://consoledbtv.vercel.app/discoveryworld/tracks-v1a1/mono.m3u8"
  },
  "discoveryturbo": {
    "url": "https://consoledbtv.vercel.app/discoveryturbo/tracks-v1a1/mono.m3u8"
  },
  "discoveryid": {
    "url": "https://consoledbtv.vercel.app/discoveryid/tracks-v1a1/mono.m3u8"
  },
  "discoverykids": {
    "url": "https://consoledbtv.vercel.app/discoverykids/tracks-v1a1/mono.m3u8"
  },
  "discoveryh&h": {
    "url": "https://consoledbtv.vercel.app/discoveryheh/tracks-v1a1/mono.m3u8"
  },
  "discoverytheater": {
    "url": "https://consoledbtv.vercel.app/discoverytheater/tracks-v1a1/mono.m3u8"
  },
  "discoveryscience": {
    "url": "https://consoledbtv.vercel.app/discoveryscience/tracks-v1a1/mono.m3u8"
  },
  "comedycentral": {
    "url": "https://consoledbtv.vercel.app/comedycentral/tracks-v1a1/mono.m3u8"
  },
  "mtv": {
    "url": "https://consoledbtv.vercel.app/mtv/tracks-v1a1/mono.m3u8"
  },
  "mtvlive": {
    "url": "https://consoledbtv.vercel.app/mtvlive/tracks-v1a1/mono.m3u8"
  },
  "nickjr": {
    "url": "https://consoledbtv.vercel.app/nickjr/tracks-v1a1/mono.m3u8"
  },
  "lifetime": {
    "url": "https://consoledbtv.vercel.app/lifetime/tracks-v1a1/mono.m3u8"
  },
  "agro+": {
    "url": "https://consoledbtv.vercel.app/agromais/tracks-v1a1/mono.m3u8"
  },
  "arte1": {
    "url": "https://consoledbtv.vercel.app/arte1/tracks-v1a1/mono.m3u8"
  },
  "terraviva": {
    "url": "https://consoledbtv.vercel.app/terraviva/tracks-v1a1/mono.m3u8"
  },
  "amc": {
    "url": "https://consoledbtv.vercel.app/amc/tracks-v1a1/mono.m3u8"
  },
  "axn": {
    "url": "https://consoledbtv.vercel.app/axn/tracks-v1a1/mono.m3u8"
  },
  "bis": {
    "url": "https://consoledbtv.vercel.app/bis/tracks-v1a1/mono.m3u8"
  },
  "canalbrasil": {
    "url": "https://consoledbtv.vercel.app/canalbrasil/tracks-v1a1/mono.m3u8"
  },
  "e!": {
    "url": "https://consoledbtv.vercel.app/e/tracks-v1a1/mono.m3u8"
  },
  "fx": {
    "url": "https://consoledbtv.vercel.app/fx/tracks-v1a1/mono.m3u8"
  },
  "gloob": {
    "url": "https://consoledbtv.vercel.app/gloob/tracks-v1a1/mono.m3u8"
  },
  "gloobinho": {
    "url": "https://consoledbtv.vercel.app/gloobinho/tracks-v1a1/mono.m3u8"
  },
  "gnt": {
    "url": "https://consoledbtv.vercel.app/gnt/tracks-v1a1/mono.m3u8"
  },
  "history": {
    "url": "https://consoledbtv.vercel.app/history/tracks-v1a1/mono.m3u8"
  },
  "history2": {
    "url": "https://consoledbtv.vercel.app/history2/tracks-v1a1/mono.m3u8"
  },
  "megapix": {
    "url": "https://consoledbtv.vercel.app/megapix/tracks-v1a1/mono.m3u8"
  },
  "modoviagem": {
    "url": "https://consoledbtv.vercel.app/modoviagem/tracks-v1a1/mono.m3u8"
  },
  "multishow": {
    "url": "https://consoledbtv.vercel.app/multishow/tracks-v1a1/mono.m3u8"
  },
  "canaloff": {
    "url": "https://consoledbtv.vercel.app/canaloff/tracks-v1a1/mono.m3u8"
  },
  "studiouniversal": {
    "url": "https://consoledbtv.vercel.app/studiouniversal/tracks-v1a1/mono.m3u8"
  },
  "syfy": {
    "url": "https://consoledbtv.vercel.app/syfy/tracks-v1a1/mono.m3u8"
  },
  "universaltv": {
    "url": "https://consoledbtv.vercel.app/universaltv/tracks-v1a1/mono.m3u8"
  },
  "cinemax": {
    "url": "https://consoledbtv.vercel.app/cinemax/tracks-v1a1/mono.m3u8"
  },
  "cinecanal": {
    "url": "https://consoledbtv.vercel.app/cinecanal/tracks-v1a1/mono.m3u8"
  },
  "paramountnetwork": {
    "url": "https://consoledbtv.vercel.app/paramountnetwork/tracks-v1a1/mono.m3u8"
  },
  "animalplanet": {
    "url": "https://consoledbtv.vercel.app/animalplanet/tracks-v1a1/mono.m3u8"
  },
  "cartoonnetwork": {
    "url": "https://consoledbtv.vercel.app/cartoonnetwork/tracks-v1a1/mono.m3u8"
  },
  "disneychannel": {
    "url": "https://consoledbtv.vercel.app/disneychannel/tracks-v1a1/mono.m3u8"
  },
  "nationalgeographic": {
    "url": "https://consoledbtv.vercel.app/nationalgeographic/tracks-v1a1/mono.m3u8"
  },
  "nickelodeon": {
    "url": "https://consoledbtv.vercel.app/nickelodeon/tracks-v1a1/mono.m3u8"
  },
  "sonychannel": {
    "url": "https://consoledbtv.vercel.app/sonychannel/tracks-v1a1/mono.m3u8"
  },
  "sonymovies": {
    "url": "https://consoledbtv.vercel.app/sonymovies/tracks-v1a1/mono.m3u8"
  },
  "space": {
    "url": "https://consoledbtv.vercel.app/space/tracks-v1a1/mono.m3u8"
  },
  "starchannel": {
    "url": "https://consoledbtv.vercel.app/starchannel/tracks-v1a1/mono.m3u8"
  },
  "foodnetwork": {
    "url": "https://consoledbtv.vercel.app/foodnetwork/tracks-v1a1/mono.m3u8"
  },
  "warnertv": {
    "url": "https://consoledbtv.vercel.app/warnertv/tracks-v1a1/mono.m3u8"
  },
  "trutv": {
    "url": "https://consoledbtv.vercel.app/trutv/tracks-v1a1/mono.m3u8"
  },
  "tlc": {
    "url": "https://consoledbtv.vercel.app/tlc/tracks-v1a1/mono.m3u8"
  },
  "viva": {
    "url": "https://consoledbtv.vercel.app/viva/tracks-v1a1/mono.m3u8"
  },
  "a&e": {
    "url": "https://consoledbtv.vercel.app/aee/tracks-v1a1/mono.m3u8"
  },
  "tnt": {
    "url": "https://consoledbtv.vercel.app/tnt/tracks-v1a1/mono.m3u8"
  },
  "eleven1portugal": {
    "url": "https://consoledbtv.vercel.app/elevensports_pt/tracks-v1a1/mono.m3u8"
  },
  "eleven2portugal": {
    "url": "https://consoledbtv.vercel.app/elevensports2_pt/tracks-v1a1/mono.m3u8"
  },
  "eleven3portugal": {
    "url": "https://consoledbtv.vercel.app/elevensports3_pt/tracks-v1a1/mono.m3u8"
  },
  "eleven4portugal": {
    "url": "https://consoledbtv.vercel.app/elevensports4_pt/tracks-v1a1/mono.m3u8"
  },
  "eleven5portugal": {
    "url": "https://consoledbtv.vercel.app/elevensports5_pt/tracks-v1a1/mono.m3u8"
  },
  "eleven6portugal": {
    "url": "https://consoledbtv.vercel.app/elevensports6_pt/tracks-v1a1/mono.m3u8"
  },
  "empreender": {
    "url": "https://consoledbtv.vercel.app/empreender/tracks-v1a1/mono.m3u8"
  },
  "sabor&arte": {
    "url": "https://consoledbtv.vercel.app/saborearte/tracks-v1a1/mono.m3u8"
  },
  "aparecida": {
    "url": "https://consoledbtv.vercel.app/aparecida/tracks-v1a1/mono.m3u8"
  },
  "ra-tim-bum": {
    "url": "https://consoledbtv.vercel.app/ratimbum/tracks-v1a1/mono.m3u8"
  },
  "tntnovelas": {
    "url": "https://consoledbtv.vercel.app/tntnovelas/tracks-v1a1/mono.m3u8"
  },
  "fishtv": {
    "url": "https://consoledbtv.vercel.app/fishtv/tracks-v1a1/mono.m3u8"
  },
  "cartoonito": {
    "url": "https://consoledbtv.vercel.app/cartoonito/tracks-v1a1/mono.m3u8"
  },
  "fashiontv": {
    "url": "https://consoledbtv.vercel.app/fashiontv/tracks-v1a1/mono.m3u8"
  },
  "curta!": {
    "url": "https://consoledbtv.vercel.app/curta/tracks-v1a1/mono.m3u8"
  },
  "hgtv": {
    "url": "https://consoledbtv.vercel.app/hgtv/tracks-v1a1/mono.m3u8"
  },
  "woohoo": {
    "url": "https://consoledbtv.vercel.app/woohoo/tracks-v1a1/mono.m3u8"
  },
  "zoomoo": {
    "url": "https://consoledbtv.vercel.app/zoomoo/tracks-v1a1/mono.m3u8"
  },
  "musicboxbrazil": {
    "url": "https://consoledbtv.vercel.app/musicboxbrasil/tracks-v1a1/mono.m3u8"
  },
  "mtv00s": {
    "url": "https://consoledbtv.vercel.app/mtvs_00/tracks-v1a1/mono.m3u8"
  },
  "film&artsbrazil": {
    "url": "https://consoledbtv.vercel.app/filmearts/tracks-v1a1/mono.m3u8"
  },
  "primeboxbrazil": {
    "url": "https://consoledbtv.vercel.app/primeboxbrazil/tracks-v1a1/mono.m3u8"
  },
  "cnninternational": {
    "url": "https://consoledbtv.vercel.app/cnninternational/tracks-v1a1/mono.m3u8"
  },
  "tvgazeta": {
    "url": "https://consoledbtv.vercel.app/gazeta/tracks-v1a1/mono.m3u8"
  },
  "redegospel": {
    "url": "https://consoledbtv.vercel.app/redegospel/tracks-v1a1/mono.m3u8"
  },
  "tvsenado": {
    "url": "https://consoledbtv.vercel.app/tvsenado/tracks-v1a1/mono.m3u8"
  },
  "tvcamara": {
    "url": "https://consoledbtv.vercel.app/tvcamara/tracks-v1a1/mono.m3u8"
  },
  "brasilparalelo": {
    "url": "https://consoledbtv.vercel.app/brasilparalelo/tracks-v1a1/mono.m3u8"
  },
  "futura": {
    "url": "https://consoledbtv.vercel.app/futura/tracks-v1a1/mono.m3u8"
  },
  "canaldoboi": {
    "url": "https://consoledbtv.vercel.app/canaldoboi/tracks-v1a1/mono.m3u8"
  },
  "agrobrasiltv": {
    "url": "https://consoledbtv.vercel.app/agrobrasil/tracks-v1a1/mono.m3u8"
  },
  "canalrural": {
    "url": "https://consoledbtv.vercel.app/novotempo/tracks-v1a1/mono.m3u8"
  },
  "redevida": {
    "url": "https://consoledbtv.vercel.app/redevida/tracks-v1a1/mono.m3u8"
  },
  "tvpaieterno": {
    "url": "https://consoledbtv.vercel.app/tvpaieterno/tracks-v1a1/mono.m3u8"
  },
  "tvevangelizar": {
    "url": "https://consoledbtv.vercel.app/tvevangelizar/tracks-v1a1/mono.m3u8"
  },
  "tvcancaonova": {
    "url": "https://consoledbtv.vercel.app/cancaonova/tracks-v1a1/mono.m3u8"
  },
  "usa": {
    "url": "https://consoledbtv.vercel.app/usa/tracks-v1a1/mono.m3u8"
  },
  "adultswim": {
    "url": "https://consoledbtv.vercel.app/adultswim/tracks-v1a1/mono.m3u8"
  },
  "tcm": {
    "url": "https://consoledbtv.vercel.app/tcm/tracks-v1a1/mono.m3u8"
  },
  "playboytv": {
    "url": "https://consoledbtv.vercel.app/playboy/tracks-v1a1/mono.m3u8"
  },
  "sexprive": {
    "url": "https://consoledbtv.vercel.app/sexprive/tracks-v1a1/mono.m3u8"
  },
  "sextreme": {
    "url": "https://consoledbtv.vercel.app/sextreme/tracks-v1a1/mono.m3u8"
  },
  "sexyhot": {
    "url": "https://consoledbtv.vercel.app/sexyhot/tracks-v1a1/mono.m3u8"
  },
  "venus": {
    "url": "https://consoledbtv.vercel.app/venus/tracks-v1a1/mono.m3u8"
  },
  "sporttvpt": {
    "url": "https://consoledbtv.vercel.app/sporttvpt/tracks-v1a1/mono.m3u8"
  },
  "sporttvpt2": {
    "url": "https://consoledbtv.vercel.app/sporttvpt2/tracks-v1a1/mono.m3u8"
  },
  "sporttvpt3": {
    "url": "https://consoledbtv.vercel.app/sporttvpt3/tracks-v1a1/mono.m3u8"
  },
  "sporttvpt4": {
    "url": "https://consoledbtv.vercel.app/sporttvpt4/tracks-v1a1/mono.m3u8"
  },
  "sporttvpt5": {
    "url": "https://consoledbtv.vercel.app/sporttvpt5/tracks-v1a1/mono.m3u8"
  },
  "sporttvpt6": {
    "url": "https://consoledbtv.vercel.app/sporttvpt6/tracks-v1a1/mono.m3u8"
  },
  "primevideo": {
    "url": "https://consoledbtv.vercel.app/primevideo/tracks-v1a1/mono.m3u8"
  },
  "primevideo2": {
    "url": "https://consoledbtv.vercel.app/primevideo2/tracks-v1a1/mono.m3u8"
  },
  "primevideo3": {
    "url": "https://consoledbtv.vercel.app/primevideo3/tracks-v1a1/mono.m3u8"
  },
  "primevideo4": {
    "url": "https://consoledbtv.vercel.app/primevideo4/tracks-v1a1/mono.m3u8"
  },
  "cazetv": {
    "url": "https://consoledbtv.vercel.app/cazetv/tracks-v1a1/mono.m3u8"
  },
  "cazetv2": {
    "url": "https://consoledbtv.vercel.app/cazetv2/tracks-v1a1/mono.m3u8"
  },
  "cazetv3": {
    "url": "https://consoledbtv.vercel.app/cazetv3/tracks-v1a1/mono.m3u8"
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
