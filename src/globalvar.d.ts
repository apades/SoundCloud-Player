import type _SoundCloudControllerExt from "../packages/SoundCloudController/SoundCloudControllerExt";
import type _Messager from '../packages/Messager'


// declare const SoundCloudController: _SoundCloudController
// export = SoundCloudController
declare global {
    var SoundCloudControllerExt: typeof _SoundCloudControllerExt

    interface SoundCloudControllerExt extends InstanceType<typeof _SoundCloudControllerExt> { }

    var Messager: typeof _Messager
    interface Messager extends InstanceType<typeof _Messager> { }

    var browser: any
}