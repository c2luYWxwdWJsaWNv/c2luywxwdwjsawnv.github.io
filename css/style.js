// Função para obter um parâmetro da URL com base no nome do parâmetro
function getParametroUrl(paramName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
}

// Função assíncrona para capturar o HTML e configurar o player de vídeo
async function capturarHTML(encodedUrl) {
  try {
    // Decodifica a URL base64
    const decodedUrl = atob(encodedUrl);

    // Cria a URL completa de destino com a URL codificada
    const fullUrl = "https://consoledplay.vercel.app/" + encodeURIComponent(decodedUrl);

    // Faz uma requisição para obter o conteúdo da URL
    const response = await fetch(fullUrl);
    const htmlContent = await response.text();

    // Expressão regular para extrair a URL do vídeo
    const videoSrcPattern = /src\s*:\s*"([^"]+)"/i;
    const videoSrcMatch = htmlContent.match(videoSrcPattern);

    if (videoSrcMatch) {
      // Usa diretamente a URL extraída
      const videoUrl = videoSrcMatch[1];

      // Configura o player de vídeo usando o JWPlayer
      const player = jwplayer("player");
      player.setup({
        'playlist': [{
          'sources': [{
            'default': false,
            'type': "hls",
            'file': videoUrl,  // Agora sem o domínio adicional
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
    }
  } catch (error) {
    console.error("Erro ao capturar HTML:", error);
  }
}

// Aguarda o carregamento do DOM e executa o processo de captura e configuração do player
document.addEventListener("DOMContentLoaded", async function () {
  const paramId = getParametroUrl('id');
  if (paramId) {
    await capturarHTML(paramId);
  }
});
