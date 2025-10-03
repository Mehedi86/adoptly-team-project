import React from 'react';
import SupportHero from '../landing/(component)/support/supportHero';
import Pets from './(components)/pets';
import AdoptionInfo from './(components)/adoptionInfo';
import AboutHero from '../about/(component)/aboutHero';

const page = () => {
    return (
        <div>
            <AboutHero title={"Our Services"} />
            <Pets />
            <SupportHero />
            <AdoptionInfo />
        </div>
    );
};

export default page;