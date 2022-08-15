import Carousel from 'react-bootstrap/Carousel';
import './MainCarousel.scss';

const MainCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item style={{
        height: '600px',
      }}>
        <img
          className="d-block w-100"
          src="./images/wework01.jpeg"
          alt="First slide"
        />
        <Carousel.Caption style={{
          marginBottom: '170px',
          border: '5px solid #ffffff',
          fontSize: '100px',
        }}>
          <p>WEWORK</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{
        height: '600px',
      }}>
        <img
          className="d-block w-100"
          src="./images/fastfive01.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption style={{
          marginBottom: '170px',
          border: '5px solid #ffffff',
          fontSize: '100px',
        }}>
          <p>FASTFIVE</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{
        height: '600px',
      }}>
        <img
          className="d-block w-100"
          src="./images/sparkplus01.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption style={{
          marginBottom: '170px',
          border: '5px solid #ffffff',
          fontSize: '100px',
        }}>
          <p>
            SPARKPLUS
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;