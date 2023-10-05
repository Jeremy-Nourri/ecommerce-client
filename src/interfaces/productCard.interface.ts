import { StaticImageData } from "next/image";

export default interface ProductCardProps {
  key: number;
  name: string;
  price: number;
  shortDescription: string;
  weight: number;
  pictures: {
    id: number;
    url: StaticImageData;
  }[];
}
