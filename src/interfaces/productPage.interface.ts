export default interface ProductPageInterface {
  id: number;
  name: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  weight: string;
  parfum: string;
  category: {
    name: string;
  }
  pictures: {
    id: number;
    url: string;
  }[];
}