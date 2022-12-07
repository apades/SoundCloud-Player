import Messager from './index'
/**@type {Messager<CusMsgMapjs>} */
let a = new Messager()

a.sendMsg({
    type: 'cb',
    data: {
        name: '1'
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