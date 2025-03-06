import wixWindowFrontend from 'wix-window-frontend';
import { Effect } from 'effect';
async function getData2() {
	if (wixWindowFrontend.rendering.env == 'backend') {
		console.log('Rendering on the server');
		wixWindowFrontend.warmupData.set('data', `This comes from the server`);
	}
}

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
		const data = await getData();
		// wixWindowFrontend.warmupData.set('repeaterData', data);
		wixWindowFrontend.warmupData.set('data', `This comes from the server`);

		// setup_csr_repeater(data);
	}
}

export async function csr_only() {
	if (wixWindowFrontend.rendering.env == 'browser') {
		const dataResults = wixWindowFrontend.warmupData.get('data');
		console.log('SSR Data: ', dataResults);

		const warmedUpData = wixWindowFrontend.warmupData.get('repeater_data');
		if(warmedUpData) {
			console.log('Rendering repeater with SSR data');
			setup_ssr_repeater(warmedUpData);
		}
		// if(!warmedUpData) {
		// 	console.log('Rendering repeater with CSR data');
		// 	const data = await getData();
		// 	setup_csr_repeater(data);
		// }

	}
}

export async function csr_ssr() {

}

$w.onReady(async function () {
	await ssr_only();
	await csr_only();
	await csr_ssr();
});

export async function getData() {
	return new Promise((resolve, reject) => {
		const data = [
			{
				_id: '1',
				title: 'Item 1',
				description: 'Description 1',
			},
			{
				_id: '2',
				title: 'Item 2',
				description: 'Description 1',
			},
			{
				_id: '3',
				title: 'Item 3',
				description: 'Description 1',
			},
		];
		setTimeout(() => {
			resolve(data);
		}, 1000);
	});
}

