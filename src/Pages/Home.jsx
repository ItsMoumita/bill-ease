import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Organizers from '../Components/Organizers';
import BillPaymentOffers from '../Components/BillPaymentOffers';
import MoreServices from '../Components/MoreServices';
import FAQSection from '../Components/FAQSection';
import CustomerReviews from '../Components/CustomerReviews';
import { Helmet } from 'react-helmet-async';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div>
            <Helmet>
                <title>BillEase | Home </title>
            </Helmet>
            <Hero></Hero>
            <Organizers></Organizers>
            <BillPaymentOffers></BillPaymentOffers>
            <MoreServices></MoreServices>
            <CustomerReviews></CustomerReviews>
            <FAQSection></FAQSection>

        </div>
    );
};

export default Home;