// ==UserScript==
// @name         RuDeepstate
// @version      1
// @description  DenatilizatiaUkraine
// @author       hpdevFOX
// @match        https://deepstatemap.live/en
// @match        https://deepstatemap.live/
// @match        https://deepstatemap.live/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=deepstatemap.live
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
        setInterval(function() {
            document.title = 'DeepStateMap | FOX';
            if (document.getElementsByClassName("deepstate-logo").length > 0) {
                document.getElementsByClassName("deepstate-logo")[0].remove();
            }
            for (let i = 0; i < document.getElementsByClassName("leaflet-interactive").length; i++) {
                switch (document.getElementsByClassName("leaflet-interactive")[i].getAttribute("stroke")){
                    case "#a52714": //русские
                        document.getElementsByClassName("leaflet-interactive")[i].setAttribute("stroke", "#0f9d59");
                        document.getElementsByClassName("leaflet-interactive")[i].setAttribute("fill", "#0f9d59");
                        break;
                    case "#0f9d58": //хохлы
                        document.getElementsByClassName("leaflet-interactive")[i].setAttribute("stroke", "#a52715");
                        document.getElementsByClassName("leaflet-interactive")[i].setAttribute("fill", "#a52715"); //#0f9d58
                        break;
                    case "#880e4f": //наша земля
                        document.getElementsByClassName("leaflet-interactive")[i].setAttribute("stroke", "#0f9d59");
                        document.getElementsByClassName("leaflet-interactive")[i].setAttribute("fill", "#0f9d59");
                        break;
                    case "#ff5252": //идите нахуй со своими окупациями
                        document.getElementsByClassName("leaflet-interactive")[i].remove();
                        i--;
                        break;
                }
            }
            try {document.getElementsByClassName("cl-content-locker")[0].remove();} catch{} //а вот идите нахуй со своими диалогами крымскими
            for (let i = -1; i < document.getElementsByClassName("leaflet-marker-icon").length; i++) { //подчистка "врагов"
              try {
              switch (document.getElementsByClassName("leaflet-marker-icon")[i].getAttribute("src")) {
                      case "/images/custom/enemy.png":
                          document.getElementsByClassName("leaflet-marker-icon")[i].remove();
                          i--;
                  case "images/custom/moscow_ship.png":
                          document.getElementsByClassName("leaflet-marker-icon")[i].remove();
                          i--;

                      break;
                  }

} catch {}
}
        }, 500)
})();
