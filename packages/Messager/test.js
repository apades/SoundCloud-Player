import Messager from './index'
/**@type {Messager<CusMsgMapjs>} */
let messager = new Messager()

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