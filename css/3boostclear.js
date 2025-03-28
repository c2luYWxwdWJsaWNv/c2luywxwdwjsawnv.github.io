// Função para obter o parâmetro da URL
function getParametroUrl(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Função assíncrona para configurar o player de vídeo
async function configurarPlayer(encodedParam) {
  try {
    // Decodifica o parâmetro base64
    const decodedParam = atob(encodedParam);
    // Cria a URL do arquivo de configuração do player
    const url = "https://consoledplay.vercel.app/" + encodeURIComponent(decodedParam);
    
    // Faz uma requisição para pegar os dados do player
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro: " + response.statusText);
    }
    
    // Pega o conteúdo retornado e busca pela URL do stream .m3u8
    const responseText = await response.text();
    const streamUrlRegex = /https:\/\/[^"]+\.m3u8/i;
    const streamUrlMatch = responseText.match(streamUrlRegex);
    
    if (!streamUrlMatch || streamUrlMatch.length === 0) {
      throw new Error("URL do stream .m3u8 não encontrada.");
    }
    
    // Pega o primeiro link encontrado
    const streamUrl = streamUrlMatch[0];
    
    // Configura o player JWPlayer
    var player = jwplayer("player");
    player.setup({
      'playlist': [{
        'sources': [{
          'default': false,
          'type': "hls",
          'file': streamUrl,
          'label': '0'
        }]
      }],
      'primary': "html5",
      'hlshtml': true,
      'width': "100%",
      'height': "100%",
      'aspectratio': "16:9",
      'autostart': true,
      'cast': true,
      'hlsjsConfig': {
        'debug': false,
        'p2pConfig': {
          'live': true
        }
      }
    });
  } catch (error) {
    console.error("Erro ao configurar o player:", error.message);
  }
}

// Quando o DOM estiver carregado, tenta configurar o player com o parâmetro 'id' da URL
document.addEventListener("DOMContentLoaded", function () {
  const parametroId = getParametroUrl('id');
  if (parametroId) {
    configurarPlayer(parametroId);
  } else {
    console.error("Parâmetro 'id' não encontrado na URL.");
  }
});
