import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {
    getUsersList as getUsersListAPI,
    getUser as getUserAPI,
    getUserPosts as getUserPostsAPI,
    getUserAlbums as getUserAlbumsAPI
} from '../api';

export const getUsersList = createAsyncThunk('users/getUsersList', async () => {
    try {
        const response = await getUsersListAPI();
        const {data} = response;
        return data;
    } catch (e) {
        return [];
    }
});

export const getUser = createAsyncThunk('users/getUser', async (id, thunkAPI) => {
    try {
        const response = await getUserAPI(id);
        const {data} = response;
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue({
            status: 'error'
        });
    }
});

export const getUserPosts = createAsyncThunk('users/getUserPosts', async (id, thunkAPI) => {
    try {
        const response = await getUserPostsAPI(id);
        const {data} = response;
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue({
            status: 'error'
        });
    }
});

export const getUserAlbums = createAsyncThunk('users/getUserAlbums', async (id, thunkAPI) => {
    try {
        const response = await getUserAlbumsAPI(id);
        const {data} = response;
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue({
            status: 'error'
        });
    }
});

const usersSlice = createSlice({
    name: 'users/usersActions',
    initialState: {
        isLoading: false,
        users: [],
        posts: []
    },
    reducers: {},
    extraReducers: {
        [getUsersList.fulfilled]: (state, {payload}) => ({
            users: payload,
            isLoading: false,
        }),
        [getUsersList.pending]: (state) => ({
            ...state,
            isLoading: true,
        }),
        [getUsersList.rejected]: (state) => ({
            ...state,
            isLoading: false,
        }),

        [getUserPosts.fulfilled]: (state, {payload}) => ({
            ...state,
            posts: payload,
            isLoading: false,
        }),
        [getUserPosts.pending]: (state) => ({
            ...state,
            isLoading: true,
        }),
        [getUserPosts.rejected]: (state) => ({
            ...state,
            isLoading: false,
        }),
    },
});

export const selectUsers = ({users}) => users.users;
export const selectPosts = ({users}) => users.posts;
export const selectIsLoading = ({users}) => users.isLoading;

export default usersSlice.reducer;
