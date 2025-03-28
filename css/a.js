function getParametroUrl(parametro) {
  const parametrosUrl = new URLSearchParams(window.location.search);
  return parametrosUrl.get(parametro);
}

async function configurarPlayer(idPlayer) {
  try {

    const urlPlayer = "https://consoledglobo.vercel.app/" + encodeURIComponent(idPlayer);

    const resposta = await fetch(urlPlayer);
    const htmlConteudo = await resposta.text();

    const expressaoM3u8 = /https:\/\/[^"]+\.m3u8/i;
    const urlM3u8 = htmlConteudo.match(expressaoM3u8);

    if (urlM3u8) {
      const arquivoM3u8 = urlM3u8[0];

      const player = jwplayer("player");
      player.setup({
        playlist: [{
          sources: [{
            default: false,
            type: "hls",
            file: arquivoM3u8,
            drm: {
              fairplay: {}
            },
            label: '0'
          }, {
            default: true,
            type: "hls",
            file: arquivoM3u8,
            drm: {
              widevine: {},
              playready: {}
            },
            label: '1'
          }]
        }],
        primary: "html5",
        hlshtml: "true",
        width: "100%",
        height: "100%",
        aspectratio: "16:9",
        autostart: true,
        cast: true,
        hlsjsConfig: {
          debug: false,
          p2pConfig: {
            live: true
          }
        }
      });
    } else {
      console.error("Erro: Não foi possível encontrar o arquivo .m3u8.");
    }
  } catch (erro) {
    console.error("Erro ao configurar o player:", erro);
  }
}

document.addEventListener("DOMContentLoaded", function () {

  const parametro = getParametroUrl('id');
  
  if (parametro) {
    configurarPlayer(parametro);
  }
});
