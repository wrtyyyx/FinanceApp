import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Start from "@/pages/Start/Start.tsx";
import SignIn from "@/pages/SignIn/SignIn.tsx";
import SignUp from "@/pages/SignUp/SignUp.tsx";


const AppRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                   <Route path={'/'} element={<Start/>}/>
                   <Route path={'/signIn'} element={<SignIn/>}/>
                   <Route path={'/signUp'} element={<SignUp/>}/>
                </Routes>
            </Router>
            
        </>
    );
};

export default AppRouter;