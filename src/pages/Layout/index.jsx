import { Outlet } from 'react-router-dom'
import NavBar from '../../components/Navbar'

const Layout = () => {
    return (
        <div className='flex flex-col w-full h-screen'>
            <NavBar />
            <div className='p-5'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout