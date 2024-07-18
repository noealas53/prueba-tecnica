import Welcome from '../../assets/saludo-login.webp'
import { useForm } from 'react-hook-form'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { user } from '../../data/user'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    const onSubmit = (data) => {
        
        user.find((user) => {
            if (user.username === data.username && user.password === data.password) {
                toast.success('Inicio de sesión exitoso')
                navigate('/main/client-map')
            } else {
                toast.error('Usuario o contraseña incorrectos')
            }
        })

        reset()
    }

    return (
        <div className='flex w-full h-screen'>
            <div className='bg-gradient-to-b from-primary to-secondary w-1/2 flex flex-col rounded-r-3xl'>
                <h1 className='font-semibold text-4xl text-white flex items-end justify-center h-2/5 tracking-wider'>BIENVENIDO!</h1>
                <div className='h-3/5 flex items-end justify-center'>
                    <img src={Welcome} alt='Bienvenido' className='h-5/6 w-auto' />
                </div>
            </div>
            <div className='w-1/2 flex flex-col items-center justify-center'>
                <h2 className='font-medium text-3xl my-5 tracking-wide'>Iniciar sesión</h2>
                <form className='border-primary rounded-lg flex flex-col items-center py-4 px-4 gap-2 w-5/12' onSubmit={handleSubmit(onSubmit)}>
                    <label className='font-light mb-1 text-lg'>Usuario:</label>
                        <input
                            className='border-2 border-primary rounded-md h-8 w-full px-2 text-sm'
                            {...register('username', {
                                required: 'El campo es obligatorio',
                            })}
                        />
                    {errors.username && <p className='text-red-600 mb-2 mt-1'>{errors.username.message}</p>}

                    <label className='font-light mb-1 mt-4 text-lg'>Contraseña:</label>
                    <div className='flex justify-between items-center border-2 border-primary rounded-md w-full'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className='h-8 px-2 text-sm w-11/12'
                            {...register('password', {
                                required: 'El campo es obligatorio',
                            })}
                        />
                        {
                            showPassword
                                ? <EyeSlashIcon onClick={handleShowPassword} className='cursor-pointer h-6 w-6 mx-2 text-primary' />
                                : <EyeIcon onClick={handleShowPassword} className='cursor-pointer h-6 w-6 mx-2 text-primary' />
                        }
                    </div>
                    {errors.password && <p className='text-red-600 mb-2 mt-1'>{errors.password.message}</p>}

                    <button type='submit' className='bg-darkPurple flex items-center hover:bg-button gap-2 justify-center text-white rounded-lg w-48 h-10 font-extralight mt-7'>
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login