import {useForm, SubmitHandler} from "react-hook-form"
import {useState} from "react";
import EyeCloseIcon from '@rsuite/icons/EyeClose';
import VisibleIcon from '@rsuite/icons/Visible';
import BtnSign from "@/components/Btn_sign/BtnSign.tsx";
import Star from '@/assets/img/star.svg'
import Warning from '@/assets/img/warning.svg'
import Facebook from '@/assets/img/facebook.svg'
import Apple from '@/assets/img/apple.svg'
import Google from '@/assets/img/google.svg'
import BackArrow from "@/assets/img/backArrow.svg"
import {Link, useNavigate} from "react-router-dom";


interface IFormInput {
    email: string
    password: string
}

const SignIn = () => {
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>({
        mode: 'onBlur',
        reValidateMode: 'onBlur',

        defaultValues: {
            email: '',
            password: ''
        },
    })
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
    const [visible, setVisible] = useState(false);

    return (

        <div className="signIn">
            <div className="signIn_container">
                <div className={'signIn_back'}>
                    <Link to={'/'}>
                        <img src={BackArrow} alt={'BackArrow'} width={15} height={24}/>
                    </Link>
                </div>

                <div className={'wrapper_bottom'}>
                    <div className="signIn_text">
                        <h2 className={'signIn_text_title'}>Sign In</h2>
                        <p className={'signIn_text_sub'}>SignIn to confirm using the app</p>
                    </div>

                    <form className={'signIn_form'} onSubmit={handleSubmit(onSubmit)}>
                        <div className="signIn_form_block">
                            <label className="signIn_form_label">Email</label>
                            <div className={'signIn_form_input'} style={{
                                border: errors.email ? '2px solid #AC3131' : undefined
                            }}>
                                <input style={{width: '93%'}} type={'email'} autoComplete="email"
                                       placeholder={'Email'}
                                       {...register("email", {required: 'Email is required', min: 2})} />
                                <img src={errors.email ? Warning : Star} alt="" width={16} height={16}/>
                            </div>
                            {errors.email && (
                                <p className="signIn_form_error">{errors.email.message}</p>
                            )}

                        </div>

                        <div className="signIn_form_block">
                            <label htmlFor="password" className="signIn_form_label">Password</label>
                            <div className={'signIn_form_input'} style={{
                                border: errors.password ? '2px solid #AC3131' : undefined
                            }}>
                                <input className={'signIn_form_pass'} autoComplete="current_password"
                                       id='password'
                                       type={visible ? 'text' : 'password'}
                                       placeholder="Password" {...register("password", {
                                    required: 'Password is required',
                                    minLength: {value: 8, message: 'Password must be more then 8 symbols'}
                                })} />
                                <button
                                    type="button"
                                    onClick={() => setVisible(v => !v)}
                                    className="signIn_form_eye-btn"
                                >
                                    {visible ? <VisibleIcon/> : <EyeCloseIcon/>}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="signIn_form_error">{errors.password.message}</p>
                            )}
                            <p className={'signIn_form_forg'}>Forgot password ?</p>
                        </div>
                        <BtnSign type={'submit'} clsName={'signIn_form_btn'} text={'Sign In'}/>
                    </form>
                    <div className={'signIn_orLog'}>
                        Or Login with
                    </div>

                    <div className={'signIn_logBox'}>
                        <div className={'signIn_logBox_btn'}><img src={Facebook} width={24} height={24} alt=""/></div>
                        <div className={'signIn_logBox_btn'}><img src={Apple} width={24} height={24} alt=""/></div>
                        <div className={'signIn_logBox_btn'}><img src={Google} width={24} height={24} alt=""/></div>
                    </div>
                    <div className={'signIn_up'}>
                        Don't have an account ?
                        <button className={'signIn_up_btn'} onClick={() => navigate('/signUp')}>Sign Up</button>
                    </div>

                </div>
            </div>


        </div>

    );
};

export default SignIn;