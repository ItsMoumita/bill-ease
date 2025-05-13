import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import Loading from '../Components/Loading';

const Profile = () => {
    const { user, updateUser } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (user) {
            setName(user.displayName || '');
            setPhotoURL(user.photoURL || '');
        }
    }, [user]);

    if (!user) {
        return <Loading />; // Show loader while user data is being fetched
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateUser({ displayName: name, photoURL });
            toast.success('Profile updated successfully!');
            setIsEditing(false);
        } catch (error) {
            toast.error(error.message || 'Failed to update profile.');
        }
    };

    return (
        <div className="w-11/12 mx-auto rounded-xl mt-9 mb-9 flex flex-col bg-gradient-to-r from-blue-500 to-cyan-500  min-h-[71vh]" data-aos="fade-up">
             <Helmet>
                            <title>BillEase | {user.displayName} </title>
                        </Helmet>
            <div className=" flex-grow flex items-center justify-center px-4 ">
                <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl">
                    <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">My Profile</h2>
                    <div className="flex flex-col items-center space-y-4 relative">
                        <div className="relative">
                            <img
                                src={photoURL}
                                alt="Profile"
                                className="w-24 h-24 rounded-full border border-gray-300 object-cover"
                            />
                            <button
                                onClick={() => setIsEditing(true)}
                                className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600"
                            >
                                <FaEdit />
                            </button>
                        </div>
                        <p className="text-sm text-gray-500">{user?.email}</p>
                        <p className="text-lg font-bold text-gray-800">{name}</p>
                    </div>
                    {isEditing && (
                        <form onSubmit={handleUpdate} className="mt-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Photo URL</label>
                                <input
                                    type="url"
                                    className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                    placeholder="https://example.com/photo.jpg"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded hover:scale-105 transition"
                            >
                                Save Changes
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;