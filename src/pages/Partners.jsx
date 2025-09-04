import React from 'react';

function Partners() {
  const partners = [
    'assets/images/client-01.png',
    'assets/images/client-01.png',
    'assets/images/client-01.png',
    'assets/images/client-01.png',
    'assets/images/client-01.png',
    'assets/images/client-01.png',
  ];

  return (
    <section className="partners">
      <div className="container">
        <div className="row">
          {partners.map((src, index) => (
            <div className="col-lg-2 col-sm-4 col-6" key={index}>
              <div className="item">
                <img src={src} alt={`Partner ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
