function getParametroUrl(paramName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
}

async function configurarPlayer(encodedUrl) {
  try {
    // Decodificando a URL recebida
    const decodedUrl = atob(encodedUrl);

    // Acessando a página do vídeo
    const fullUrl = "https://consoledplay.vercel.app/" + encodeURIComponent(decodedUrl);

    // Fazendo a requisição para a URL do vídeo
    const response = await fetch(fullUrl);
    const htmlContent = await response.text();

    // Capturando o token
    const tokenPattern = /token:\s*"([^"]+)"/i;
    const tokenMatch = htmlContent.match(tokenPattern);

    if (tokenMatch) {
      const token = tokenMatch[1]; // Captura o valor do token

      // Construindo a URL final do vídeo
      const videoUrl = `https://fonteruim.icu/token/${token}/embedtv.m3u8`;

      // Configurando o player com a URL gerada
      const player = jwplayer("player");
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
        'cast': true,
        'sharing': false
      });
    } else {
      console.error("Token não encontrado na página.");
    }
  } catch (error) {
    console.error("Erro ao configurar o player:", error);
  }
}

// Espera a página carregar
document.addEventListener("DOMContentLoaded", function () {
  const paramId = getParametroUrl('id');
  if (paramId) {
    // Configura o player com o parâmetro 'id'
    configurarPlayer(paramId);
  }
});
