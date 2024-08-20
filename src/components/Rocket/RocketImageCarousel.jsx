import PropTypes from 'prop-types';

import styles from './index.module.css';

function Button({ nextOrPrev, cardId }) {
  return (
    <button
      className={`carousel-control-${nextOrPrev}`}
      type="button"
      data-bs-target={`#${cardId}`}
      data-bs-slide={nextOrPrev}
    >
      <span
        className={`carousel-control-${nextOrPrev}-icon`}
        aria-hidden="true"
      />
      <span className="visually-hidden">{nextOrPrev}</span>
    </button>
  );
}

function CarouselIndicators({ imageUrls, cardId }) {
  return (
    <div className={`${styles.carouselIndicators} carousel-indicators`}>
      {imageUrls.map((url, index) => (
        <button
          type="button"
          data-bs-target={`#${cardId}`}
          data-bs-slide-to={index}
          className={index === 0 ? 'active' : ''}
          aria-label={`Slide ${index}`}
          key={`${cardId}-${url}`}
        />
      ))}
    </div>
  );
}

function RocketImageCarousel({ imageUrls, cardId }) {
  const newImageUrls = imageUrls.map((url) => {
    if (url.includes('imgur')) {
      return url.replace('jpg', 'jpeg').replace('imgur', 'i.imgur');
    }
    return url;
  });

  return (
    <div
      id={`${cardId}-carousel`}
      className={`${styles.carousel} carousel slide rounded-2`}
    >
      <CarouselIndicators imageUrls={newImageUrls} cardId={cardId} />

      <div className={`${styles.carouselInner} carousel-inner`}>
        {newImageUrls.map((url, index) => (
          <div
            className={`${styles.carouselItem} carousel-item ${
              index === 0 ? 'active' : ''
            }`}
            key={url}
          >
            <img
              src={url}
              className={`${styles.carouselImage} d-block w-100`}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>

      <Button nextOrPrev="prev" cardId={cardId} />

      <Button nextOrPrev="next" cardId={cardId} />
    </div>
  );
}

CarouselIndicators.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  cardId: PropTypes.string.isRequired,
};

Button.propTypes = {
  nextOrPrev: PropTypes.string.isRequired,
  cardId: PropTypes.string.isRequired,
};

RocketImageCarousel.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  cardId: PropTypes.string.isRequired,
};

export default RocketImageCarousel;
