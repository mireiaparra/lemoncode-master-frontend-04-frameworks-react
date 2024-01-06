import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { DetailScene, ListScene, LoginScene } from '../scenes';


export const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={switchRoutes.root} element={<LoginScene/>} />
                <Route path={switchRoutes.list} element={<ListScene/>} />
                <Route path={switchRoutes.detail} element={<DetailScene/>} />

            </Routes>
        </Router>
    );
}
