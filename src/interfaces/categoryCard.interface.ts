import { StaticImageData } from "next/image";

export default interface CategoryCard {
  name: string;
  image: StaticImageData;
  description: string;
}