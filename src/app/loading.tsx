import Image from 'next/image'
import spinner from '../../public/spinner.gif'

export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#f5f5f5]">
      <Image src={spinner} alt="spinner" />
    </div>
  )
}