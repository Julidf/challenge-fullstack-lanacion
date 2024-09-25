import location from '../../assets/icons/location.svg';
import { CardProps } from '../../utils/types'
import '../card/card.css'

const Card: React.FC<{ card: CardProps }> = ({ card }) => {
    const { name, benefits, image, url, closestLocation } = card;

    return (
        <div className="card">
            <div className="card__image">
                <a href={url} target="_blank" rel="noopener noreferrer"><img src={image} alt='Photo'/></a>
            </div>
            {benefits ? 
                <div className="card__data" id='card__data--tourism'>
                    <h4 className='card__title'><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></h4>
                    <div className='card__benefits'>
                        <span className='card__benefits--a'>{benefits.Black}</span>  
                        <span className='card__benefits--b'>{benefits.Premium}</span>
                        <span className='card__benefits--c'>{benefits.Classic}</span>
                    </div>
                    <div className='card__location'>
                        <img src={location} />
                        <span> A <strong>{closestLocation > 1000 ? `${(closestLocation / 1000).toFixed(2)} km` : `${closestLocation} m`}</strong></span>
                    </div>
                </div> 
                :
                <div className="card__data" id='card__data--discount-codes'>
                    <div>
                        <h4 className='card__title'>{name}</h4>
                    </div>
                    <div className='card__button'>
                        <a href={url} className='card__button-code' target="_blank" rel="noopener noreferrer">QUIERO MI CÓDIGO</a>
                    </div>
                </div>
            }
        </div>
  );
};

export default Card;
