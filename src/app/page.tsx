import Image from 'next/image'
import imageIntro from '../../public/images/background-mobile.webp'
import savonLiquide from '../../public/images/savon-liquide.webp'
import logo from '../../public/images/logo-madjikarite.webp'
import ProductCard from './components/categoryCard'

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="relative min-h-screen">
        <Image src={imageIntro} 
          alt="background image"
          placeholder="blur"
          quality={100}
          priority
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="w-full h-[300px] absolute top-[25%] flex flex-col items-center justify-center bg-gray-200/70 p-4">
        <Image 
          src={logo} 
          alt="logo" 
          width={150} 
          height={150}
          priority
          className="mx-auto" 
        />
        <p className='text-2xl mb-1'>Avec Madjikarité,</p>
        <p className='text-2xl mb-1'>prenez soin de vous</p>
        <p className='text-2xl mb-1'>et du monde</p>
      </div>

      <h1 className="mt-10 mb-4 text-3xl font-bold text-center">Nos produits</h1>

      <div className="px-6">
        <ProductCard
          name="Savons liquides"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia."
          image={savonLiquide}
        />
      </div>
    </main>
  )
}
