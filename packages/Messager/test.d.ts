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