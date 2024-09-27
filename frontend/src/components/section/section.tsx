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
  const [totalItems, setTotalItems] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCardData({id})
      .then((items) => {setData(items.data); setTotalItems(items.total)})
      .catch((err) => setError(err.message));
  }, [id]);

  const fetchNextPage = async () => {
    try {
      const nextPageData = await getCardData({id, offset: data.length});
      setData([...data, ...nextPageData.data]);
      setTotalItems(nextPageData.total);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <section className="section" id={id}>
        <div className="section__container">
            <div className="section__top">
                <h1 className="section__title"> {title} </h1>
                <a href="#" className="section__button"> {buttonText} </a>
            </div>
            {subtitle && <h4 className="section__subtitle"> {subtitle} </h4>}
            <div className="section__carousel">
                <Carousel data={data} error={error} totalItems={totalItems} fetchNextPage={fetchNextPage} />
            </div>
        </div>
    </section>
  );
};

export default Section;
