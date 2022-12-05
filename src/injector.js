let scriptEl = document.createElement('script')

console.log('injector init')
scriptEl.src = chrome.runtime.getURL('inject_audio.js');
scriptEl.onload = function () {
    this.remove();
};
(document.head || document.documentElement).appendChild(scriptEl);