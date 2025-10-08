import React from 'react';
import AdoptionDetails from '../component/adoptionDetails';

const adiotionDetailsPage = ({ params }) => {

    console.log(params.id)

    return (
        <div>
            <AdoptionDetails id={params.id} />
        </div>
    );
};

export default adiotionDetailsPage;