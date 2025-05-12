import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Organizers from '../Components/Organizers';
import BillPaymentOffers from '../Components/BillPaymentOffers';
import MoreServices from '../Components/MoreServices';
import FAQSection from '../Components/FAQSection';
import CustomerReviews from '../Components/CustomerReviews';

const Home = () => {
    return (
        <div>
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