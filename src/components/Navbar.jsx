import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate()

    return (
        <nav className='h-16 flex items-center px-12'>
            <ul className='flex text-lg font-medium gap-9'>
                <li>
                    <NavLink to='/main/client-map' className='hover:text-primary'>
                        Mapa cliente
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/main/client-table' className='hover:text-primary'>
                        Tabla cliente
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/main/heat-map' className='hover:text-primary'>
                        Mapa calor
                    </NavLink>
                </li>
            </ul>
            <button onClick={() => navigate('/login')} className='ml-auto bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary'>
                Cerrar sesión
            </button>
        </nav>
    );
}

export default NavBar