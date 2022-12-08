import Messager from "."

type CusMsgMap = {
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

let messager = new Messager<CusMsgMap>

messager.sendMsg({
    type: 'onlySendNull',
})
messager.sendMsg({
    type: 'onlySend',
    data: {
        ddd: 1
    }
})
messager.sendMsg({
    type: 'onlyBack',
    // TODO maybe future can remove this
    data: null
})

messager.sendMsg({
    type: 'send&back',
    data: {
        name: '2'
    }
}).then(res => {
    console.log('res', res.aaa)
})

messager.onMsg('send&back', (data, sender) => {
    console.log('data', data.name)
    return {
        aaa: '',
        bb: 1
    }
})


