import React from 'react';
import ReachUs from './(components)/reachUs';
import Map from './(components)/map';
import ContactUs from './(components)/contact';

const page = () => {
    return (
        <div>
            <ReachUs />
            <Map />
            <ContactUs />
        </div>
    );
};

export default page;