window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }

  if (window.matchMedia('(display-mode: standalone)').matches) {
   console.log('display-mode is standalone');
  } else {
    console.log('display-mode is other');
  }
  //console.log("redirect ...");
  //window.location.replace("https://educareccme.wixsite.com/application");
}
