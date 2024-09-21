import React from 'react';

function CarouselImage({ src, alt }) {
    return <img src={src} alt={alt} className="d-block w-100" />;
}

export default CarouselImage;