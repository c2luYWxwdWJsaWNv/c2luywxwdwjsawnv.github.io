<!DOCTYPE html>
<html lang="pt">
<head>
    <meta name="referrer" content="no-referrer">
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/sinalpublico/ply@main/assets/css/player-v3.1.min.css">
    <script src="//content.jwplatform.com/libraries/KB5zFt7A.js"></script>
    <script>
        jwplayer.key = 'XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo';
        
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\[").replace(/[\]]/, "\]");
            var regex = new RegExp("[\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }

        var getURL = getParameterByName('m');

        if (getURL == "#") {
            alert('Vuelva a la página anterior');
        }

        var play = getParameterByName('play');
        play = (play == "2") ? "true" : "false";
    </script>
    <style>
        body {
            margin: 0;
            padding: 0;
        }

        #player {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            height: 100%;
            width: 100%;
            border: 0;
            overflow: hidden;
        }
    </style>
</head>
<body>
    <div id="player"></div>
    <script>
        var playerInstance = jwplayer("player");
        playerInstance.setup({
            playlist: [{
                "sources": [
                    {
                        "default": false,
                        "type": "hls",
                        "file": atob(getURL),
                        "drm": {
                            "fairplay": {}
                        },
                        "label": "0"
                    },
                    {
                        "default": true,
                        "type": "hls",
                        "file": atob(getURL),
                        "drm": {
                            "widevine": {},
                            "playready": {}
                        },
                        "label": "1"
                    }
                ]
            }],
            width: "100%",
            height: "100%",
            aspectratio: "16:9",
            autostart: true,
            mute: false,
            cast: {}
        });

        playerInstance.on('play', function() {
            playerInstance.setCurrentAudioTrack(2); 
        });
    </script>
</body>
</html>
