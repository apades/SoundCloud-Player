
type CusMsgMapjs = {
    'onlySendNull': null
    'onlySend': {
        ddd: 1
    }
    'onlyBack': {
        $res: {
            ddd: 2
        }
    }
    'send&back': {
        name: string,
        $res: {
            bb: number,
            aaa: string
        }
    }
}
type ProtocolWithReturn<T, B> = import('@webext-core/messaging').ProtocolWithReturn<T, B>
type ProtocolMap = {
    message1: undefined;                              // No data and no return type
    message2: { data: number, state: 2 };                                 // Only data
    message3: ProtocolWithReturn<undefined, boolean>; // Only a return type
    message4: ProtocolWithReturn<string, boolean>;    // Data and return type
}