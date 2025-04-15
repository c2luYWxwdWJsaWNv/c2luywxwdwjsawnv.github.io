function getUrlParam(paramName) {
  const params = new URLSearchParams(window.location.search);
  return params.get(paramName);
}

function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    alert("Não há página anterior!");
  }
}

function toggleMirror() {
  const iframe = document.getElementById("embed-frame");
  iframe.classList.toggle("mirrored");
}

function connectToCast() {
  if (!window.chrome || !chrome.cast) {
    alert("Cast API não está disponível neste navegador.");
    return;
  }

  const sessionRequest = new chrome.cast.SessionRequest(chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);

  const apiConfig = new chrome.cast.ApiConfig(
    sessionRequest,
    session => {
      const mediaInfo = new chrome.cast.media.MediaInfo(window.location.href);
      session.loadMedia(mediaInfo,
        () => {
          console.log("Transmissão iniciada");
        },
        error => {
          console.error("Erro ao iniciar transmissão:", error);
        }
      );
    },
    receivers => {
      console.log("Receivers disponíveis:", receivers);
    }
  );

  chrome.cast.initialize(apiConfig,
    () => {
      chrome.cast.requestSession(
        session => {
          console.log("Sessão de transmissão iniciada:", session);
        },
        error => {
          console.error("Erro ao iniciar sessão de transmissão:", error);
        }
      );
    },
    error => {
      console.error("Erro ao inicializar o Cast API:", error);
    }
  );
}

function enterFullscreen() {
  const iframe = document.getElementById("embed-frame");

  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.mozRequestFullScreen) {
    iframe.mozRequestFullScreen();
  } else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) {
    iframe.msRequestFullscreen();
  } else {
    alert("Fullscreen não é suportado neste navegador.");
  }
}

(function loadIframe() {
  const encodedId = getUrlParam('id');

  if (encodedId) {
    const decodedId = atob(encodedId); 
    const url = "https://sportzonline.ps/channels/pt/" + encodeURIComponent(decodedId);
    document.getElementById("embed-frame").src = url;
  } else {
    document.getElementById("embed-frame").src = "https://sportzonline.ps/channels/pt/";
  }
})();
