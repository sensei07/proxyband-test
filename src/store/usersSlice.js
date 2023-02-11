import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {
    getUsersList as getUsersListAPI,
} from '../api';

export const getUsersList = createAsyncThunk('users/getUsersList', async () => {
    try {
        const response = await getUsersListAPI();
        const data = await response.data;
        return data;
    } catch (e) {
        console.log(e);
        return [];
    }
});


const usersSlice = createSlice({
    name: 'users/usersActions',
    initialState: {
        isLoading: false,
        users: [],
    },
    reducers: {},
    extraReducers: {
        [getUsersList.fulfilled]: (state, {payload}) => ({
            users: payload,
        }),
        [getUsersList.pending]: (state) => ({
            ...state,
        }),
        [getUsersList.rejected]: (state) => ({
            ...state,
        }),
    },
});

export const selectUsers = ({users}) => users.users;
export const selectIsUsersLoading = ({users}) => users.isLoading;

export default usersSlice.reducer;
