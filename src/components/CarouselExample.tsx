import Carousel from 'react-bootstrap/Carousel';
import Car from './car.jpeg'

export const CarouselExample = () => {
    return (
        <Carousel data-bs-theme='dark'>
            <Carousel.Item>
                <img
                    className='d-block w-100' 
                    src={Car}
                    alt='First Slide'
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Description for the first slide</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    src={Car}
                    alt='Second Slide'
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Description for the second slide</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    src={Car}
                    alt='Third Slide'
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Description for the third slide</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}