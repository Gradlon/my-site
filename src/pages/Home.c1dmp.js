import wixWindowFrontend from 'wix-window-frontend';
import wixData from "wix-data";

// import { Effect } from 'effect';
export function setup_ssr_repeater(repeater_data) {
	$w('#repeater-ssr').data = repeater_data;
	$w('#repeater-ssr').onItemReady(($item, itemData, index) => {
		$item('#repeater-ssr-title').text = itemData.title;
	});
}

export function setup_csr_repeater(repeater_data) {
	$w('#repeater-csr').data = repeater_data;
	$w('#repeater-csr').onItemReady(($item, itemData, index) => {
		$item('#repeater-csr-title').text = itemData.title;
	});
}

export async function ssr_only() {
	if (wixWindowFrontend.rendering.env == 'backend') {

		// - This code breaks SSR
		let data = await wixData.query("Fakedb").find();
		wixWindowFrontend.warmupData.set('repeaterData', data);

		console.log('DATA', data);
		setup_csr_repeater(data);
		// - END

		wixWindowFrontend.warmupData.set('data', `This comes from the server ${wixWindowFrontend.rendering.env}`);

	}
}

export async function csr_only() {
	if (wixWindowFrontend.rendering.env == 'browser') {

		let data = await wixData.query("Fakedb").find();
		
		console.log('Data from Collection(SSR): ', data);
		const dataResults = wixWindowFrontend.warmupData.get('data');
		console.log('SSR Data: ', dataResults);

		const warmedUpData = wixWindowFrontend.warmupData.get('repeaterData');
		if(warmedUpData) {
			console.log('Rendering repeater with SSR data');
			setup_ssr_repeater(warmedUpData);
		}
		if(!warmedUpData) {
			console.log('Rendering repeater with CSR data');
			const data = await wixData.query("Fakedb").find();
			setup_csr_repeater(data);
		}

	}
}

export async function csr_ssr() {
}

$w.onReady(async function () {
	await ssr_only();
	await csr_only();
	await csr_ssr();
});