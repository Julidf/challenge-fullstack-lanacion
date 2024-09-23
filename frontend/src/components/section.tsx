import Carousel from "./carousel";
import "../components/section.css";

//Add Interface for type declarations?
const Section = ({ id, title, buttonText, subtitle }: { id: string; title: string, buttonText: string, subtitle?: string }) => {
  return (
    <section className="section">
        <div className="section__container" id={id}>
            <div className="section__top">
                <h1 className="section__title"> {title} </h1>
                <a href="#" className="section__button"> {buttonText} </a>
            </div>
            {subtitle && <h4 className="section__subtitle"> {subtitle} </h4>}
            <div className="section__carousel">
                <Carousel />
            </div>
        </div>
    </section>
  );
};

export default Section;
