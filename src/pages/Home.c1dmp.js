import wixWindowFrontend from 'wix-window-frontend';
import { Effect } from 'effect';
async function getData() {
	if (wixWindowFrontend.rendering.env == "backend") {
		console.log("Rendering on the server");
		wixWindowFrontend.warmupData.set("data", `Data from SSR TEST`);
	}
}

$w.onReady(async function () {
	await getData() 
    const p = Effect.gen(function* () {
		yield* Effect.logInfo('TEST from Effect code')
    });
    await Effect.runPromise(p);
	console.log('TEST2')
	const dataResults = wixWindowFrontend.warmupData.get("data");
	console.log('RESULT: ', dataResults);
});
