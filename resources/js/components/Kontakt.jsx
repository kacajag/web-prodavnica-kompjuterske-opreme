import React from 'react';
 

const Kontakt = () => {
  return (
    <div className="contact-page-container">
      <h2>Kontakt informacije</h2>
      <p>Adresa: 123 Ulica, Grad, Država</p>
      <p>Telefon: +381 12 345 6789</p>
      <p>Email: info@primer.com</p>

      <div className="map-container">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.628445030636!2d-122.3988958852987!3d37.78923137965833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f503c3b09%3A0x52f10a3a90e090c0!2s101%20California%20St%2C%20San%20Francisco%2C%20CA%2094104%2C%20USA!5e0!3m2!1sen!2srs!4v1638545647439!5m2!1sen!2srs"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Kontakt;
