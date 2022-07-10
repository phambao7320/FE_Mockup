import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormInput, FormSelect, FormPassword } from '@components/form';
import { useAuth } from '@hooks'
import { Wrapper, Right } from '@themes/facit'
import LoginScheme from '@modules/auth/login/scheme' ;
import LoginForm from '@type/Form/LoginForm'
import { Modal } from '@components'
import '../style.scss' ;

const Register = () => {

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
        <div className='fixed top-0 left-0 right-0 bottom-0 overflow-y-auto' >
            <div className='absolute w-full min-h-full h-full modal__overlay'>
                <div className='relative flex justify-center items-center h-full'>
                    <div className='form basis-4/5 lg:basis-2/5 bg-[#fff] rounded-lg p-6 drop-shadow-lg'>
                        <div>
                            <div>
                                <div className='lg:text-2xl text-xl font-semibold mb-1'>Sign Up</div>
                                <div className='text-base'>It's quick and easy</div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-6 right-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <hr className='mt-[15px] pt-[15px] border-[#dadde1]'/>
                        </div>
                        <FormProvider {...form}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='flex flex-col lg:flex-row lg:gap-3'>
                                    <div className='basis-full lg:basis-1/2'>
                                        <FormInput name='first-name' placeholder='First Name' />
                                    </div>
                                    <div className='basis-full lg:basis-1/2'>
                                        <FormInput name='last-name' placeholder='Last Name' />
                                    </div>
                                </div>
                                <FormInput type='email' name='email' placeholder='Info@example.com' />
                                <FormPassword name='password' placeholder='******' />
                                <div className='flex flex-col lg:flex-row lg:gap-3 mt-[5px]'>
                                    <div className='basis-1/2'>
                                        <p className=' mb-[5px]'>Gender</p>
                                        <FormSelect name='gender' options={[{label:'Nam',value:'Nam'},{label:'Nữ',value:'Nữ'}]} />
                                    </div>
                                    <div className='basis-1/2'>
                                        <p className='mb-[0px]'>Phone: optional</p>
                                        <FormInput name='phone-number' placeholder={'+84 987 427751'} />
                                    </div>
                                </div>
                                <p className='pt-[15px] text-xs'>By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                                <div className='flex mt-[15px]'>
                                    <button type='submit' className='mx-auto w-2/3 text-white text-center bg-blue-600 hover:opacity-90 hover:text-white rounded-md p-3 font-semibold'>Get Started</button>
                                </div>
                            </form>
                        </FormProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register ;