import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;


        const length6Pattern = /^.{6,}$/;
        const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

        if (!length6Pattern.test(password)) {
            // console.log('password did not match');
            setError('Password must be 6 character or longer');
            return;
        }
        else if (!casePattern.test(password)) {
            setError('Password must have at least one uppercase and one lower case character')
            return;
        }

        setError('');

        // console.log(name, photo);

        createUser(email, password)
            .then((result) => {
                const user = result.user;

                // update user profile
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate('/');
                    })
                    .catch(error => {
                        console.log(error);
                        setUser(user);
                    });
            })
            .catch(error => {
                const errorCode = error.code;
                console.log(errorCode);
                alert(errorCode);
            });


    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <title>Register</title>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center pt-5'>Register your account</h2>

                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">

                            {/* name  */}
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" required />


                            {/* photo url  */}
                            <label className="label">Photo URL</label>
                            <input type="text" name='photourl' className="input" placeholder="Photo URL" required />

                            {/* email  */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />

                            {/* password  */}
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" required />

                            {
                                error && <p className='text-secondary'>{error}</p>
                            }
                            <button type='submit' className="btn btn-neutral mt-4">Register</button>

                            <p className='font-semibold text-center pt-5'>Already Have An Account ? <Link to={"/auth/login"} className='text-secondary'>Login</Link> </p>

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;