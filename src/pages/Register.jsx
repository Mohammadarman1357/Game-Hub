import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const [nameError, setNameError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;

        if (name.length < 5) {
            setNameError("Name should be more than 5 character");
        } else {
            setNameError("");
        }

        const photo = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;

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
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center pt-5'>Register your account</h2>

                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">

                        {/* name  */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" />

                        {nameError && <p className='text-xs text-secondary'>{nameError}</p>}

                        {/* photo url  */}
                        <label className="label">Photo URL</label>
                        <input type="text" name='photourl' className="input" placeholder="Photo URL" />

                        {/* email  */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />

                        {/* password  */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>

                        <p className='font-semibold text-center pt-5'>Already Have An Account ? <Link to={"/auth/login"} className='text-secondary'>Login</Link> </p>


                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;