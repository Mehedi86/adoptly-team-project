import React from 'react';
import ReachUs from './(components)/reachUs';
import Map from './(components)/map';
import ContactUs from './(components)/contact';
import AboutHero from '../about/(component)/aboutHero';

const page = () => {
    return (
        <div>
            <AboutHero title={"Contact Us"} />
            <ReachUs />
            <Map />
            <ContactUs />
        </div>
    );
};

export default page;