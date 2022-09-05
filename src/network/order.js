import { request } from "./request"
import Qs from 'qs'


export function addOrder(one, two) {
    return request({
        url: '/addOrder.php',
        method: 'post',
        data: Qs.stringify({
            one,
            two
        })
    })
}