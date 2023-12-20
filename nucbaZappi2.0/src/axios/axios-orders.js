import axios from 'axios'

// SUELE IR EN VARIABLES DE ENTORNO (SE LOS CONOCE COMO ARCHIVOS .env) en vite es distinto
import { BASE_URL } from '../utils/constants'
import { createOrderFail, fetchOrderSuccess, fetchOrdersFail, fetchOrdersStart } from '../redux/orders/ordersSlice';

export const getOrders = async (dispatch, currentUser) => {
    dispatch(fetchOrdersStart())
    try {
        const orders = await axios.get(`${BASE_URL}/orders`, {
            headers: {
                'x-token': currentUser.token
            }
        })
        if(orders){
            dispatch(fetchOrderSuccess(orders.data.data));
        }
    } catch (error) {
        console.log(error);
        dispatch(fetchOrdersFail('Upsss, algo salio mal. No hay ordenes sin usuario, es como querer jugar al futbol sin una pelota.'));
    }
}
export const createOrder = async (order, dispatch, currentUser) => {
    try {
        const response = await axios.post(`${BASE_URL}/orders`,order, {
            headers: {
                'x-token': currentUser.token
            }
        })
        if(response){
            getOrders(dispatch, currentUser)
        }
    } catch (error) {
       dispatch(createOrderFail())
    }
}

