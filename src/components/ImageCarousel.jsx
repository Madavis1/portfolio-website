import '../css/ImageCarousel.css'; 

const ImageCarousel = ({ logos = [] }) => {
  // Duplicate logos for seamless looping
  const allLogos = [...logos, ...logos];

  return (
    <div className="carousel-outer">
      <div className="carousel-inner">
        {allLogos.map((logo, idx) => (
          <div className="carousel-logo" key={idx}>
            <img src={logo.src} alt={logo.alt || `logo-${idx}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;