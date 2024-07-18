import { useRoutes } from 'react-router-dom'
import Login from '../pages/Login'
import Layout from '../pages/Layout'
import ClientMap from '../pages/ClientMap'
import ClientTable from '../pages/ClientTable'
import HeatMap from '../pages/HeatMap'

const Navigation = () => {
    // Routes definition
    let routes = useRoutes([
        { path: '/', element: <Login /> },
        { path: '/login', element: <Login /> },
        {
            path: '/main', element: <Layout />,
            children: [
                { path: '', element: <ClientMap /> },
                { path: 'client-map', element: <ClientMap /> },
                { path: 'client-table', element: <ClientTable /> },
                { path: 'heat-map', element: <HeatMap /> },
            ]
        },
    ])

    return routes
}

export default Navigation