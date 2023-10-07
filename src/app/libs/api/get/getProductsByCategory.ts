import axios from 'axios';
import ProductCardInterface from '@/interfaces/productCard.interface';

export default async function getProductsByCategory(name: string): Promise<ProductCardInterface[]>{
  try {
    const { data } = await axios.get<ProductCardInterface[]>(
      `http://localhost:4000/category/${name}`
    );
    return data;
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}