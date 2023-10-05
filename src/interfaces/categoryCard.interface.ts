import { StaticImageData } from "next/image";

export default interface CategoryCardInterface {
  name: string;
  image: StaticImageData;
  description: string;
}