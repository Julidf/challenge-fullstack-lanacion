import { useEffect, useState } from "react";
import { CardProps } from "../../utils/types";
import Carousel from "../carousel/carousel";
import "./section.css";
import { getCardData } from "../../utils/services";

interface SectionProps {
  id: string;
  title: string;
  buttonText: string;
  subtitle?: string;
}

const Section = ({ id, title, buttonText, subtitle }: SectionProps) => {
  const [data, setData] = useState<CardProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    getCardData({id})
      .then((items) => {setData(items.data); setTotalItems(items.total)})
      .catch((err) => setError(err.message));
  }, [id]);

  return (
    <section className="section" id={id}>
        <div className="section__container">
            <div className="section__top">
                <h1 className="section__title"> {title} </h1>
                <a href="#" className="section__button"> {buttonText} </a>
            </div>
            {subtitle && <h4 className="section__subtitle"> {subtitle} </h4>}
            <div className="section__carousel">
                <Carousel data={data} error={error} totalItems={totalItems}/>
            </div>
        </div>
    </section>
  );
};

export default Section;
