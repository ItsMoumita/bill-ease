import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';
import 'aos/dist/aos.css';
import AOS from 'aos';
const Root = () => {

    const {loading} = useContext(AuthContext);
    const navigation = useNavigation(); 
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    if (loading || navigation.state === 'loading') {
        return <Loading />;
    }

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;