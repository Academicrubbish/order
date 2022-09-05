import { request } from "./request"
import Qs from 'qs'


export function getOrderData(start) {
    return request({
        url: '/orderInfo.php',
        method: 'post',
        data: Qs.stringify({
            start,
            length: 5
        })
    })
}

export function uploadData(str) {
    return request({
        url: '/upload/file',
        method: 'post',
        data: Qs.stringify({
            str
        })
    })
}