import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const { REACT_APP_API_BASE_URL: apiBaseURL } = process.env;

const homeApiSlice = createSlice({
    name: 'homeApi',
    initialState: {
        value: null
    },
    reducers: {
        homeApi: (state, action) => {
            state.value = action.payload;
        },
    },
});

const { homeApi } = homeApiSlice.actions;

export const homeApiReducer = homeApiSlice.reducer;

export const fetchHomeApi = () => {
    return async function fetchHomeApiThunk(dispatch) {
        try {
            let data = await axios.get(apiBaseURL + 'home');
            data = data.data;
            dispatch(homeApi(data));
        }
        catch (err) {
            console.log(err);
        }
    }
}