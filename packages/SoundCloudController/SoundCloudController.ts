import { AsyncLock } from "../utils/AsyncLock"
import { tassign, dq1, tentries, waitLoopCallback, formatTime2realTime, wait } from "../utils/utils"

export default class SoundCloudController {
    playBtnEl: HTMLDivElement

    repectBtnEl: HTMLButtonElement
    shuffleBtnEl: HTMLButtonElement
    volumeBtnEl: HTMLButtonElement

    audioEl: HTMLAudioElement
    audioElLock = new AsyncLock()

    playerState = {} as PlayerState

    constructor() {
        this.initEl()
    }

    protected async initEl() {
        tassign<SoundCloudController>(this, {
            playBtnEl: dq1('.playControl.sc-ir.playControls__control.playControls__play'),
            repectBtnEl: dq1('.repeatControl'),
            shuffleBtnEl: dq1('.shuffleControl'),
            volumeBtnEl: dq1('.volume button[type="button"]'),
        })

        await waitLoopCallback(() => !!dq1('#audioel-list-container [data-index="1"]'))
        this.playBtnEl.click()

        await waitLoopCallback(() => !!dq1('#audioel-list-container [msaudiocategory="BackgroundCapableMedia"]'), 5000)
        this.audioElLock.ok()
        console.log('initEl ok')

        tassign<SoundCloudController>(this, {
            audioEl: dq1('#audioel-list-container [msaudiocategory="BackgroundCapableMedia"]')
        })
        this.initAudioElEvents()
    }

    protected audioElBaseEventMap: AudioElEventMap = {
        play: () => this.setPlayerState({ isPlaying: true }),
        pause: () => this.setPlayerState({ isPlaying: false }),
        // ? maybe not use this
        // timeupdate: () => this.setPlayerState({ currentTime: this.audioEl.currentTime }),
        durationchange: () => this.setPlayerState({ duration: this.audioEl.duration })
        ,
        // TODO isloading state
        // waiting: () => this.setPlayerState({ isPlaying: false }),
        // canplay: () => 1,
        // progress: () => 1,
    }
    protected audioElObserver: MutationObserver
    protected initAudioElEvents() {
        if (!this.audioEl) throw new Error('No audio el has be created')

        tentries(this.audioElBaseEventMap).forEach(([event, fn]) => {
            this.audioEl.addEventListener(event, fn as any)
        })

        this.audioElObserver = new MutationObserver((mutationList) => {
            for (const mutation of mutationList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
                    const el = mutation.target as HTMLAudioElement,
                        src = el.getAttribute('src')
                    if (!src) return

                    let newPlayerState = this.forceGetPlayerState()
                    console.log('audio update', newPlayerState)
                    this.setPlayerState(newPlayerState)
                }
            }
        })

        this.audioElObserver.observe(this.audioEl, { attributes: true })
    }

    // TODO action in origin soundCloud page
    // protected observer:MutationObserver = new MutationObserver((mutationList) => {
    //     for (const mutation of mutationList) {
    //         if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
    //             const el = mutation.target as HTMLAudioElement,
    //                 src = el.getAttribute('src')
    //             if (!src) return

    //             let newPlayerState = this.forceGetPlayerState()
    //             this.setPlayerState(newPlayerState)
    //         }
    //     }
    // }) 
    bindElEvent(el: HTMLElement, type: 'click' | 'attr') {
        switch (type) {
            case 'click': {
                el.addEventListener('click', () => this.setPlayerState(this.forceGetPlayerState()))
                break
            }
            case 'attr': {

            }
        }
    }

    setPlayerState(newState: Partial<PlayerState>) {
        let isUpdate = tentries(newState).find(([key, val]) =>
            this.playerState[key] !== val
        )

        if (isUpdate) {
            tassign(this.playerState, { ...this.forceGetPlayerState(), ...newState })
            this.emitPlayerStateChange()
        }
    }

    protected playerStateChangeCallbacks: ((playerState: PlayerState) => void)[] = []
    onPlayerStateChange(callback: (playerState: PlayerState) => void) {
        this.playerStateChangeCallbacks.push(callback)
    }
    offPlayerStateChange(callback: (playerState: PlayerState) => void) {
        this.playerStateChangeCallbacks.splice(this.playerStateChangeCallbacks.findIndex(cb => cb === callback))
    }
    emitPlayerStateChange() {
        this.playerStateChangeCallbacks.forEach(cb => cb(this.playerState))
    }

    forceGetPlayerState(): PlayerState {
        return {
            audioEl: this.audioEl,
            duration: this.audioEl.duration || formatTime2realTime(dq1('.playbackTimeline__duration span[aria-hidden]').textContent),
            currentTime: this.audioEl.currentTime,
            isPlaying: !this.audioEl.paused,
            volume: this.audioEl.volume,
            repectMode: (this.repectBtnEl.classList.contains('m-one') && 'one') ||
                (this.repectBtnEl.classList.contains('m-all') && 'all') ||
                'none',
            isShuffle: this.shuffleBtnEl.classList.contains('m-shuffling'),
            isMute: this.volumeBtnEl.classList.contains('muted'),
            ...this.getTrackInfo(),
        }
    }

    getTrackInfo() {
        let titleEl = dq1<HTMLAnchorElement>('a.playbackSoundBadge__titleLink'),
            artworkEl = dq1('.playbackSoundBadge span.sc-artwork'),
            artistEl = dq1<HTMLAnchorElement>('a.playbackSoundBadge__lightLink'),
            favBtnEl = dq1('.playbackSoundBadge__like')

        return {
            artwork: artworkEl.style.backgroundImage.match(/^url\(\"(.*)\"\)$/)?.[1] ?? '',
            artist: artistEl.textContent,
            artLink: artistEl.href,
            trackName: titleEl.children[1].textContent,
            trackLink: titleEl.href,
            isFav: favBtnEl.classList.contains('sc-button-selected'),
        }
    }

    async getAudioEl() {
        await this.audioElLock.waiting()
        return this.audioEl
    }
}
