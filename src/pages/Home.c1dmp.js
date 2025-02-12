import wixWindowFrontend from 'wix-window-frontend';
import { Effect } from 'effect';
async function getData() {
	if (wixWindowFrontend.rendering.env == "backend") {
		console.log("Rendering on the server");
	  wixWindowFrontend.warmupData.set("data", `Data from SSR`);
	}
  }
  
  $w.onReady(async function () {
	getData() 
    const p = Effect.gen(function* () {
    	 yield* Effect.logInfo('Data not found in warmupData, fetching from dataFunction Random text!');
		 yield* Effect.logInfo('testest')
    });
    await Effect.runPromise(p);
	const dataResults = wixWindowFrontend.warmupData.get("data");
	console.log('RESULLT: ', dataResults);
  });
  