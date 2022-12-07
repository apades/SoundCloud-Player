import { isNumber } from "lodash"

export const dq1: { <E extends Element = HTMLDivElement>(selectors: string): E | null } = document.querySelector.bind(document) as typeof document.querySelector
export function tassign<T extends dykey>(tarObj: T, merObj: Partial<T>) {
    return Object.assign(tarObj, merObj)
}

type Entries<T> = {
    [K in keyof T]: [K, T[K]]
}[keyof T][]
export function tentries<T extends dykey>(obj: T): Entries<T> {
    return Object.entries(obj)
}


export let isNull = (data: unknown): data is undefined | null =>
    data === null || data === undefined

export let wait = (time = 0): Promise<void> =>
    new Promise((res) =>
        setTimeout(() => {
            res()
        }, time)
    )

// TODO Promise<boolean>
type WaitLoop = {
    (cb: () => boolean /* | Promise<boolean> */, limitTime?: number): Promise<boolean>
    // TODO 
    (cb: () => boolean /* | Promise<boolean> */, option?: Partial<{
        intervalTime: number
        intervalCount: number
        limitTime: number
    }>): Promise<boolean>
}
export let waitLoopCallback: WaitLoop = (cb, option = 5000) => {
    return new Promise(async (res, rej) => {
        if (isNumber(option)) {
            let timmer: NodeJS.Timeout
            let initTime = new Date().getTime()
            let loop = () => {
                let rs = cb()
                if (!rs) {
                    if (!isNull(option) && new Date().getTime() - initTime > option) return res(false)
                    return timmer = setTimeout(() => {
                        loop()
                    }, 500)
                } else return res(true)
            }
        }
    })
}