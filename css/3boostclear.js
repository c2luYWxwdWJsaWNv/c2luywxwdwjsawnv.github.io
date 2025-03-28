// Função para obter o parâmetro da URL
function obterParametroUrl(parametro) {
  const parametros = new URLSearchParams(window.location.search);
  return parametros.get(parametro);
}

// Função assíncrona para configurar o player
async function configurarPlayer(videoId) {
  try {
    // URL da API com o videoId codificado
    const url = "https://consoledglobo.vercel.app/" + encodeURIComponent(videoId);
    
    // Realiza a requisição para buscar a URL do vídeo
    const resposta = await fetch(url);
    const conteudo = await resposta.text();
    
    // Expressão regular para encontrar a URL do vídeo
    const regex = /https:\/\/[^"]+\.m3u8/i;
    const urlVideo = conteudo.match(regex);
    
    // Se a URL do vídeo for encontrada, configura o player
    if (urlVideo) {
      const videoUrl = urlVideo[0];
      
      // Configura o JWPlayer diretamente com o URL m3u8
      const player = jwplayer("player");
      player.setup({
        playlist: [{
          sources: [{
            default: false,
            type: "hls",
            file: videoUrl,
            label: '0'
          }]
        }],
        width: "100%",
        height: "100%",
        aspectratio: "16:9",
        autostart: true,
        cast: {},
        sharing: false
      });
    } else {
      console.error("Erro ao obter o URL do vídeo");
    }
  } catch (erro) {
    console.error("Erro ao configurar o player", erro);
  }
}

// Evento para quando o conteúdo da página for carregado
document.addEventListener("DOMContentLoaded", function () {
  const parametroVideo = obterParametroUrl('m');
  if (parametroVideo) {
    configurarPlayer(parametroVideo);
  }
});
