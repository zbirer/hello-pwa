window.onload = () => {
    'use strict';

    let installed = localStorage.getItem("installed")
    console.log('installed = ', installed);

    window.addEventListener('appinstalled', (e) => {
        console.log('installed');
        localStorage.setItem("installed", true);
    });

	window.addEventListener('beforeinstallprompt', function(e) {
        console.log('beforeinstallprompt event fired, so app was not installed');
	  localStorage.removeItem('installed')
	})

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }

	setTimeout(function () {
		let installed = localStorage.getItem("installed")
		console.log('after timout, installed = ', installed);

		// https://developer.mozilla.org/en-US/docs/Web/CSS/@media/display-mode
		if (window.matchMedia('(display-mode: standalone)').matches) {
			console.log("display-mode is standalone")
		} else if (window.matchMedia('(display-mode: fullscreen)').matches) {
			console.log("display-mode is fullscreen")
		} if (window.matchMedia('(display-mode: minimal-ui)').matches) {
			console.log("display-mode is minimal-ui")
		} if (window.matchMedia('(display-mode: browser)').matches) {
			console.log("display-mode is browser")
		}

		if (window.matchMedia('(display-mode: standalone)').matches) {
			console.log('display-mode is standalone so run within app, just redirect');
			document.getElementById("title").innerHTML = "אנא המתן";
			window.location.replace("https://educareccme.wixsite.com/application");
		} else {
			if (installed) {
				console.log("app already installed so just redirect to site")
				document.getElementById("title").innerHTML = "אנא המתן";
				console.log("redirect ...");
				window.location.replace("https://educareccme.wixsite.com/application");
			} else {
				document.getElementById("title").innerHTML = "אנא התקן את היישום על ידי אישור הוספה למסך הבית.  השאלה מופיעה בתחתית המסך";
				document.getElementById("paragraph").innerHTML = "אם השאלה לא מופיעה, נסי/ה להתקין דרך התפריט של הדפדפן - חפש/י שם אפשרות בשם Install App";
				console.log("not installed ...");
			}
		}
	}, 500)
}