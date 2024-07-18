import { points } from '../../data/points'

const ClientTable = () => {
    return (
        <div className='flex flex-col items-center justify-start h-full scroll-mx-2'>
            <h1 className='font-semibold w-full flex items-center justify-center text-3xl text-darkPurple mb-6'>Tabla de puntos</h1>
            <table className='w-4/5 table-auto'>
                <thead className='bg-primary text-white'>
                    <tr className='text-lg'>
                        <th>Nombre</th>
                        <th>Latitud</th>
                        <th>Longitud</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // Conditional rendering of table rows
                        points.map((point, index) => {
                            if (index % 2 === 0) {
                                return (
                                    <tr key={index} className='text-center bg-gray-100'>
                                        <td className='p-3'>{point.name}</td>
                                        <td className='p-3'>{point.lat}</td>
                                        <td className='p-3'>{point.lng}</td>
                                    </tr>
                                )
                            } else {
                                return (
                                    <tr key={index} className='text-center'>
                                        <td className='p-3'>{point.name}</td>
                                        <td className='p-3'>{point.lat}</td>
                                        <td className='p-3'>{point.lng}</td>
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>
            </table>
        </div>
    )
};


export default ClientTable