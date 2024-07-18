import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Bars3BottomLeftIcon, ArrowLeftStartOnRectangleIcon, XCircleIcon } from '@heroicons/react/24/outline'

const NavBar = () => {

    // Navigation function
    const navigate = useNavigate()
    const location = useLocation()

    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <>
            <div className='flex justify-between items-center pb-2 bg-primary tablet:bg-transparent'>
                <button onClick={handleShowMenu} className='p-2 text-white rounded-lg m-4 tablet:hidden'>
                    {
                        showMenu ? <XCircleIcon className='w-6 h-6' /> : <Bars3BottomLeftIcon className='w-6 h-6' />
                    }
                </button>
                <nav className='h-16 hidden flex-col items-center px-12 tablet:flex tablet:flex-row'>
                    <ul className='flex text-lg font-medium gap-9'>
                        <li>
                            <NavLink to='/main/client-map' className='hover:text-primary'>
                                {
                                    // Conditional rendering of the active link
                                    location.pathname === '/main/client-map' ? (
                                        <span className='border-b-2 border-primary pb-1 text-primary'>
                                            Mapa cliente
                                        </span>
                                    ) : (
                                        <span>
                                            Mapa cliente
                                        </span>
                                    )
                                }
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/main/client-table' className='hover:text-primary'>
                                {
                                    // Conditional rendering of the active link
                                    location.pathname === '/main/client-table' ? (
                                        <span className='border-b-2 border-primary pb-1 text-primary'>
                                            Tabla cliente
                                        </span>
                                    ) : (
                                        <span>
                                            Tabla cliente
                                        </span>
                                    )
                                }
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/main/heat-map' className='hover:text-primary'>
                                {
                                    // Conditional rendering of the active link
                                    location.pathname === '/main/heat-map' ? (
                                        <span className='border-b-2 border-primary pb-1 text-primary'>
                                            Mapa de calor
                                        </span>
                                    ) : (
                                        <span>
                                            Mapa de calor
                                        </span>
                                    )
                                }
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <button onClick={() => navigate('/login')} className=' bg-primary text-white m-2 px-2 py-2 rounded-lg hover:bg-secondary'>
                    Cerrar sesión
                </button>
            </div>
            {
                showMenu && (
                    <div className='tablet:hidden'>
                        <nav className='flex flex-col pb-6 items-center px-12 bg-primary text-white tablet:flex-row tablet:h-16 tablet:bg-transparent tablet:text-black'>
                            <ul className='flex flex-col text-lg font-medium gap-9 tablet:flex-row'>
                                <li>
                                    <NavLink to='/main/client-map' onClick={() => handleShowMenu()} className='tablet:hover:text-primary'>
                                        {
                                            // Conditional rendering of the active link
                                            location.pathname === '/main/client-map' ? (
                                                <span className='border-b-2 tablet:border-primary pb-1 tablet:text-primary'>
                                                    Mapa cliente
                                                </span>
                                            ) : (
                                                <span>
                                                    Mapa cliente
                                                </span>
                                            )
                                        }
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/main/client-table' onClick={() => handleShowMenu()} className='tablet:hover:text-primary'>
                                        {
                                            // Conditional rendering of the active link
                                            location.pathname === '/main/client-table' ? (
                                                <span className='border-b-2 tablet:border-primary pb-1 tablet:text-primary'>
                                                    Tabla cliente
                                                </span>
                                            ) : (
                                                <span>
                                                    Tabla cliente
                                                </span>
                                            )
                                        }
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/main/heat-map' onClick={() => handleShowMenu()} className='tablet:hover:text-primary'>
                                        {
                                            // Conditional rendering of the active link
                                            location.pathname === '/main/heat-map' ? (
                                                <span className='border-b-2 tablet:border-primary pb-1 tablet:text-primary'>
                                                    Mapa de calor
                                                </span>
                                            ) : (
                                                <span>
                                                    Mapa de calor
                                                </span>
                                            )
                                        }
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )
            }
        </>
    );
}

export default NavBar