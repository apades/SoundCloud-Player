import Messager from "."

type CusMsgMap = {
    // 'fncb': (data: { url: string }) => { name: string }
    // 'fnnull': (data: { url: string }) => null
    // 'allnull': () => null
    // 'sc:init2': {
    //     url2: string,
    //     name2: number
    // }
    'sc:init': null
    'cb': {
        name: string,
        $res: {
            bb: number,
            aaa: string
        }
    }
}

let a = new Messager<CusMsgMap>

a.sendMsg({
    type: 'cb',
    data: {
        name: '2'
    }
}).then(res => {
    console.log('res', res.aaa)
})

a.onMsg('cb', (data, sender) => {
    console.log('data', data.name)
    return {
        aaa: '',
        bb: 1
    }
})