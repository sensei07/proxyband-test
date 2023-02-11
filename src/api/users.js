import axios from 'axios';

const USERS_API_PATH = '/users';
const POSTS_API_PATH = '/posts';
const ALBUMS_API_PATH = '/albums';

export const getUsersList = async () => await axios.get(`${USERS_API_PATH}`);
export const getUser = async (id) => await axios.get(`${USERS_API_PATH}/${id}`);
export const getUserPosts = async (id) => await axios.get(`${POSTS_API_PATH}?userId=${id}`);
export const getUserAlbums = async (id) => await axios.get(`${ALBUMS_API_PATH}?userId=${id}`);
