
console.log("in main.js");

function button_Click() {
     console.log('before in click()');
     urls = ["https://hackertyper.com/", "https://findtheinvisiblecow.com/", "https://pointerpointer.com/", "http://www.staggeringbeauty.com/", "http://www.shadyurl.com/", "http://weavesilk.com/", "https://thisissand.com/", "http://orteil.dashnet.org/cookieclicker/", "https://www.incredibox.com/", "https://screamintothevoid.com/", "https://archive.org/web/", "http://radio.garden/search", "https://codepen.io/akm2/full/rHIsa", "http://slither.io/", "https://evoworld.io/", "https://www.coolmathgames.com/", "https://agar.io/", "https://diep.io/","http://tanksmith.io/","https://lordz.io/link.html?room"];
     url = urls[Math.floor(Math.random() * urls.length)];
     window.location=url;
     console.log('after in click()');
}