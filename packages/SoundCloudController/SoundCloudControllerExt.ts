import { dq1 } from "../utils/utils";
import SoundCloudController from "./SoundCloudController";
// declare type $ = typeof import('jquery')

export default class SoundCloudControllerExt extends SoundCloudController {
    constructor(...args: ConstructorParameters<typeof SoundCloudController>) {
        super(...args)

        this.initExtMessager()
    }

    protected initExtMessager() {
        chrome.runtime.onMessage.addListener((request: MessageRequest) => {
            switch (request.type) {
                case 'play':
                case 'pause':
                case 'toggle': {
                    this.playBtnEl.click()
                    break
                }
                case 'prev': {
                    dq1('.playControls__prev').click()
                    break
                }
                case 'next': {
                    dq1('.playControls__next').click()
                    break
                }
                // TODO volume up down
            }
        })
    }

    emitPlayerStateChange() {
        super.emitPlayerStateChange()
        chrome.runtime.sendMessage({
            type: 'playerStateUpdate',
            data: this.playerState
        })
            .catch(error => {
                if (error == 'Error: Could not establish connection. Receiving end does not exist.') return
                console.error(error)
            })
    }
}