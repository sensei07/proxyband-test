import {UsersPage, UserDetailsPage} from '../main/pages/users';
import {Home} from '../main/pages/home';
import {PATHS} from './paths';

export const ROUTES = [
    {path: PATHS.USERS, element: UsersPage},
    {path: PATHS.USER_DETAILS, element: UserDetailsPage},
    {path: PATHS.HOME, element: Home}
];

