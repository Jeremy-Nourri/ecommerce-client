import axios from 'axios';
import ProductPageInterface from '@/interfaces/productPage.interface';

export default async function getOneProductByName(name: string): Promise<ProductPageInterface>{
  try {
    const { data } = await axios.get<ProductPageInterface>(
      `http://localhost:4000/product/${name}`
    );
    return data;
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}