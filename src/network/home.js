import { request } from "./request";

export function getHomeData(type = 1) {
  return request({
    url: "/order/list",
    params: {
      type,
    },
  });
}

export function searchHomeData(orderName) {
  return request({
    url: "/order/selectLike",
    params: {
      orderName,
    },
  });
}
