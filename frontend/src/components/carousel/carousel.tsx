import { useState } from 'react';
import Card from '../card/card';
import { CardProps } from '../../utils/types'
import '../carousel/carousel.css'
import ArrowButton from '../button/arrow-button';

interface CarouselProps {
  data: CardProps[];
  error: string | null;
  totalItems: number;
  fetchNextPage: () => void;
}

const Carousel = ({ data, error, totalItems, fetchNextPage }: CarouselProps) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const cardsPerPage = 4;
  const totalPages = Math.ceil(totalItems / cardsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      fetchNextPage();
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='carousel'>
      <ArrowButton onClick={handlePrev} disabled={currentPage === 0} className='arrow-left'/>
      {!error ?
        <div className="carousel__items">
          {data.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      :
        <div className='carousel__error'>
          <span>Error loading data...</span>
        </div>}
      <ArrowButton onClick={handleNext} disabled={currentPage === totalPages - 1} className='arrow-right'/>
    </div>
  );
};

export default Carousel;

