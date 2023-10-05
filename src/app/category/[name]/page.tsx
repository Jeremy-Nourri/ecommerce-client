import getProductsByCategory from "@/app/libs/api/getProductsByCategory";
import ProductCard from "@/app/components/productCard";

export default async function Category({ params }: { params: { name: string } }) {

  const { name } = params;

  const data = await getProductsByCategory(name);

  return (

    <main className="flex flex-col items-center">

      {data && data.map((product, index: number) => (
        <ProductCard
          key={index}
          name={product.name}
          shortDescription={product.shortDescription}
          pictures={product.pictures}
          price={product.price}
          weight={product.weight}
        />
      ))}

    </main>

  )
}

