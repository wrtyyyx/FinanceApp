import Warning from "@/assets/img/warning.svg";
import Star from "@/assets/img/star.svg";
import VisibleIcon from "@rsuite/icons/Visible";
import EyeCloseIcon from "@rsuite/icons/EyeClose";
import BtnSign from "@/components/Btn_sign/BtnSign.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {FC, useState} from "react";
import {Link} from "react-router-dom";
import BackArrow from "@/assets/img/backArrow.svg";

interface IFormInput {
    name: string,
    email: string
    password: string
    confirmPassword: string;

}

const SignUp: FC = () => {
    const {register, watch, handleSubmit, formState: {errors}} = useForm<IFormInput>({
        mode: 'onBlur',
        reValidateMode: 'onBlur',

        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
    })
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
    const [visible, setVisible] = useState<{ password: boolean; confirm: boolean }>({
        password: false,
        confirm: false,
    });
    const password = watch("password", "")

    return (
        <div className={'signIn'}>
            <div className="signIn_container">
                <div className={'signIn_back'}>
                    <Link to={'/'}>
                        <img src={BackArrow} alt={'BackArrow'} width={15} height={24}/>
                    </Link>
                </div>
                <div className="wrapper_bottom">
                    <div className="signIn_text">
                        <h2 className={'signIn_text_title'}>Sign Up</h2>
                        <p className={'signIn_text_sub'}>SignUp to confirm using the app</p>
                    </div>

                    <form className={'signIn_form'} onSubmit={handleSubmit(onSubmit)}>
                        <div className="signIn_form_block">
                            <label className="signIn_form_label">Name</label>
                            <div className={'signIn_form_input'} style={{
                                border: errors.name ? '2px solid #AC3131' : undefined
                            }}>
                                <input style={{width: '93%'}} type={'text'} autoComplete="name"
                                       placeholder={'Name'}
                                       {...register("name", {
                                           required: 'Name is required',
                                           minLength: {value: 2, message: 'At least 2 characters'}
                                       })} />
                                <img src={errors.name ? Warning : Star} alt="" width={16} height={16}/>
                            </div>
                            {errors.name && (
                                <p className="signIn_form_error">{errors.name.message}</p>
                            )}

                        </div>
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
                                <input className={'signIn_form_pass'} autoComplete="new-password"

                                       id='password'
                                       type={visible.password ? 'text' : 'password'}
                                       placeholder="Password" {...register("password", {
                                    required: 'Password is required',
                                    minLength: {value: 8, message: "At least 8 characters"},
                                })} />
                                <button
                                    type="button"
                                    onClick={() => setVisible((prevState) => ({
                                        ...prevState,
                                        password: !prevState.password
                                    }))}
                                    className="signIn_form_eye-btn"
                                >
                                    {visible.password ? <VisibleIcon/> : <EyeCloseIcon/>}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="signIn_form_error">{errors.password.message}</p>
                            )}
                        </div>
                        <div className="signIn_form_block">
                            <label htmlFor="ConfirmPassword" className="signIn_form_label">Confirm your password</label>
                            <div className={'signIn_form_input'} style={{
                                border: errors.confirmPassword ? '2px solid #AC3131' : undefined
                            }}>
                                <input className={'signIn_form_pass'}
                                       id='ConfirmPassword'
                                       type={visible.confirm ? 'text' : 'password'}
                                       placeholder="Password" {...register("confirmPassword", {
                                    required: 'Password is required',
                                    validate: (val) => val === password || 'Password do not match',
                                    minLength: {value: 8, message: 'Password must be more then 8 symbols'}
                                })} />
                                <button
                                    type="button"
                                    onClick={() => setVisible((prevState) => ({
                                        ...prevState,
                                        confirm: !prevState.confirm
                                    }))}
                                    className="signIn_form_eye-btn"
                                >
                                    {visible.confirm ? <VisibleIcon/> : <EyeCloseIcon/>}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <p className="signIn_form_error">{errors.confirmPassword.message}</p>
                            )}
                        </div>
                        <BtnSign type={'submit'} clsName={'signIn_form_btn'} text={'Sign In'}/>
                    </form>


                </div>

            </div>
        </div>

    );
};

export default SignUp;