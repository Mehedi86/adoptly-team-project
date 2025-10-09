import React from 'react';
import AboutHero from '../about/(component)/aboutHero';
import Contributor from './Contributor';
import AboutSection from '../landing/AboutSection/AboutSection';

const page = () => {
    return (
        <div>
             <AboutHero title={"Contributor"} />
             <Contributor />
             <AboutSection />
        </div>
    );
};

export default page;