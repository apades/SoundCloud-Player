import type _SoundCloudControllerExt from "../packages/SoundCloudController/SoundCloudControllerExt";
import type _Messager from '../packages/Messager'
import type Browser from 'webextension-polyfill'


// declare const SoundCloudController: _SoundCloudController
// export = SoundCloudController
declare global {
    var SoundCloudControllerExt: typeof _SoundCloudControllerExt

    interface SoundCloudControllerExt extends InstanceType<typeof _SoundCloudControllerExt> { }

    var Messager: typeof _Messager
    interface Messager<T> extends InstanceType<typeof _Messager<T>> { }

    var browser: typeof Browser
}