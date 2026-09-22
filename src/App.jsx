import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Compare from './components/Compare';
import Solutions from './components/Solutions';
import WhyChooseUs from './components/WhyChooseUs';
import GoogleReviews from './components/GoogleReviews';
import FAQ from './components/FAQ';
import OfferForm from './components/OfferForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Hero />
      <Compare />
      <Solutions />
      <WhyChooseUs />
      <GoogleReviews />
      <FAQ />
      <OfferForm />
      <Footer />
    </div>
  );
}