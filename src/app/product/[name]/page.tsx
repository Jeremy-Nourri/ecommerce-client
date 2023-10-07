import Image from 'next/image'
import getOneProductByName from '@/app/libs/api/get/getOneProductByName'

export default async function Product({ params }: { params: { name: string } }) {

  const product = await getOneProductByName(params.name);

  return (
    <main className="flex flex-col items-center">

      {product && (
        <div className="w-[310px] my-6 flex flex-col justify-center bg-base-100 rounded-2xl shadow-xl p-4">
          <figure className="w-full">
            <Image
              src={product.pictures[0].url}
              width={300}
              height={300}
              alt={"image du produit " + product.name}
              className="rounded-2xl mx-auto"
            />
          </figure>
          <div className="p-4">
            <h2 className="text-md font-bold my-2">{product.name}</h2>
            <p className="text-justify text-sm my-2" >{product.shortDescription}</p>
            <div className="flex justify-between mb-8 text-center text-sm items-center my-4">
              <p className="px-4 py-2 bg-accent text-right font-semibold" >Prix: {product.price} €</p>
              <p>{product.weight}</p>
            </div>
            <div className="flex justify-between text-white text-sm">
              <button className="bg-primary px-4 py-2 rounded-md shadow-md hover:opacity-80 transition-colors">
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}