window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
  
  console.log("redirect ...");
  window.location.replace("https://educareccme.wixsite.com/application");
}
