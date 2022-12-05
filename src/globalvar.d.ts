import type _SoundCloudControllerExt from "../packages/SoundCloudController/SoundCloudControllerExt";


// declare const SoundCloudController: _SoundCloudController
// export = SoundCloudController
declare global {
    var SoundCloudControllerExt: typeof _SoundCloudControllerExt

    interface SoundCloudControllerExt extends InstanceType<typeof _SoundCloudControllerExt> { }

    var browser: any
}