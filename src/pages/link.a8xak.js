import wixData from 'wix-data';
import wixWindowFrontend from 'wix-window-frontend';
import { Effect } from 'effect';
async function getData() {
	if (wixWindowFrontend.rendering.env == "backend") {
		console.log("Rendering on the server");
	  wixWindowFrontend.warmupData.set("data", `Data from SSR`);
	  $w('#button1').link = 'http://heise.de'
	}
  }
  
  $w.onReady(async function () {
	getData() 
	const dataResults = wixWindowFrontend.warmupData.get("data");
	console.log('RESULLT: ', dataResults);
  });
  