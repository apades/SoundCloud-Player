declare type MessageRequest = {
    type: MessageType
    data: void
    res: void
} | {
    type: 'playerStateUpdate'
    data: void
    res: PlayerState
}

declare type MessageType = 'prev' | 'next' | 'play' | 'pause' | 'toggle' | 'toggle' | 'unfav' | 'fav' | 'repeat' | 'shuffle' | 'mute' | 'unmute' | 'up' | 'down' | 'seekb' | 'seekf' | ''
declare type MessageType_popup = `popup:${MessageType}`
declare type MessageType_soundcloundPage = `sc:${MessageType}`

declare type MessageResponse = void

declare function RuntimeOnMessage(callback: <Req extends MessageRequest, Res = Req['res']>(type: Req) => Promise<Res>): void

declare type PlayerState = {
    /**maybe is null, use ?. */
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

declare type MsgMap = {
    'sc:trackChange': PlayerState
    'sc:stateUpdate': PlayerState
    'getPlayerState': {
        $res: PlayerState
    }
}

// declare type SoundCloudController = typeof import('../packages/SoundCloudController/SoundCloudControllerExt')
// interface Window {
//     SoundCloudController: typeof import('../packages/SoundCloudController/SoundCloudControllerExt')
// }