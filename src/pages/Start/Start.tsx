import BtnSign from "@/components/Btn_sign/BtnSign.tsx";

const Start = () => {

    return (
        <div className={'start'}>
            <div className="container">
                <div className="wrapper">
                    <div className="start_text">
                        <div className="start_text_title">Track everything you spend, right at your fingertips</div>
                        <div className="start_text_sub">Stay on top of your finances with ease. A smart expense
                            calculator for families, students, and busy professionals — simple, fast, and always in
                            control.
                        </div>
                    </div>
                    <div className="start_buttons">
                        <BtnSign path={'/signIn'} clsName={'start_buttons_in'} text={'Sign In'}/>
                        <BtnSign path={'/signUp'} clsName={'start_buttons_up'} text={'Sign Up'}/>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Start;