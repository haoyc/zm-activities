const getters = {
  sidebar: state => state.app.sidebar,
  route: state => state.app.route,
  isConfirmOrderStatus: state => state.app.isConfirmOrderStatus,
  inventoryCard: state => state.app.inventoryCard,

  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  mobile: state => state.user.mobile,
  shopCar: state => state.user.shopCar,
  shopCarNum: state => state.user.shopCarNum,
  shopCarPrice: state => state.user.shopCarPrice,
  orderInfo: state => state.user.orderInfo,
  mutiShopCar: state => state.user.mutiShopCar
}
export default getters