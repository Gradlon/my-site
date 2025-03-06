import wixData from 'wix-data';
import wixWindowFrontend from 'wix-window-frontend';
import { Effect } from 'effect';
import { _id } from 'effect/Fiber';
async function getData() {
	if (wixWindowFrontend.rendering.env == "backend") {
		console.log("Rendering on the server");
		wixWindowFrontend.warmupData.set("data", `This comes from the server`);
		$w('#button1').link = 'https://sunnyside-up.wixstudio.com/my-site-14';
	}
}



$w.onReady(async function () {
	await getData() 
	const dataResults = wixWindowFrontend.warmupData.get("data");
	console.log('SSR Data: ', dataResults);
});

