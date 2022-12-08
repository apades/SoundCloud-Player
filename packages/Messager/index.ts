export default class Messager<MsgMap = dykey>{
    static _messager: Messager<any> = null

    protected onMsgEventMap: {
        [T in keyof MsgMap]: ((
            data: MsgMap[T],
            sender: chrome.runtime.MessageSender,
            // sendResponse: (response?: ResMsgType<MsgMap, keyof MsgMap>) => void
        ) => Promise<ResMsgType<MsgMap, T>> | ResMsgType<MsgMap, T>)[]
    } = {} as any
    isFail: boolean

    constructor() {
        if (Messager._messager) return Messager._messager
        Messager._messager = this
        this.init()
        return this
    }

    protected init() {
        try {
            chrome.runtime.onMessage.addListener(
                (
                    msgData: {
                        type: keyof MsgMap
                        data: MsgMap[keyof MsgMap]
                    },
                    sender,
                    sendRes
                ) => {
                    let type = msgData.type
                    !localStorage.disableMsg
                    console.log('💬rc:onMsg', type, msgData)

                    if (this.onMsgEventMap[type]) {
                        this.onMsgEventMap[type].forEach(async (fn) => {
                            let res = await fn(msgData.data as any, sender)
                            res && sendRes(res)
                        })
                    }
                }
            )
        } catch (error) {
            this.isFail = true
            console.error('Not support chrome messager on this page')
        }
    }

    sendMsg<T extends keyof MsgMap>(message: SendMsgType<MsgMap, T>, toAll = false) {
        return new Promise<ResMsgType<MsgMap, T>>((res, rej) => {
            if (toAll)
                res(chrome.runtime.sendMessage(message))
            return chrome.tabs.query(
                {
                    active: true,
                    currentWindow: true,
                },
                (tabs) => res(chrome.tabs.sendMessage(tabs[0].id, message))
            )
        })

    }

    sendMsgToAll<T extends keyof MsgMap>(message: SendMsgType<MsgMap, T>) {
        return this.sendMsg(message, true)
    }

    onMsg<T extends keyof MsgMap>(
        type: T,
        callback: (
            data: Omit<MsgMap[T], '$res'>,
            sender: chrome.runtime.MessageSender,
            // sendResponse: (response?: ResMsgType<MsgMap, T>) => void
        ) => Promise<ResMsgType<MsgMap, T>> | ResMsgType<MsgMap, T>
    ) {
        if (this.isFail) return console.error('Not support chrome messager on this page')
        this.onMsgEventMap[type] = this.onMsgEventMap[type] ?? []
        this.onMsgEventMap[type].push(callback)
    }

    offMsg<T extends keyof MsgMap>(
        type: T,
        callback: (
            data: Omit<MsgMap[T], '$res'>,
            sender: chrome.runtime.MessageSender,
            // sendResponse: (response?: ResMsgType<MsgMap, T>) => void
        ) => Promise<ResMsgType<MsgMap, T>> | ResMsgType<MsgMap, T>
    ): void {
        this.onMsgEventMap[type] = this.onMsgEventMap[type] ?? []
        let index = this.onMsgEventMap[type].findIndex((fn) => fn === callback)
        index !== -1 && this.onMsgEventMap[type].splice(index, 1)
    }
}

type SendMsgType<Msgmap extends dykey, T extends keyof Msgmap> = {
    type: T
} & (Msgmap[T] extends null
    ? // eslint-disable-next-line @typescript-eslint/ban-types
    {}
    : {
        data: Omit<Msgmap[T], '$res'>
    })

type ResMsgType<Msgmap extends dykey, T extends keyof Msgmap> = (Msgmap[T]['$res'] extends null
    ? // eslint-disable-next-line @typescript-eslint/ban-types
    null
    : Msgmap[T]['$res']
)