import ImageComponent from '@/components/ImageComponent'
import Image from 'next/image'

export const metadata = {
  title: 'nellfs',
  description: 'nellfs portfolio'
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-2xl">edite minha foto</h1>
      <div >
        <Image
          src={'/assets/profile/nellfs.png'}
          width={300}
          height={300}
          alt='Um pinguim de pelucia'
        >

        </Image >

        <Image
          src={'/assets/items/glasses.png'}
          width={300}
          height={300}
          alt='Um pinguim de pelucia'
        >

        </Image>
        <ImageComponent imgPath='/assets/items/wizard_hat.png' />
      </div>
    </div >
  )
}
