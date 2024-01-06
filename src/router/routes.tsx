import { generatePath } from "react-router-dom";

interface switchRoutes {
    root: string;
    list: string;
    detail: string;
}

interface Routes extends Omit<switchRoutes, 'detail'> {
    detail: (id: string) => string;
}

export const switchRoutes: switchRoutes = {
    root: '/',
    list: '/list',
    detail: '/detail/:id',
    
};

export const routes: Routes = {
    ...switchRoutes,
    detail: (id: string) => generatePath(switchRoutes.detail, { id })
};
