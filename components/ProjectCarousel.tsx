import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
export default function Carousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full  rounded-lg relative'>
      <div className='flex transition-transform duration-500 ease-in-out'>
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt='banner'
            width={300}
            height={100}
            className={`${
              i !== current && 'hidden'
            } group-hover:scale-110 ease-in-out duration-500 transition-all z-0 h-44 object-contain`}
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <ChevronLeft
            onClick={prev}
            className='absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 shadow'
          />

          <ChevronRight
            onClick={next}
            className='absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 shadow'
          />
        </>
      )}
    </div>
  );
}
