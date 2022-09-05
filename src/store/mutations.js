export default {
    /*
     * 详情页往store的cartList添加数据(把数据加入购物车)  */
    addCart(state, payload) {
        // payload为新添加商品的信息
        //查找cartList里是否有点这份餐
        let oldProduct = state.cartList.find(item => item.id === payload.id)
        if (oldProduct) {
            oldProduct.count++
        } else {
            payload.count = 1
            state.cartList.push(payload)
        }
    },

    /**
     * 购物车内的操作 */

    //用于记录物品计数器状态
    cartCount(state, payload) {
        for (let item = 0; item < state.cartList.length; item++) {
            //找到正在操作的这一项
            if (state.cartList[item].id == payload.id) {
                //实时记录计时器里的count并赋值记录
                //如果count为0，就删除这一项
                if (payload.count == 0) {
                    state.cartList.splice(item, 1)
                } else {
                    state.cartList[item].count = payload.count
                }
            }
        }
    },

    //用于记录购物车里物品的选中状态，以及价格统计
    cartPrice(state, payload) {
        for (let item of state.cartList) {
            if (item.id == payload.id) {
                item.checked = !item.checked;
            }
        }
    },

    //bottom的全选
    allChecked(state) {
        state.allChecked = !state.allChecked;
        if (state.allChecked) {
            for (let item of state.cartList) {
                item.checked = true;
            }
        } else {
            for (let item of state.cartList) {
                item.checked = false;
            }
        }
    },

    //更新购物车状态
    renew(state) {
        state.priceSum = 0
        state.num = 0
        for (let item of state.cartList) {
            if (item.checked) {
                state.priceSum += item.price * item.count
                state.num += 1
            }
        }
        //判断是否全选
        if (state.num == state.cartList.length) {
            state.allChecked = true
        } else {
            state.allChecked = false
        }
        //如果数组没有数据，那么所有都没数据
        if (state.cartList.length == 0) {
            state.allChecked = false
        }
    },
    addFoodList(state, payload) {
        state.foodList = payload
    },

    /**
     * 下单页order */
    //把用户下单的数据进行处理
    changeOrderList(state, payload) {
        const list = [];
        for (let item of state.cartList) {
            if (item.checked == true) {
                const product = {};
                product.time = payload.time;
                product.name = payload.name;
                product.image = item.imagePath;

                //把用户下单的数据存到用户订单页
                state.orderList.push(product);
                list.push(product);
            }
        }
        //把用户新下单的数据替换收货页
        state.pendingList = list;
    },

    //下单完成后，删除选中的商品
    deleteCartList(state) {
        for (let i = 0; i < state.cartList.length;) {
            //由于splice是改变原数组
            //所以删除一个之后，剩下的就继承了他的下标
            //原下标就是一个新的数据
            if (state.cartList[i].checked) {
                state.cartList.splice(i, 1)
            } else {
                i++
            }
        }
    },

    /*
     * 登录页 */

    //登录把用户的token记录
    changeToken(state, payload) {
        state.token = payload.token
        state.userName = payload.userName
    },

    //将storage的数据传给store
    renewState(state, payload) {
        state.cartList = payload.nowCartList
        state.orderList = payload.orderList
        state.address = payload.address
        state.nickName = payload.nickName
    },

    //实时根据store的数据更新storage
    renewStorage(state) {
        const orderList = state.orderList; //用户曾经的订单
        const nowCartList = state.cartList; //用户当前的购物车记录
        const address = state.address; //用户默认地址
        const nickName = state.nickName; //用户昵称

        var str = JSON.stringify({ orderList, nowCartList, address, nickName })
        localStorage.setItem(state.token, str);
    },

    //修改昵称
    changeNickName(state, payload) {
        state.nickName = payload.name
    },
    //修改默认地址
    changeAddress(state, payload) {
        state.address = payload.address
    },
    //修改订单
    changelist(state, payload) {
        state.orderList = payload.list
    },
    //退出登录
    Logout(state) {
        state.token = '';
        state.cartList = [];
        state.allChecked = false;
        state.priceSum = 0;
        state.num = 0;
        state.pengdingList = [];
        state.orderList = [];
        state.address = '';
        state.nickName = '未命名';
    }
}