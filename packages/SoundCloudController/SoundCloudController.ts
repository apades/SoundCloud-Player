import { tassign, dq1, tentries } from "../utils/utils"

export default class SoundCloudController {
    titleEl: HTMLAnchorElement
    artistEl: HTMLAnchorElement
    artworkEl: HTMLSpanElement
    playBtnEl: HTMLDivElement

    favBtnEl: HTMLButtonElement
    repectBtnEl: HTMLButtonElement
    shuffleBtnEl: HTMLButtonElement
    volumeBtnEl: HTMLButtonElement

    tarAudioEl: HTMLAudioElement

    playerState = {} as PlayerState

    constructor() {
        console.log('create SoundCloudController')
        this.initEl()
        this.initAudioElEvents()
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

            // ? maybe not data-index="1"
            tarAudioEl: dq1('#audioel-list-container [data-index="1"]')
        })
    }

    protected audioElBaseEventMap: AudioElEventMap = {
        play: () => this.setPlayerState({ isPlaying: true }),
        pause: () => this.setPlayerState({ isPlaying: false }),
        timeupdate: () => this.setPlayerState({ currentTime: this.tarAudioEl.currentTime }),
        durationchange: () => this.setPlayerState({ currentTime: this.tarAudioEl.duration }),
        // ? isloading state
        // waiting: () => 1,
        // canplay: () => 1,
        // canplaythrough: () => 1,
        // progress: () => 1,
    }
    protected audioElObserver: MutationObserver
    protected initAudioElEvents() {
        if (!this.tarAudioEl) throw new Error('No audio el has be created')

        tentries(this.audioElBaseEventMap).forEach(([event, fn]) => {
            this.tarAudioEl.addEventListener(event, fn as any)
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

        this.audioElObserver.observe(this.tarAudioEl, { attributes: true })
    }

    setPlayerState(newState: Partial<PlayerState>) {
        let isUpdate = tentries(newState).find(([key, val]) =>
            this.playerState[key] !== val
        )
        console.log('setPlayerState', isUpdate)

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
            audioEl: this.tarAudioEl,
            duration: this.tarAudioEl.duration,
            currentTime: this.tarAudioEl.currentTime,
            isPlaying: !this.tarAudioEl.paused,

            ...this.getArtistInfo(),

            trackName: this.titleEl.textContent,
            trackLink: this.titleEl.href,

            volume: this.tarAudioEl.volume,

            isFav: this.favBtnEl.classList.contains('sc-button-selected'),
            repectMode: (this.repectBtnEl.classList.contains('m-one') && 'one') ||
                (this.repectBtnEl.classList.contains('m-all') && 'all') ||
                'none',
            isShuffle: this.shuffleBtnEl.classList.contains('m-shuffling'),
            isMute: this.volumeBtnEl.classList.contains('muted')
        }
    }

    getArtistInfo() {
        return {
            artwork: this.artworkEl.style.backgroundImage.match(/^url\(\"(.*)\"\)$/)?.[1] ?? '',
            artist: this.artistEl.textContent,
            artLink: this.artistEl.href,
        }
    }
}
