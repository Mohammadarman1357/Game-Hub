import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { use, useState } from 'react';

const Login = () => {
    const [error, setError] = useState("");
    const { signIn, setUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(error => {
                // console.log(error);
                // alert(error.Message);
                const errorCode = error.code;
                setError(errorCode);
            })

    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center pt-5'>Login your account</h2>

                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* email  */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />

                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />

                        <div><a className="link link-hover">Forgot password?</a></div>

                        {error && <p className='text-secondary'>{error}</p>}

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>

                        <p className='font-semibold text-center pt-5'>Dont't Have An Account ? <Link to={"/auth/register"} className='text-secondary'>Register</Link> </p>


                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;