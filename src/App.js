import axios from 'axios';
import {ABSOLUTE_API_HOST} from './constants/API';

import {Route, Routes} from 'react-router-dom';
import {ROUTES} from './constants/routes';
import {Header} from './main/components/Header/Header';

axios.defaults.baseURL = ABSOLUTE_API_HOST;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

function App() {
    return (
        <>
            <Header/>
            <Routes>
                {ROUTES.map((route) => (
                    <Route key={route.path} path={route.path} element={<route.element/>}/>
                ))}
            </Routes>
        </>
    );
}

export default App;
