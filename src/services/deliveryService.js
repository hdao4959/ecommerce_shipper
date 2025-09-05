import { axiosInstance } from "../utils/axios"

export const DELIVERY_STATUS = {
   'shipping': {
    badge_color: 'warning',
    badge_name: 'Đang giao hàng'
   }, // Đang giao hàng
  'completed': {
    badge_name: "Đã giao",
    badge_color: 'success'
  }, // Giao thành công
  'returned': {
    badge_name: "Hoàn hàng",
    badge_color: 'danger'
  }, // Đơn hàng bị trả lại
}
const getListDelivery = () => {
  return axiosInstance.get('/deliveries')
}

const getDetailDelivery = (id) => {
  return axiosInstance.get('/deliveries/' + id);
}

export default {
  getListDelivery, getDetailDelivery
}