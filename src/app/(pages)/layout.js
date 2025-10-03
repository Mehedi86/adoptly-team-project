import React from 'react';
import Navbar from '../(layout)/Navbar/Navbar';
import Footer from '../(layout)/Footer/Footer';


const PageLayout = async ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PageLayout;