import { request } from "./request";

export function getDetailData(id = 1) {
    return request({
        url: "/order/findOne",
        params: {
            id
        },
    });
}