// Função para obter um parâmetro da URL
function obterParametroUrl(parametro) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(parametro);
}

// Função assíncrona para configurar o player
async function configurarPlayer(videoId) {
  try {
    // URL do serviço que retorna a URL do vídeo
    const videoUrl = "https://consoledglobo.vercel.app/" + encodeURIComponent(videoId);
    
    // Fazendo o fetch da URL para obter os dados
    const response = await fetch(videoUrl);
    const responseText = await response.text();
    
    // Expressão regular para encontrar a URL do arquivo .m3u8
    const m3u8Pattern = /https:\/\/[^"]+\.m3u8/i;
    const m3u8Url = responseText.match(m3u8Pattern);
    
    // Se encontrou a URL do vídeo, configura o player
    if (m3u8Url) {
      let videoFileUrl = m3u8Url[0];
      
      // Troca apenas o protocolo da URL para o novo domínio, mantendo o restante da URL
      videoFileUrl = videoFileUrl.replace(/^https:\/\//, "https://sinalpublicotvplayer.vercel.app/");
      
      // Configura o JWPlayer com a URL modificada
      const player = jwplayer("player");
      player.setup({
        'playlist': [{
          'sources': [{
            'default': false,
            'type': "hls",
            'file': videoFileUrl,
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
      console.error("Erro ao obter o URL do vídeo");
    }
  } catch (error) {
    console.error("Erro ao configurar o player", error);
  }
}

// Espera o carregamento completo do documento para executar a função
document.addEventListener("DOMContentLoaded", function () {
  const videoId = obterParametroUrl('m');
  if (videoId) {
    configurarPlayer(videoId);
  }
});
