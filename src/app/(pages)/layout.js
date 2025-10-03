import React from 'react';
import Footer from '../(layout)/Footer/Footer';
import Navbar from '../(layout)/Navbar/Navbar';

const PageLayout = async({children}) => {
  return (
    <div>
      <Navbar/>
      <main className="min-h-screen">
        {children}
      </main> 
 
      <Footer/>
    </div>
  );
};

export default PageLayout;