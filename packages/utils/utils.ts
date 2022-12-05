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