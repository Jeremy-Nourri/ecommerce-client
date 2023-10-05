import axios from 'axios';
import ProductCardInterface from '@/interfaces/productCard.interface';

export default async function getProductsByCategory(name: string): Promise<ProductCardInterface[] | undefined>{
  try {
    const { data }: { data: ProductCardInterface[] } = await axios.get(
      `http://localhost:4000/category/${name}`
    );
    return data;
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}