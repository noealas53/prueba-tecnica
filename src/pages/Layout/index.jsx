import { Outlet } from 'react-router-dom'
import NavBar from '../../components/Navbar'

const Layout = () => {
    return (
        // Container for the Navbar and the content
        <div className='flex flex-col w-full h-screen'>
            <NavBar />
            {/* Container for the content */}
            <div className='p-5 h-screen'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout