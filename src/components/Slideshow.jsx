import './Slideshow.scss';
import { useState } from 'react';
import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';

function Slideshow({pictures}) {
    const [index, setIndex] = useState(0);
    const arrayLength = pictures.length;

    function nextSlide() {
        if (index < arrayLength - 1) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
    }

    function prevSlide() {
        if (index > 0) {
            setIndex(index - 1);
          } else {
            setIndex(arrayLength - 1);
          }
    }

    return (
        <div className="slideshow">
            <img src={pictures[index]} alt="Housing cover" className='slideshow__pictures' />

            {arrayLength > 1 && (
              <div className='slideshow__arrows'>
                  <img onClick={prevSlide} src={leftArrow} alt="back arrow" className='slideshow__arrows--left' />
                  <img onClick={nextSlide} src={rightArrow} alt="back arrow" className='slideshow__arrows--right' />
              </div>
            )}
            {arrayLength > 1 && (
              <span>{index + 1}/{arrayLength}</span>
            )}
        </div>
    )
}
export default Slideshow