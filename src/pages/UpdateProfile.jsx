import React, { use, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';


const UpdateProfile = () => {
    const { user, setUser, updateUser } = use(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photourl.value;

        setError('');

        // update user profile
        updateUser({ displayName: name, photoURL: photo })
            .then(() => {
                setUser(user);
                alert('Your Profile Updated!');
                navigate(-1);
            })
            .catch(error => {
                console.log(error);
                setError(error.Message)
                setUser(user);
            });
    }

    return (
        <div className='w-11/12 mx-auto  bg-gradient-to-bl from-[#050505] to-[#2f0076]'>
            <header>
                <Header></Header>
            </header>

            <div className='flex justify-center min-h-screen items-center'>
                <title>Update Profile</title>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h2 className='font-semibold text-2xl text-center pt-5'>Update Your Profile</h2>

                    <div className="card-body">
                        <form onSubmit={handleUpdate}>
                            <fieldset className="fieldset">

                                {/* name  */}
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Name" required />


                                {/* photo url  */}
                                <label className="label">Photo URL</label>
                                <input type="text" name='photourl' className="input" placeholder="Photo URL" required />

                                {
                                    error && <p className='text-secondary'>{error}</p>
                                }
                                <button type='submit' className="btn btn-neutral mt-4">Update</button>

                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default UpdateProfile;