import Carousel from "../carousel/carousel";
import "./section.css";

interface SectionProps {
  id: string;
  title: string;
  buttonText: string;
  subtitle?: string;
}

const Section = ({ id, title, buttonText, subtitle }: SectionProps) => {

  return (
    <section className="section" id={id}>
        <div className="section__container">
            <div className="section__top">
                <h1 className="section__title"> {title} </h1>
                <a href="#" className="section__button"> {buttonText} </a>
            </div>
            {subtitle && <h4 className="section__subtitle"> {subtitle} </h4>}
            <div className="section__carousel">
                <Carousel id={id} />
            </div>
        </div>
    </section>
  );
};

export default Section;
