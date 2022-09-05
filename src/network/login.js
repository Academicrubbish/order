import {request} from "./request"
import Qs from 'qs'


export function loginToken(userName, password) {
  return request({
    url:'/loginToken.php',
    method: 'post',
    data: Qs.stringify({
      userName,
      password
    })
  })
}