import axios from 'axios';
import { FETCH_USER, HANDLE_TOKEN } from './types';

export const fetchUser =  () => async (dispatch) => {
    const response = await axios.get('/api/current_user');
    dispatch ({ type: FETCH_USER, payload: response});
};

export const handleToken = (token) => async (dispatch) => {
    const response = await axios.post('/api/strip', token);
    dispatch({ type: FETCH_USER, payload: response.data});
}