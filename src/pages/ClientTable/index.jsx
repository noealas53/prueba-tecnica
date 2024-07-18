
const ClientTable = () => {
    return (
        <div className='flex items-start justify-center h-full pt-12 scroll-mx-2'>
            <table className='w-4/5 table-auto'>
                <thead className='bg-primary text-white'>
                    <tr className='text-lg'>
                        <th>Nombre</th>
                        <th>Latitud</th>
                        <th>Longitud</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-3'>Punto 1</td>
                        <td className='p-3'>13.705243</td>
                        <td className='p-3'>-89.24231</td>
                    </tr>
                    <tr className=' bg-gray-200'>
                        <td className='p-3'>Punto 2</td>
                        <td className='p-3'>13.696674</td>
                        <td className='p-3'>-89.197927</td>
                    </tr>
                    <tr>
                        <td className='p-3'>Punto 3</td>
                        <td className='p-3'>14.692511</td>
                        <td className='p-3'>-87.86136</td>
                    </tr>
                    <tr className=' bg-gray-200'>
                        <td className='p-3'>Punto 4</td>
                        <td className='p-3'>12.022747</td>
                        <td className='p-3'>-86.252007</td>
                    </tr>
                    <tr>
                        <td className='p-3'>Punto 5</td>
                        <td className='p-3'>8.103289</td>
                        <td className='p-3'>-80.596013 </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};


export default ClientTable