import React from 'react';
import { FeaturedProducts, Hero, NewProducts, Promo } from '../components';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Promo />
      <NewProducts />
    </>
  );
}
