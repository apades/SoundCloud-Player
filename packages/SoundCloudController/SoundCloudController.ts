import { AsyncLock } from "../utils/AsyncLock"
import { tassign, dq1, tentries, waitLoopCallback } from "../utils/utils"

export default class SoundCloudController {
    titleEl: HTMLAnchorElement
    artistEl: HTMLAnchorElement
    artworkEl: HTMLSpanElement
    playBtnEl: HTMLDivElement

    favBtnEl: HTMLButtonElement
    repectBtnEl: HTMLButtonElement
    shuffleBtnEl: HTMLButtonElement
    volumeBtnEl: HTMLButtonElement

    audioEl: HTMLAudioElement
    audioElLock = new AsyncLock()

    playerState = {} as PlayerState

    constructor() {
        this.initEl()
    }

    protected initEl() {
        tassign<SoundCloudController>(this, {
            titleEl: dq1('a.playbackSoundBadge__titleLink'),
            artistEl: dq1('a.playbackSoundBadge__lightLink'),
            artworkEl: dq1('.playbackSoundBadge span.sc-artwork'),
            playBtnEl: dq1('.playControl.sc-ir.playControls__control.playControls__play'),

            favBtnEl: dq1('.playbackSoundBadge__like'),
            repectBtnEl: dq1('.repeatControl'),
            shuffleBtnEl: dq1('.shuffleControl'),
            volumeBtnEl: dq1('.volume button[type="button"]'),
        })

        waitLoopCallback(() => !!dq1('#audioel-list-container [data-index="1"]'), 5000).then(() => {
            this.audioElLock.ok()
            // ? maybe not data-index="1"
            this.audioEl = dq1('#audioel-list-container [data-index="1"]')
            this.initAudioElEvents()
        })
    }

    protected audioElBaseEventMap: AudioElEventMap = {
        play: () => this.setPlayerState({ isPlaying: true }),
        pause: () => this.setPlayerState({ isPlaying: false }),
        // TODO? maybe not use this
        timeupdate: () => this.setPlayerState({ currentTime: this.audioEl.currentTime }),
        durationchange: () => this.setPlayerState({ duration: this.audioEl.duration })
        ,
        // TODO? isloading state
        // waiting: () => 1,
        // canplay: () => 1,
        // canplaythrough: () => 1,
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
                    this.setPlayerState(newPlayerState)
                }
            }
        })

        this.audioElObserver.observe(this.audioEl, { attributes: true })
    }

    // TODO action in origin soundCloud page

    setPlayerState(newState: Partial<PlayerState>) {
        let isUpdate = tentries(newState).find(([key, val]) =>
            this.playerState[key] !== val
        )

        if (isUpdate) {
            tassign(this.playerState, newState)
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
            duration: this.audioEl.duration,
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
        return {
            artwork: this.artworkEl.style.backgroundImage.match(/^url\(\"(.*)\"\)$/)?.[1] ?? '',
            artist: this.artistEl.textContent,
            artLink: this.artistEl.href,
            trackName: this.titleEl.textContent,
            trackLink: this.titleEl.href,
            isFav: this.favBtnEl.classList.contains('sc-button-selected'),
        }
    }

    async getAudioEl() {
        await this.audioElLock.waiting()
        return this.audioEl
    }
}
