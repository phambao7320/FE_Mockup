import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormInput, FormPassword } from '@components/form';
import { useAuth } from '@hooks'
import { Wrapper, Right } from '@themes/facit'
import LoginScheme from '@modules/auth/login/scheme' ;
import LoginForm from '@type/Form/LoginForm'
import { Modal } from '@components'
import '../style.scss' ;
import Register from '../register';


const SignIn = () => {

    const [showRegister,setShowRegister] = useState(false) ;

    const { t } = useTranslation(['common'])
    const form = useForm<LoginForm>({
        resolver: yupResolver(LoginScheme(t)),
    })
    const { handleSubmit } = form
    const { loginAction } = useAuth()

    const onSubmit = useCallback((data) => {
        // loginAction(data)
        console.log(data) ;
    }, [loginAction])

    return (
        <div>
            <Wrapper>
                <div className='flex max-w-6xl min-h-screen mx-auto p-6'>
                <div className='flex flex-col items-center lg: lg:flex-row '>
                    <div className='lg:mb-12 lg:text-left text-center lg:basis-2/3'>
                        <img
                            src="http://demo.foxthemes.net/socialitev2.2/assets/images/logo.png"
                            alt="Logo"
                            className='lg:mx-0 lg:w-52 mx-auto w-40 block'
                        />
                        <span className='font-medium lg:mx-0 md:text-2xl mt-6 mx-auto lg:w-3/4 text-xl block'>Connect with friends and the world around you on Socialite.</span>
                    </div>
                    <div className='form w-full mt-10 lg:basis-1/3 lg:ml-3'>
                        <FormProvider {...form}>
                            <form className='bg-[#fff] border-[#dddfe2] rounded-lg p-6 drop-shadow-xl' onSubmit={handleSubmit(onSubmit)}>
                                {/* <input type="email" placeholder='Email or Phone Number' className='inputText'/> */}
                                <FormInput type='email' name='email' placeholder={'Email or Phone Number'} />
                                <FormPassword name='password' placeholder='Password' />
                                {/* <input type="password" placeholder='Password' className='inputText'/> */}
                                <button type='submit' className='w-full bg-blue-600 hover:opacity-90  rounded-md p-3 text-white font-semibold mt-[15px] '>Log In</button>
                                <a href="#" className='block text-center mt-[15px] text-blue-500'>Forgot Password?</a>
                                <hr className='mt-[15px] pt-[15px] border-[#dadde1]'/>
                                <div className='flex mt-[15px]'>
                                    <a type='button' className='mx-auto w-2/3 text-white text-center bg-green-600 hover:opacity-90 hover:text-white rounded-md p-3 font-semibold' 
                                    onClick={() => setShowRegister(true)}>Create New Account</a>
                                </div>
                            </form>
                        </FormProvider>
                        <div className='mt-8 text-center text-sm'>
                            <a className='font-semibold hover:text-[#007bff]' href="#">Create a Page </a> 
                            for a celebrity, band or business
                        </div>
                    </div>
                </div>
                </div>
            </Wrapper>
            { showRegister && <Register /> }
        </div>
    )
}

export default SignIn