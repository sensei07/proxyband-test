import axios from 'axios';

const USERS_API_PATH = '/users';

export const getUsersList = async () => await axios.get(`${USERS_API_PATH}`);

