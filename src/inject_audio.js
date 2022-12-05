(function () {
    'use strict';
    /**@type {typeof document.createElement} */
    let _createElement = document.createElement.bind(document)
    let audioElListContainer = _createElement('div')
    audioElListContainer.id = 'audioel-list-container'
    document.body.appendChild(audioElListContainer)

    let index = 0
    document.createElement = (...args) => {
        let el = _createElement(...args)
        if (args[0] === 'audio') {
            el.setAttribute('data-index', index++)

            audioElListContainer.appendChild(el)
        }
        return el
    }
})();