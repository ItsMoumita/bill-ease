import React from 'react';

import Hero from '../Components/Hero';
import Organizers from '../Components/Organizers';
import BillPaymentOffers from '../Components/BillPaymentOffers';
import MoreServices from '../Components/MoreServices';
import FAQSection from '../Components/FAQSection';
import CustomerReviews from '../Components/CustomerReviews';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    

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