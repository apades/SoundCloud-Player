declare type MessageRequest = {
    type: 'prev' | 'next' | 'play' | 'pause' | 'toggle' | 'toggle' | 'unfav' | 'fav' | 'repeat' | 'shuffle' | 'mute' | 'unmute' | 'up' | 'down' | 'seekb' | 'seekf'
} | {
    type: 'playerStateUpdate'
    data: PlayerState
}

declare type MessageResponse = void

declare function browserRuntimeOnMessage(callback: (type: MessageRequest) => Promise<MessageResponse>): void

declare type PlayerState = {
    audioEl: HTMLAudioElement
    duration: number
    currentTime: number

    artwork: string
    artist: string
    artLink: string

    trackName: string
    trackLink: string

    volume: number

    isPlaying: boolean
    isFav: boolean
    repectMode: 'none' | 'one' | 'all'
    isShuffle: boolean
    isMute: boolean
}

declare function audioElAddEventListener(type: ''): void

declare type AudioElEventMap = {
    [k in keyof HTMLMediaElementEventMap]?: (
        event: HTMLMediaElementEventMap[k]
    ) => void
}

declare type dykey<T = any> = {
    [key: string]: T
}

// declare type SoundCloudController = typeof import('../packages/SoundCloudController/SoundCloudControllerExt')
// interface Window {
//     SoundCloudController: typeof import('../packages/SoundCloudController/SoundCloudControllerExt')
// }