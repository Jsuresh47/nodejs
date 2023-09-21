import {USERS} from './types';
import { Service } from '../../api/Members';

export function getUsers(){
    return async function (dispatch) {
        try {
            const res = await Service.getUsers();
            dispatch({
                type: USERS.GET_USERS,
                payload: res.data,
            });
            return Promise.resolve(res.data)
        } catch(err){
            return Promise.reject(err);
        }
    }
} 

