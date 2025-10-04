import React from 'react';
import ContactForm from './contactForm';
import FaqSection from './faqSection';

const ContactUs = () => {
    return (
      <main className="min-h-screen bg-gray-50 p-4 md:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ContactForm />
        <FaqSection />
      </div>
    </main>
    );
};

export default ContactUs;