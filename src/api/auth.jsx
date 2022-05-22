import fakeApi from "../utils/fakeApi"

export async function requestOtp() {
    return await fakeApi(null, true)
}

export async function onOtpSubmit() {
    return await fakeApi()
}