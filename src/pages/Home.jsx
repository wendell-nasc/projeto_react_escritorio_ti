import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';

import { Banner, CTA, AboutUs, Calculator, Testimonials, Partners, TechnologyPartners } from './';
import Services from './Services';
import { servicesData } from "../data/servicesData";
import { partnersData } from "../data/partnersData";



function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Spinner isVisible={true} />;

  return (
    <div>
      <Banner />
      {/* <Services /> */}
      <Services services={servicesData}  />
      <CTA />
      <AboutUs/>
      <Calculator />
      <TechnologyPartners partners={partnersData} />
      <Testimonials />
      <Partners />
      

      
    </div>
  );
}

export default Home;
