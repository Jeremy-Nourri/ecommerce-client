import Image from "next/image"
import ProductCard from "@/interfaces/productCard.interface"

export default function ProductCard({ 
  name, 
  shortDescription, 
  pictures, 
  price, 
  weight 
}: ProductCard) {

  const { url } = pictures[0];

  return (
    <div className="card bg-base-100 shadow-xl relative w-[90%]">
      <figure className="w-full">
        <Image
          src={url}
          width={300}
          height={300}
          alt={"image du produit " + name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{shortDescription}</p>
        <p>{price} €</p>
        <p>{weight}</p>
        <div className="text-right">
          <button className="rounded-md p-3 btn-primary">Découvrir</button>
        </div>
      </div>
    </div>
  )
}