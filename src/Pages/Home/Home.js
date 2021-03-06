import React from 'react';
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
           <Reviews></Reviews>
          <About></About>
           
        </div>
    );
};

export default Home;