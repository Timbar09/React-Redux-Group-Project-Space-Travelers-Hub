import PropTypes from 'prop-types';

import Slider from '../Slider';

import styles from './index.module.css';

function RocketImageCarousel({ imageUrls }) {
  // Update changed image URLs
  const urls = imageUrls.map((url) => {
    if (url.includes('imgur')) {
      return url.replace('jpg', 'jpeg').replace('imgur', 'i.imgur');
    }
    return url;
  });

  const slides = urls.map((url) => ({
    key: url,
    content: (
      <div
        className={`${styles.imageCarouselSlide} d-flex justify-content-center`}
      >
        <img
          src={url}
          alt={imageUrls}
          className={`${styles.imageCarouselImage}`}
        />
      </div>
    ),
  }));

  return (
    <div className={`${styles.imageCarousel}`}>
      <Slider slides={slides} />
    </div>
  );
}

RocketImageCarousel.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RocketImageCarousel;
