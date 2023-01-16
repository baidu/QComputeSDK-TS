import Define from "./Define";


export function matchSdkVersion(tagretVersion: string) {
    if (Define.sdkVersion != tagretVersion)
        console.error(`This example(${tagretVersion}) `
            + `does not match the correct sdk version(${Define.sdkVersion}). `
            + 'Please update the sdk.'
        );
}