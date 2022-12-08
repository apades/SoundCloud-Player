import Messager from './index'
import {
    defineExtensionMessaging as _defineExtensionMessaging
} from '@webext-core/messaging'
/**@type {Messager<ProtocolMap>} */
let messager = new Messager()

/**@type {typeof _defineExtensionMessaging<ProtocolMap>} */
let defineExtensionMessaging = _defineExtensionMessaging
let { sendMessage } = defineExtensionMessaging()
sendMessage('')

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