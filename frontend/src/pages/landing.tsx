import Header from '../components/header/header'
import Carousel1 from '../assets/images/carousel2.jpg';
import '../pages/landing.css';
import Section from '../components/section/section';

const TOURISM_TITLE = "Turismo en Buenos Aires"
const DISCOUNT_CODES_TITLE = "Códigos de descuento"
const DISCOUNT_CODES_SUBTITLE = "¿Sos socio de Club LA NACIÓN? Descargá tu código y disfrutá beneficios exclusivos en tus marcas favoritas"

const TOURISM_BUTTON_TEXT = "TODOS LOS BENEFICIOS"
const DISCOUNT_CODES_BUTTON_TEXT = "TODOS LOS CÓDIGOS"


const Landing = () => {
  return (
    <main className='landing'>
        <Header />
        <section className='landing__welcome'>
            <img src={Carousel1} alt='carousel-welcome-image' />
        </section>

        <Section id='tourism' title={TOURISM_TITLE} buttonText={TOURISM_BUTTON_TEXT}/> 
        <Section id='discount-codes' title={DISCOUNT_CODES_TITLE} buttonText={DISCOUNT_CODES_BUTTON_TEXT} subtitle={DISCOUNT_CODES_SUBTITLE}/>

    </main>
  )
}
  
export default Landing;
