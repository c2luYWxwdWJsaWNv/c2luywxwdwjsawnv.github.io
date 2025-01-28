// 
function getParametroUrl(paramName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
}

// 
async function configurarPlayer(encodedUrl) {
  try {
    // 
    const decodedUrl = atob(encodedUrl);

    // 
    const fullUrl = "https://consoledplay.vercel.app/" + encodeURIComponent(decodedUrl);

    // 
    const response = await fetch(fullUrl);
    const htmlContent = await response.text();

    // 
    const videoSrcPattern = /src\s*:\s*"([^"]+)"/i;
    const videoSrcMatch = htmlContent.match(videoSrcPattern);

    if (videoSrcMatch) {
      
      const videoUrl = videoSrcMatch[1];

      // 
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
    }
  } catch (error) {
    console.error("Erro ao configurar o player:", error);
  }
}

// 
document.addEventListener("DOMContentLoaded", function () {
  const paramId = getParametroUrl('id');
  if (paramId) {
    // 
    configurarPlayer(paramId);
  }
});
