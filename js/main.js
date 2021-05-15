window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }

  if (window.matchMedia('(display-mode: standalone)').matches) {
   console.log('display-mode is standalone');
   document.getElementById(elementID).innerHTML = "Good!";
  } else {
    console.log('display-mode is other');
   document.getElementById(elementID).innerHTML = "Please install app";
  }
  //console.log("redirect ...");
  //window.location.replace("https://educareccme.wixsite.com/application");
}
