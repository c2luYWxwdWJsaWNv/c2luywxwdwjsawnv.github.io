function obterParametroUrl(parametro) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(parametro);
}

async function configurarPlayer(url) {
  try {
    const apiUrl = "https://consoledglobo.vercel.app/" + encodeURIComponent(url);
    const response = await fetch(apiUrl);
    const responseText = await response.text();
    const videoUrlPattern = /https:\/\/[^"]+\.m3u8/i;
    const videoUrlMatch = responseText.match(videoUrlPattern);

    if (videoUrlMatch) {
      let videoUrl = videoUrlMatch[0];
      
      // Substitui a parte do link até o ".com" por "https://sinalpublicotvplayer.vercel.app/"
      videoUrl = videoUrl.replace(/^https:\/\/[^/]+\.com/, "https://sinalpublicotvplayer.vercel.app");

      var player = jwplayer("player");
      player.setup({
    'playlist': [{
      'sources': [{
        'default': false,
        'type': "hls",
        'file': videoUrl,
        'label': '0'
      }]
    }],
    'width': "100%",
    'height': "100%",
    'aspectratio': "16:9",
    'autostart': true,
    'cast': {},
    'sharing': false
          }
        }
      });
    } else {
      console.error("Erro ao obter o URL do vídeo");
    }
  } catch (erro) {
    console.error("Erro ao configurar o player", erro);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const parametro = obterParametroUrl('m');
  if (parametro) {
    configurarPlayer(parametro);
  }
});
