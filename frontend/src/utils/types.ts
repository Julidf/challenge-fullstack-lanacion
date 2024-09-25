export interface CardProps {
    name: string;
    benefits: {
      Classic: number;
      Premium: number;
      Black: number;
    };
    image: string;
    url: string;
    closestLocation: number;
}