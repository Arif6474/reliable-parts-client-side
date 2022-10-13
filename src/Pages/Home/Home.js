import React from 'react';
import Contact from '../contactUs/Contact';
import Support from '../Support/Support';
import Transaction from '../Transaction/Transaction';
import About from './About';
import Banner from './Banner';
import Business from './Business';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';
import Reviews from './Reviews';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Parts></Parts>
           <BusinessSummary></BusinessSummary>
           <Business></Business>
          <About></About>
          <Transaction/>
           <Reviews></Reviews>
           <Contact></Contact>
           <Support/>
           
        </div>
    );
};

export default Home;