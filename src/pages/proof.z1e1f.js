import wixWindowFrontend from 'wix-window-frontend'; 
import wixData from "wix-data";

async function setWarmupViaFrontend () {
    console.log("setting warmup data");
        let data = await wixData.query("organizations").find();

        wixWindowFrontend.warmupData.set("foo", `bar`);
        wixWindowFrontend.warmupData.set("data", data.items);
        console.log('DATA', data);
}

$w.onReady(async function () { 
    await setWarmupViaFrontend();
    const data = await wixWindowFrontend.warmupData.get("data"); 
    console.log('WarmUp Data', data);

}); 

$w('#button1').onClick(() => { 
    const data = wixWindowFrontend.warmupData.get("foo"); 
    console.log(data); 

    const data2 = wixWindowFrontend.warmupData.get("data"); 
    console.log('WarmUp Data', data2);
})