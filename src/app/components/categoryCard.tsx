import Image from "next/image"
import CategoryCard from "@/interfaces/categoryCard.interface"

export default function CategoryCard({ name, description, image }: CategoryCard) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="w-full">
        <Image
          src={image}
          alt={"image de la catégorie " + name}
          placeholder="blur"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="text-right">
          <button className="rounded-md p-3 btn-primary">Découvrir</button>
        </div>
      </div>
    </div>
  )
}