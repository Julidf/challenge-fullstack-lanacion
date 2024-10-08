import { useEffect, useState } from 'react';
import Card from '../card/card';
import { CardProps } from '../../utils/types'
import '../carousel/carousel.css'
import ArrowButton from '../button/arrow-button';
import { getCardData } from '../../utils/services';

interface CarouselProps {
  id: string,
}

const Carousel = ({ id }: CarouselProps) => {
  const [data, setData] = useState<CardProps[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  
  const cardsPerPage = 4;
  const totalPages = Math.ceil(totalItems / cardsPerPage);
  const cardsToDisplay = data.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)

  useEffect(() => {
    getCardData({id})
      .then((items) => {
        setData(items.data); 
        setTotalItems(items.total)
      })
      .catch((err) => setError(err.message));
  }, [id]);

  const fetchNextPage = async () => {
    getCardData({id, offset: data.length})
      .then((response) => {
        setData([...data, ...response.data]);
      })
      .catch((err) => setError(err.message));
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      if (data.length < totalItems) {
        fetchNextPage();
      }
    }
  };
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className='carousel'>
      <ArrowButton onClick={handlePrev} disabled={currentPage === 0} className='arrow-left'/>
      {!error ?
      <div className={'carousel__items'} >
        {cardsToDisplay.map((card, index) => (
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

