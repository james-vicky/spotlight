import Image from 'next/image'
import { SimpleLayout } from '@/components/SimpleLayout'

// Import your images
import landscape1 from '@/images/photography/landscape1.jpg'
import landscape2 from '@/images/photography/landscape2.jpg'
import landscape3 from '@/images/photography/landscape3.jpg'
import portrait1 from '@/images/photography/portrait1.jpg'
import portrait2 from '@/images/photography/portrait2.jpg'
import portrait3 from '@/images/photography/portrait3.jpg'

const photographs = [
  {
    title: 'Mountain Vista',
    category: 'Landscape',
    image: landscape1,
    isLandscape: true,
  },
  {
    title: 'Urban Portrait',
    category: 'Portrait',
    image: portrait1,
    isLandscape: false,
  },
  {
    title: 'Coastal Sunset',
    category: 'Landscape',
    image: landscape2,
    isLandscape: true,
  },
  {
    title: 'Street Artist',
    category: 'Portrait',
    image: portrait2,
    isLandscape: false,
  },
  {
    title: 'Forest Path',
    category: 'Landscape',
    image: landscape3,
    isLandscape: true,
  },
  {
    title: 'City Life',
    category: 'Portrait',
    image: portrait3,
    isLandscape: false,
  },
  {
    title: 'Desert Dawn',
    category: 'Landscape',
    image: landscape1,
    isLandscape: true,
  },
  {
    title: 'Fashion Portrait',
    category: 'Portrait',
    image: portrait1,
    isLandscape: false,
  },
  {
    title: 'Mountain Lake',
    category: 'Landscape',
    image: landscape2,
    isLandscape: true,
  },
  {
    title: 'Artist Study',
    category: 'Portrait',
    image: portrait2,
    isLandscape: false,
  },
];


export const metadata = {
  title: 'Photography',
  description: 'Capturing moments through my lens.',
}

export default function Photography() {
  return (
    <SimpleLayout
      title="Through My Lens: Capturing Life's Beautiful Moments"
      intro="Welcome to my photography portfolio. Here, I showcase a curated collection of portraits and landscapes that capture the essence of human emotions and nature's grandeur."
    >
      <div className="mt-16 sm:mt-20">
        <div className="grid grid-cols-1 gap-8">
          {/* Group photos into rows of 2 with alternating layout */}
          {Array.from({ length: Math.ceil(photographs.length / 2) }, (_, rowIndex) => {
            const isEvenRow = rowIndex % 2 === 0;

            return (
              <div 
                key={rowIndex}
                className="grid grid-cols-3 gap-4 h-40 md:h-80"
              >
                {photographs
                  .slice(rowIndex * 2, (rowIndex + 1) * 2)
                  .map((photo, index) => (
                    <div 
                      key={`${rowIndex}-${index}`}
                      className={`group relative overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800 ${
                        photo.isLandscape ? 'col-span-2' : 'col-span-1'
                      } ${isEvenRow && photo.isLandscape ? 'order-last' : ''}`}
                    >
                      <div className="absolute inset-0">
                        <Image
                          src={photo.image}
                          alt={photo.title}
                          className="object-cover transition duration-300 group-hover:scale-105"
                          sizes="(min-width: 1024px) 33vw, 100vw"
                          fill
                          priority={rowIndex === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/0 opacity-0 transition duration-300 group-hover:opacity-100" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition duration-300 group-hover:opacity-100">
                        <h3 className="text-lg font-semibold tracking-tight">{photo.title}</h3>
                        <p className="mt-1 text-sm text-zinc-200">{photo.category}</p>
                      </div>
                    </div>
                  ))}
              </div>
            );
          })}
        </div>
      </div>
    </SimpleLayout>
  );
}