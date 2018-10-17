function httpService () {
    const serverPath = 'http://89.108.65.123:8080';
    this.method = {
        GET: 'GET',
        POST: 'POST',
        DELETE: 'DELETE'
    }
    this.request =  async function(url='/',method = this.method.GET, body){
        return await fetch(`${serverPath}${url}`,{
            method: method
        }).then( data => data.json())
        // .then( data2 => {
        //     console.log(data2)
        //     return data2;
        // })
    }
}

var $http = new httpService();
let userID = null;
const getUser = async (user) => {
    if (user) return await $http.request(`/shop?user_id=${user}`)
    return await $http.request(`/shop`)
}
const getU = async (arg) => {
    const user = await getUser(arg)
    return user;
}
const addProducts = async (user,name,price) => {
    const product = await $http.request(`/shop?user_id=${user}&product=${name}&price=${price}`,$http.method.POST);
    console.log(product);
    return product;
}
const deleteProduct = async (user,prodId) => {
    const product = await $http.request(`/shop?user_id=${user}&product_id=${prodId}`,$http.method.DELETE);
    // console.log(product)
    return product.cart
}

var app = new Vue({
    el: '#cards',
    data: {
        userId: '',
        seeUser: true,
        seeAdd: false,
        nameProduct: '',
        priceProduct: '',
        card: [
        ]
    },
    computed: {
        newuserId: async function(){
            return await getU()
        }
    },
    methods: {
        getUser: async function(){
            const user = await getU(this.userId)
            this.userId = user.user_id
            this.card = user.cart
            this.seeUser = false;
            this.seeAdd = !this.seeUser
        },
        addProduct: async function() {
            this.card.push(await addProducts(this.userId,this.nameProduct,this.priceProduct))
        },
        deleteProduct: async function(e) {
            const productId = e.target.closest('.card-body').id
            const card = await deleteProduct(this.userId, productId)
            // console.log(card);
            this.card = card
        }
    }
})


//тестовый пользователь _26jf0k6ca